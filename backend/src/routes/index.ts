// backend/routes/index.js
import { Router, Request, Response } from 'express';

const router = Router();

// Add a XSRF-TOKEN cookie
router.get("/api/csrf/restore", (req: Request, res: Response) => {
  const csrfToken = req.csrfToken?.();
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    'XSRF-Token': csrfToken
  });
});

module.exports = router;
