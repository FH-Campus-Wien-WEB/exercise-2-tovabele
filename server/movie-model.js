/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

const movies = {
   tt0083658 :
   {
      "imdbID": "tt0083658",
      "Title": "Blade Runner",
      "Runtime": 117,
      "Released": "1982-06-25",
      "Genres": ["Action", "Drama", "Sci - Fi"],
      "Directors": ["Ridley Scott"],
      "Writers": ["Hampton Fancher", "David Webb Peoples", "Philip K. Dick"],
      "Actors": ["Harrison Ford", "Rutger Hauer", "Sean Young"],
      "Plot": "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOWQ4YTBmNTQtMDYxMC00NGFjLTkwOGQtNzdhNmY1Nzc1MzUxXkEyXkFqcGc@._V1_SX300.jpg",
      "Metascore": 84,
      "imdbRating": 8.1
   }
   ,

         tt0248845 :
      {
         "imdbID": "tt0248845",
         "Title": "Hedwig and the Angry Inch",
         "Runtime": 95,
         "Released": "2001-08-31",
         "Genres": ["Comedy", "Drama", "Music"],
         "Directors": ["John Cameron Mitchell"],
         "Writers": ["John Cameron Mitchell", "Stephen Trask"],
         "Actors": ["John Cameron Mitchell", "Miriam Shor", "Stephen Trask"],
         "Plot": "A gender-queer punk-rock singer from East Berlin tours the U.S. with her band as she tells her life story and follows the former lover/band-mate who stole her songs.",
         "Poster": "https://m.media-amazon.com/images/M/MV5BN2Q4MGJmYTgtNDhiMS00MTcwLTlhZjgtN2U5NWUyYzFiMWRmXkEyXkFqcGc@._V1_SX300.jpg",
         "Metascore": 85,
         "imdbRating": 7.7
      }
      ,

      tt0887912:
      {
         "imdbID": "tt0887912",
         "Title": "The Hurt Locker",
         "Runtime": 131,
         "Released": "2009-07-31",
         "Genres": ["Drama", "Thriller", "War"],
         "Directors": "Kathryn Bigelow",
         "Writers": "Mark Boal",
         "Actors": ["Jeremy Renner", "Anthony Mackie", "Brian Geraghty"],
         "Plot": "During the Iraq War, a Sergeant recently assigned to an army bomb squad is put at odds with his squad mates due to his maverick way of handling his work.",
         "Poster": "https://m.media-amazon.com/images/M/MV5BNzgyMGM2YTItYzY2Yi00NDQ0LWE0M2EtMGUzYjFlMDgyY2M3XkEyXkFqcGc@._V1_SX300.jpg",
         "Metascore": 95,
         "imdbRating": 7.5,
      }
}
module.exports.movies = movies;