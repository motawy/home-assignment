import { Router, Request, Response } from 'express';
import { Instant } from '../models/Instant'
import { IInstant } from '../models/IInstant'
import { v4 as uuidv4 } from 'uuid'
import { upload } from './multer/config'
import sendTask from './instant.tasker'
const router: Router = Router();

/**
 * Endpoint 'Get all photos'
 * http://localhost:3000/api/v0/instants/all
 * Returns json format data of all pictures
 */
router.get('/all', async (req: Request, res: Response) => {
    const instants = await Instant.find()
    if (instants === null || instants === undefined) return res.status(400).send("Error in getting the photos")
    return res.status(200).send(instants)
})

/**
 * Endpoint 'Create an instant'
 * http://localhost:3000/api/v0/instants/new
 * Using the 'upload' middleware to accept multiform/form-data
 * Saves new Instant to the DB and send resize job the the queue
 */
router.post('/new', (req: Request, res: Response) => {
    upload(req, res, async (err: any) => {
        if (err) return res.status(400).send(err)
        const { username, photoname, weight, length, latitude, longitude } = req.body;
        const newInstant: IInstant = new Instant({
            _id: uuidv4(),
            username: username,
            photoname: photoname,
            weight: weight,
            length: length,
            latitude: latitude,
            longitude: longitude,
            instant: req.file
        })
        try {
            await newInstant.save()
            res.status(200).send("Instant saved successfully.")
            const payload: Object = {
                _id: newInstant._id,
                instant: newInstant.instant
            }
            await sendTask(payload)
        } catch (error) {
            return res.status(400).send(error.name)
        }
    })
})

export const InstantRouter: Router = router;