import { Router, Request, Response } from 'express';
import { Instant } from '../models/Instant'

const router: Router = Router();

router.get('/instants', async (req: Request, res: Response) => {
    const instants = await Instant.find()
    res.send(instants)
});

export const InstantRouter: Router = router;