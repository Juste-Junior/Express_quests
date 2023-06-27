const express = require('express');
const database = require('./database');

const app = express();
const port = 5000;

const {getMovies, getMovieById} = require('./movieHandlers')
const {getUsers} = require('./userHandlers')

app.get('/api/movies', getMovies);
app.get('/api/movies/:id', getMovieById);
app.get('/api/users', getMovies);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
