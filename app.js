require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const helmet = require('helmet');
const centralError = require('./middlewares/centralError');
const router = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const cors = require('./middlewares/cors');
const limiter = require('./middlewares/rate-limiter');

const { NODE_ENV, BASE_URL } = process.env;
const { PORT = 3000 } = process.env;
const app = express();
app.use(cors);
mongoose
  .connect(NODE_ENV === 'production' ? BASE_URL : 'mongodb://localhost:27017/bitfilmsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

app.use(requestLogger);
app.use(limiter);
app.use(helmet());
app.use(express.json());
app.use('/', router);
app.use(errorLogger);
app.use(errors());
app.use(centralError);

app.listen(PORT);
