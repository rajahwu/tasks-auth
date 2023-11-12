// backend/routes/api/index.ts
import { Router, Request, Response } from 'express';
const apiRouter = require('./api') as Router;

const router: Router = Router();

router.use('/api', apiRouter);

router.post('/test', function(req: Request, res: Response) {
  res.json({ requestBody: req.body });
});

export default router;
