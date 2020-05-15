import { Router, Request, Response } from 'express';
import { Instant } from '../models/Instant'
import { IInstant } from '../models/IInstant'
import { v4 as uuidv4 } from 'uuid'
import { upload } from './multer/config'
import createTask from './instant.tasker'
const router: Router = Router();
const queue = "instants"

// Get all photos
router.get('/all', async (req: Request, res: Response) => {
    const instants = await Instant.find()
    if (instants === null || instants === undefined) return res.status(400).send("Error in getting the photos")
    return res.status(200).send(instants)
})

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
            photo: req.file
        })
        try {
            await newInstant.save()
            res.status(200).send("Instant saved successfully.")
            createTask(newInstant.instant)
        } catch (error) {
            return res.status(400).send(error.name)
        }
    })
})

export const InstantRouter: Router = router;