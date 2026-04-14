const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');
console.log(Object.keys(movieModel.movies))

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json());

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for all movies..
app.get('/movies', function (req, res) {
  /* Task 1.2. Return the movies from the model as an array */
  //console.log("sending movie json")
  res.json(Object.values(movieModel.movies))
})

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  const requestedID = req.params.imdbID
  const movie = movieModel.movies[requestedID]
  //  test ID: tt0083658
  //console.log(requestedID)

  if (movie) {
    res.json(movie);
  } else {
    res.status(404).send("Movie not found"); // Handle missing data
  }
})

// Task 3.1 and 3.2 - Add a new PUT endpoint
app.put('/movies/:imdbID', function (req, res) {
  const imdbID = req.params.imdbID
  const data = req.body
  //console.log("PUT received", imdbID)

  //Check whether the movie sent by the client already exists 
  if (imdbID in movieModel.movies) {
    //update movie  
    movieModel.movies[imdbID] = data

    res.status(200).send("Updating movie" + movieModel.movies[imdbID].Title)
    console.log(Object.keys(movieModel.movies))


  } else {
    //add movie
      const addedmovie = { imdbID: imdbID }

      addedmovie.Title = data.Title
      addedmovie.Runtime = data.Runtime
      addedmovie.Released = data.Released
      addedmovie.Genres = data.Genres
      addedmovie.Metascore = data.Metascore
      addedmovie.imdbRating = data.imdbRating
      addedmovie.Plot = data.Plot
      addedmovie.Directors = data.Directors
      addedmovie.Writers = data.Writers
      addedmovie.Actors = data.Actors
      addedmovie.Poster = data.Poster
     //doesn't work :
     //movieModel.movies[imdbID] = data
    //movieModel.movies[imdbID].imdbID = "imdbID"

    movieModel.movies[imdbID] = addedmovie
    res.status(201).send("Adding movie:" + imdbID)
    console.log(Object.keys(movieModel.movies))

  }
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

