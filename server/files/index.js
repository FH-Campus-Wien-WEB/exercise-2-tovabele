window.onload = function () {
  const xhr = new XMLHttpRequest();

  function generateUnorderedList(div, title, entries) {
    title = title+((entries.length === 1) ? "" : "s") //postfix
    const infoParagraph = Object.assign(document.createElement('div'), { id: title })
    const header = Object.assign(document.createElement('h2'), {textContent : title})
    const list = document.createElement('ul')
    list.classList.add('unsortedlist')

    entries.forEach(item => {
      const listItem = Object.assign(document.createElement('li'),{textContent: item})
      listItem.classList.add('listitem')
      list.append(listItem)
    })
    infoParagraph.append(header, list)
    div.append(infoParagraph)
  }

  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    const mainElement = document.querySelector('main')
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);

      //looping through the json movie objects
      for (const movie of movies) {
        //horrible exercise 1 code here:
/*         const article = document.createElement('article')
        article.id = movie.imdbID
 */
        const article = Object.assign(document.createElement('article'), {id : movie.imdbID})
        article.classList.add('article')
        
        //ratings on top
        const ratingList = Object.assign(document.createElement('div'),{id: "Rating List"})
        ratingList.classList.add('ratings')
        const metascore = Object.assign(document.createElement('span'),{textContent : 'Metacritics: ' + movie.Metascore + '%  | '})
        const imdbrating = Object.assign(document.createElement('span'),{textContent : 'IMDB: ' + movie.imdbRating + '/10'})
        ratingList.append(metascore, imdbrating)

        const poster =Object.assign(document.createElement('div'), { id: "Poster"})
        const img = document.createElement('img')
        img.src = movie.Poster
        poster.classList.add('poster')
        poster.append(img)

        const titleArea = Object.assign(document.createElement('div'),{id: "Movie Title"})
        const header = document.createElement('h1')
        header.innerText = movie.Title

        const editButton = Object.assign(document.createElement('button'),{textContent : 'Edit'})
        editButton.classList.add('editbutton')
        editButton.onclick = function () {
          location.href = 'edit.html?imdbID=' + article.id
        }

        titleArea.append(header, editButton)


        const releaseList = Object.assign(document.createElement('div'), {id: "Time Infos"})
        releaseList.classList.add('releaseList')
        const runtime = document.createElement('span')
        const hours = Math.floor(movie.Runtime / 60)
        const mins = movie.Runtime % 60
        runtime.textContent = 'Runtime: ' + hours + 'h ' + mins + 'm' + ' | '

        const releasedOn = document.createElement('span')
        releasedOn.textContent = 'Released on ' + movie.Released
        releaseList.append(runtime)
        releaseList.append(releasedOn)


        const genresDiv = Object.assign(document.createElement('div'),{ id : 'Genres'})
        // add flexbox to genre css class
        genresDiv.classList.add("horizontal-genres-container")
        //for (const genre of Genres){
        movie.Genres.forEach(genre => {
          const span = document.createElement("span")
          span.textContent = genre
          span.classList.add("genre")
          genresDiv.appendChild(span)
        })

        const infoArea = Object.assign(document.createElement('div'),{id : "Info Area"})
        const plot = Object.assign(document.createElement('div'), { id: 'Plot', textContent: movie.Plot })
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
        mainElement.append(article)
        bodyElement.append(mainElement)
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
