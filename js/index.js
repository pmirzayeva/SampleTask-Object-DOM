const data={
    "Title": "Titanic",
    "Year": "1997",
    "Rated": "PG-13",
    "Released": "19 Dec 1997",
    "Runtime": "194 min",
    "Genre": "Drama, Romance",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Leonardo DiCaprio, Kate Winslet, Billy Zane",
    "Plot": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    "Language": "English, Swedish, Italian, French",
    "Country": "United States, Mexico",
    "Awards": "Won 11 Oscars. 126 wins & 83 nominations total",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "7.9/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "88%"
      },
      {
        "Source": "Metacritic",
        "Value": "75/100"
      }
    ],
    "Metascore": "75",
    "imdbRating": "7.9",
    "imdbVotes": "1,252,252",
    "imdbID": "tt0120338",
    "Type": "movie",
    "DVD": "01 Jun 2014",
    "BoxOffice": "$674,292,608",
    "Production": "N/A",
    "Website": "N/A",
    "Response": "True"
  }

  const movieContainer=document.querySelector("#movieContainer")

  function showMovieInfo(data){
    return `<div class="card m-2 p-2" style="width: 18rem;">
    <img src=${data.Poster} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.Title}</h5>
      <h6 class="card-text">${data.Year}</h6>
      <p class="card-text"><em>${data.Plot}</em></p>
      <p class="card-text">${data.Actors}</p>
      <p class="card-text">${data.Director}</p>

      <span id="dots">...</span>
      <span id="more" style="display: none;">
      <p class="card-text">${data.Genre}</p>
      <p><strong>ImdbRating: ${data.imdbRating}</strong></p>
      <p><strong> Metascore: ${data.Metascore}</strong></p>
      </span>
      <br>

      <button id="showBtn" type="button" class="btn btn-info">Read more</button>

  
    </div>
  </div>`
  }

  movieContainer.innerHTML=showMovieInfo(data)


    
    showBtn.addEventListener('click', function() {
      const showBtn = document.querySelector("#showBtn")
      const dots = document.querySelector("#dots")
      const more =  document.querySelector("#more")


      if (dots.style.display === "none" || dots.style.display === "") {
        dots.style.display = "inline";
        showBtn.innerHTML = "Read more";
        more.style.display = "none";
      } else {
        dots.style.display = "none";
        showBtn.innerHTML = "Read less";
        more.style.display = "inline";
      }
    });



