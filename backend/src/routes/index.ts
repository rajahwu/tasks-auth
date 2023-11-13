const express = require('express');

const router = express.Router();

// Add a XSRF-TOKEN cookie
router.get("/api/csrf/restore", (req: Express.Request, res: Express.Response) => {
  const csrfToken = req.csrfToken?.() || "";
  res.cookie("XSRF-TOKEN", csrfToken);
  res.status(200).json({
    'XSRF-Token': csrfToken
  });
});

module.exports = router;
