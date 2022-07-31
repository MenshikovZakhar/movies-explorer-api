const mongoose = require('mongoose');
const validator = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Обязательное поле для заполнения'],
  },
  director: {
    type: String,
    required: [true, 'Обязательное поле для заполнения'],
  },
  duration: {
    type: Number,
    required: [true, 'Обязательное поле для заполнения'],
  },
  year: {
    type: String,
    required: [true, 'Обязательное поле для заполнения'],
  },
  description: {
    type: String,
    required: [true, 'Обязательное поле для заполнения'],
  },
  image: {
    type: String,
    required: [true, 'Обязательное поле для заполнения'],
    validate: [validator.isURL, 'Некорректный URL адрес'],
  },
  trailerLink: {
    type: String,
    required: [true, 'Обязательное поле для заполнения'],
    validate: [validator.isURL, 'Некорректный URL адрес'],
  },
  thumbnail: {
    type: String,
    required: [true, 'Обязательное поле для заполнения'],
    validate: [validator.isURL, 'Некорректный URL адрес'],
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    required: [true, 'Обязательное поле для заполнения'],
  },
  nameRU: {
    type: String,
    required: [true, 'Обязательное поле для заполнения'],
  },
  nameEN: {
    type: String,
    required: [true, 'Обязательное поле для заполнения'],
  },
});

module.exports = mongoose.model('movie', movieSchema);
