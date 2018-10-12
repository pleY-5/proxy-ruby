require('newrelic');
const express = require('express');
const app = express();
const proxy = require('express-http-proxy');
const path = require('path');

const bodyParser = require('body-parser');
const compression = require('compression');

// const router = require('./routes.js');

app.use(bodyParser.json());
app.use(compression());

app.use(process.env.LOADER_URL, (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'loaderio-7e70dcee6351c8c38041763c268f00f9.tx'))
})

app.use('/:nameOrId', express.static('public'));

app.set('port', 8080);

app.get('/api/sidebar/restaurants/:nameOrId', proxy('http://ec2-52-53-240-118.us-west-1.compute.amazonaws.com'));
// app.get('/api/sidebar/restaurants/:nameOrId', proxy('http://localhost:7878/'));

// app.use('http://localhost:7878', router);
// app.use('/api', router);
app.listen(app.get('port'), () => {
  console.log(`app is listening to port ${app.get('port')}`);
});