import { Router, Request, Response } from 'express';
import { InstantRouter } from './instant/routes/instant.router';

const router: Router = Router();

router.use('/instant', InstantRouter);

router.get('/', async (req: Request, res: Response) => {
    res.send(`Version 0 - Testing`);
});

export const IndexRouter: Router = router;