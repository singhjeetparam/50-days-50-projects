// const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5ae6ca80da4cf8239b7f48ffd4b05b64&page=1'
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
// const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=5ae6ca80da4cf8239b7f48ffd4b05b64&query="'

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'

const movieWall = document.querySelector(".movie__wall")

const form = document.querySelector("#form")


getMovies(API_URL)

async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results)
}


function showMovies(movies){

    movieWall.innerHTML = "";

    movies.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieTile = document.createElement('div');
        movieTile.classList.add("movie__tile");
        movieTile.innerHTML = ` <div class="movie__img__wrapper">
        <img class="movie__img" src="${IMG_PATH + poster_path}" alt="${title}">
    </div>
    <div class="movie__title">
        <h2>${title}</h2>
        <h2>${vote_average}</h2>
    </div>
    <div class="movie__desc">
        <p>${overview}</p>
    </div>`
        movieWall.appendChild(movieTile)
    });
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const searchTerm = search.value;

    if(searchTerm && searchTerm !== ""){
        getMovies(SEARCH_API + searchTerm);

        form.value = "";
    }
    else{
        window.location.reload()
    }
})

// form.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const searchTerm = search.value

//     if(searchTerm && searchTerm !== '') {
//         getMovies(SEARCH_API + searchTerm)

//         search.value = ''
//     } else {
//         window.location.reload()
//     }
// })




