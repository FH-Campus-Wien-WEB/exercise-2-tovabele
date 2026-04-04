window.onload = function () {
  const xhr = new XMLHttpRequest();

  function generateUnorderedList(div, title, entries) {
    const header = document.createElement('h2')
    header.textContent = title
    const list = document.createElement('ul')
    list.classList.add('unsortedlist')

    entries.forEach(item => {
      const listItem = document.createElement('li')
      listItem.classList.add('listitem')
      listItem.textContent = item
      list.append(listItem)
    })

    div.append(header, list)
  }

  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);

      //looping through the json movie objects
      for (const movie of movies) {
        //console.log("stepping through movies array")

        //horrible exercise 1 code here:
        const article = document.createElement('article')
        article.classList.add('article')
        article.id = movie.imdbID
        
        //ratings on top
        const ratingList = document.createElement('div')
        ratingList.classList.add('ratings')
        const metascore = document.createElement('span')
        metascore.textContent = 'Metacritics: ' + movie.Metascore + '%  | '
        const imdbrating = document.createElement('span')
        imdbrating.textContent = 'IMDB: ' + movie.imdbRating + '/10'
        ratingList.append(metascore, imdbrating)

        const poster = document.createElement('img')
        poster.classList.add('poster')
        poster.src = movie.Poster

        const titleArea = document.createElement('div')
        const header = document.createElement('h1')
        header.innerText = movie.Title

        const editButton = document.createElement('button')
        editButton.classList.add('editbutton')
        editButton.textContent = 'Edit'
        editButton.onclick = function () {
          location.href = 'edit.html?imdbID=' + article.id
        }

        titleArea.append(header, editButton)


        const releaseList = document.createElement('div')
        releaseList.classList.add('releaseList')
        const runtime = document.createElement('span')
        const hours = Math.floor(movie.Runtime / 60)
        const mins = movie.Runtime % 60
        runtime.textContent = 'Runtime: ' + hours + 'h ' + mins + 'm' + ' | '

        const releasedOn = document.createElement('span')
        releasedOn.textContent = 'Released on ' + movie.Released
        releaseList.append(runtime)
        releaseList.append(releasedOn)


        const genresDiv = document.createElement('div')
        // add flexbox to genre css class
        genresDiv.classList.add("horizontal-genres-container")
        //for (const genre of Genres){
        movie.Genres.forEach(genre => {
          const span = document.createElement("span")
          span.textContent = genre
          span.classList.add("genre")
          genresDiv.appendChild(span)
        })

        const infoArea = document.createElement('div')
        const plot = document.createElement('div')
        plot.textContent = movie.Plot
        infoArea.append(plot)
        generateUnorderedList(infoArea, "Director", movie.Directors)
        generateUnorderedList(infoArea, "Writer", movie.Writers)
        generateUnorderedList(infoArea, "Actor", movie.Actors)

        //})
        /* Task 1.3. Add your code from exercise 1 here 
        and include a non-functional 'Edit' button
        to pass this test */

        article.append(ratingList)
        article.append(poster)
        article.append(titleArea)
        article.append(releaseList)
        article.append(genresDiv)
        article.append(infoArea)
        bodyElement.append(article)
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
