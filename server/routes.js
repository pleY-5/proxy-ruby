const router = require('express').Router();
const proxy = require('express-http-proxy');

router.use('/sidebar', proxy('http://ec2-18-234-26-142.compute-1.amazonaws.com/'));

router.use('/photos', proxy('http://ec2-18-212-199-79.compute-1.amazonaws.com/'));

router.get('/reviews/:id', proxy('http://ec2-18-208-135-101.compute-1.amazonaws.com/'));

router.use('/header', proxy('http://ec2-18-232-101-230.compute-1.amazonaws.com/'));

module.exports = router;
