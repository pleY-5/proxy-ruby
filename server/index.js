const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/:id', express.static('public'));

app.set('port', process.env.PORT || 8080);

app.listen(app.get('port'), () => {
  console.log(`app is listening to port ${app.get('port')}`);
});
