const apiRouter = require('./api');

router.use('/api', apiRouter);

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });