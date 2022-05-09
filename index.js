import moviesData from "./movies.json" assert { type: "json" };

class MovieAPI {
  constructor(movies) {
    this.movies = movies;
  }

  getAllMovies() {
    this.movies.forEach((movie, i) => {
      movie.id = i + 1;
      movie.rating = Math.floor(Math.random() * 5 + 1);
    });

    return this.movies;
  }
}

const API = new MovieAPI(moviesData);
//case one
//const getAllMovies = API.getAllMovies();
//console.log(getAllMovies);
