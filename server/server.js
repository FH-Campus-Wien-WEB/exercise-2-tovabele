const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const movieModel = require('./movie-model.js');

const app = express();

// Parse urlencoded bodies
app.use(bodyParser.json()); 

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for all movies..
app.get('/movies', function (req, res) {
  /* Task 1.2. Return the movies from the model as an array */
  //console.log("sending movie json")
    res.json(movieModel)

})

// Configure a 'get' endpoint for a specific movie
app.get('/movies/:imdbID', function (req, res) {
  const requestedID = req.params.imdbID
//  test ID: tt0083658
  const movie = movieModel.movies[requestedID]
//  const movie = movieModel.movies.find(m => m.imdbID === requestedID)
  console.log(requestedID)
  console.log(movieModel.movies.requestedID)
  
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).send("Movie not found"); // Handle missing data
  }
})

/* Task 3.1 and 3.2.
   - Add a new PUT endpoint
   - Check whether the movie sent by the client already exists 
     and continue as described in the assignment */

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

