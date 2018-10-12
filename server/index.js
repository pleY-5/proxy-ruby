require('newrelic');
const express = require('express');
const app = express();
const proxy = require('express-http-proxy');

const bodyParser = require('body-parser');
const compression = require('compression');

const router = require('./routes.js');

app.use(bodyParser.json());
app.use(compression());

app.use('/:nameOrId', express.static('public'));

app.set('port', 8080);

app.get('/api/sidebar/restaurants/:nameOrId', proxy('http://ec2-52-53-240-118.us-west-1.compute.amazonaws.com'));
// app.get('/api/sidebar/restaurants/:nameOrId', proxy('http://localhost:7878/'));

// app.use('http://localhost:7878', router);
// app.use('/api', router);
app.listen(app.get('port'), () => {
  console.log(`app is listening to port ${app.get('port')}`);
});