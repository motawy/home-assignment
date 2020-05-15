import { Router, Request, Response } from 'express';
import { InstantRouter } from './instant/routes/instant.router';

const router: Router = Router();
/**
 * Entrypoint route of instants
 */
router.use('/instants', InstantRouter);
router.get('/', async (req: Request, res: Response) => {
    res.send(`Version 0 - Instants`);
});

export const IndexRouter: Router = router;