import { Router, Request, Response } from 'express';
import { Instant } from '../models/Instant'
import { v4 as uuidv4 } from 'uuid'
const router: Router = Router();
const queue = "instants"

// Get all photos
router.get('/instants', async (req: Request, res: Response) => {
    const instants = await Instant.find()
    if (instants === null || instants === undefined) return res.status(400).send("Error in getting the photos")
    return res.status(200).send(instants)
})

router.post('/instant', async (req: Request, res: Response) => {
    const photo = new Instant({
        _id: uuidv4(),
        photo: req.body.photo,
        username: req.body.username,
        photoname: req.body.photoname,
        weight: req.body.weight,
        length: req.body.length,
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        timestamp: Date.now().toString()
    })

    try {
        await photo.save()
        return res.status(200).send("Photo saved successfully.")
    } catch (error) {
        return res.status(400).send(error)
    }
})

export const InstantRouter: Router = router;