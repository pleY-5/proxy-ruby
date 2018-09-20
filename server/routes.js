const router = require('express').Router();
const proxy = require('express-http-proxy');

router.use('/sidebar', proxy('http://localhost:7878'));

router.use('/photos', proxy('http://localhost:3001'));

router.get('/reviews/:id', proxy('http://localhost:3002'));

router.use('/header', proxy('http://localhost:7763'));

module.exports = router;
