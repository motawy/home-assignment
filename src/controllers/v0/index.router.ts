import { Router, Request, Response } from 'express';
import { InstantRouter } from './instant/routes/instant.router';

const router: Router = Router();

router.use('/instant', InstantRouter);

router.get('/', async (req: Request, res: Response) => {
    res.send(`V0`);
});

export const IndexRouter: Router = router;