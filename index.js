import moviesData from "./movies.json" assert { type: "json" };

class MovieAPI {
  constructor(movies) {
    this.movies = movies;
    this.title = movies.title;
  }

  getAllMovies() {
    this.movies.forEach((movie, i) => {
      movie.id = i + 1;
      movie.rating = Math.floor(Math.random() * 5 + 1);
    });

    return this.movies;
  }

  getMoviesSortedByName() {
    const sortByTitle = this.movies.sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    return sortByTitle;
  }
}

const API = new MovieAPI(moviesData);
const getAllMovies = API.getAllMovies();

//case two
const getMoviesSortedByName = API.getMoviesSortedByName();
console.log(getMoviesSortedByName);

//case one
//console.log(getAllMovies);
