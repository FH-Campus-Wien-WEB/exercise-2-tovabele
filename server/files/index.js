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

        movie.forEach(item => {
          const ratingList = document.createElement('ul')
          ratingList.id = "ratings"
          bodyElement.append(ratingList)

          const poster = document.createElement('img')
          bodyElement.append(poster)
          poster.src = item.Poster

          const header = document.createElement('h1')
          bodyElement.append(header)
          header.innerText = item.Title

          const releaseList = document.createElement('ul')
          releaseList.id = "releaseList"
          bodyElement.append(releaseList)

          const runtime = document.createElement('li')
          const hours = Math.floor(item.Runtime / 60)
          const mins = item.Runtime % 60
          runtime.textContent = 'Runtime: ' + hours + 'h ' + mins + 'm'
          releaseList.append(runtime)

          const releasedOn = document.createElement('li')
          releasedOn.textContent = 'Released on ' + item.Released
          releaseList.append(releasedOn)

          const genreList = document.createElement('ul')
          genreList.id = "genre"
          bodyElement.append(genreList)
          item.Genres.forEach(genre => {
            let li = document.createElement('li')
            li.textContent = genre
            genreList.appendChild(li)
          })

          generateUnorderedList(body, "Director", item.Directors)
          generateUnorderedList(body, "Writer", item.Writers)
          generateUnorderedList(body, "Actor", item.Actors)

          const plot = document.createElement('div')
          plot.textContent = item.Plot
          bodyElement.append(plot)


          const metascore = document.createElement('li')
          metascore.textContent = 'Metacritics: ' + item.Metascore + '%'
          ratingList.append(metascore)

          const imdbrating = document.createElement('li')
          imdbrating.textContent = 'IMDB: ' + item.imdbRating + '/10'
          ratingList.append(imdbrating)
          bodyElement.append(ratingList)

          const editButton = document.createElement(editButton)
          bodyElement.append(editButton)
        })
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
