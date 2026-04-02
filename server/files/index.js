window.onload = function () {
  const xhr = new XMLHttpRequest();

  function interpretJSON(j) {
    const data = JSON.parse(j);
    const body = document.body;


    //looping through the json movie objects
    data
    return body
  }


  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        console.log("stepping through movies array")

        //horrible exercise 1 code here:
        //movie.forEach(item => {
        const ratingList = document.createElement('ul')
        ratingList.id = "ratings"
        bodyElement.append(ratingList)

        const poster = document.createElement('img')
        bodyElement.append(poster)
        poster.src = movie.Poster
        console.log(movie.Poster)
        const header = document.createElement('h1')
        bodyElement.append(header)
        header.innerText = movie.Title
        console.log(movie.Title)
        const releaseList = document.createElement('ul')
        releaseList.id = "releaseList"
        bodyElement.append(releaseList)

        const runtime = document.createElement('li')
        const hours = Math.floor(movie.Runtime / 60)
        const mins = movie.Runtime % 60
        runtime.textContent = 'Runtime: ' + hours + 'h ' + mins + 'm'
        releaseList.append(runtime)

        const releasedOn = document.createElement('li')
        releasedOn.textContent = 'Released on ' + movie.Released
        releaseList.append(releasedOn)

        const genres = document.createElement('div')
        // add flexbox to genre css class
        genres.classList.add("horizontal-genres-container")
        movie.Genres.forEach(genre => {
          const span = document.createElement("span")
          span.textContent = genre
          genres.appendChild(span)
        })
        bodyElement.append(genres)
        //})

        generateUnorderedList(body, "Director", movie.Directors)
        generateUnorderedList(body, "Writer", movie.Writers)
        generateUnorderedList(body, "Actor", movie.Actors)

        const plot = document.createElement('div')
        plot.textContent = movie.Plot
        bodyElement.append(plot)


        const metascore = document.createElement('li')
        metascore.textContent = 'Metacritics: ' + movie.Metascore + '%'
        ratingList.append(metascore)

        const imdbrating = document.createElement('li')
        imdbrating.textContent = 'IMDB: ' + movie.imdbRating + '/10'
        ratingList.append(imdbrating)
        bodyElement.append(ratingList)

        const editButton = document.createElement(editButton)
        bodyElement.append(editButton)
        //})
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */
      }

    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
        xhr.status +
        " - " +
        xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
