const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const path = require('path');
const rfs = require('rotating-file-stream'); // version 2.x
const swaggerDocs = require('../swaggerDocs');
const colorRoutes = require('./routes/color');

const app = express();
const requestLogStream = rfs.createStream('request.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'logs'),
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

const options = {
  customCss: '.swagger-ui .topbar { display: none }',
};


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, options, { explorer: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
// setup the logger
app.use(morgan(':method :url :status :res[content-length] - :response-time ms', { stream: requestLogStream }));
app.get('/', (req, res) => res.status(200).send({
  message: 'webcolor api server is live',
}));


app.use('/api/v1/colors', colorRoutes);


module.exports = app;
