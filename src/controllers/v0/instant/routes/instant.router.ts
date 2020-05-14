import { Router, Request, Response } from 'express';
import { Instant, IInstant } from '../models/Instant'
import { v4 as uuidv4 } from 'uuid'
import { upload } from './multer/config'
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
        const photo: IInstant = new Instant({
            _id: uuidv4(),
            username: username,
            photoname: photoname,
            weight: weight,
            length: length,
            latitude: latitude,
            longitude: longitude,
            photo: req.file
        })
        console.log(photo);

        try {
            await photo.save()
            return res.status(200).send("Instant saved successfully.")
        } catch (error) {
            return res.status(400).send(error.name)
        }
    })
})

export const InstantRouter: Router = router;