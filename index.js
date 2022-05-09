import moviesData from "./movies.json" assert { type: "json" };

class MovieAPI {
  constructor(movies) {
    this.movies = movies;
    this.title = movies.title;
    this.genre = movies.genre;
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

  getMovieByGenre(genre) {
    const getGenre = this.movies.filter((movie) => {
      if (genre === movie.genre) {
        return movie;
      }
    });

    return getGenre;
  }

  getBottomToTopRated() {
    const sortRatings = this.movies.sort((a, b) =>
      a.rating > b.rating ? 1 : -1
    );

    return sortRatings;
  }

  getTopThree() {
    const topThree = this.movies
      .sort((a, b) => (a.rating < b.rating ? 1 : -1))
      .slice(0, 3);

    return topThree;
  }

  getTopAndBottomTwo() {
    const sortedMovies = this.movies.sort((a, b) =>
      a.rating > b.rating ? 1 : -1
    );
    const getTopAndBottomTwo = [
      ...sortedMovies.slice(0, 2),
      ...sortedMovies.slice(-2),
    ];

    return getTopAndBottomTwo;
  }
}

const API = new MovieAPI(moviesData);
const getAllMovies = API.getAllMovies();

//case six
const getTopAndBottomTwo = API.getTopAndBottomTwo();
console.log(getTopAndBottomTwo);

//case five
//const getTopThree = API.getTopThree();
//console.log(getTopThreeRated);

//case four
//const getBottomToTopRated = API.getBottomToTopRated();
//console.log(getBottomToTopRated);

//case three
//const getMovieByGenre = API.getMovieByGenre("Comedy");
//console.log(getMovieByGenre);

//case two
//const getMoviesSortedByName = API.getMoviesSortedByName();
//console.log(getMoviesSortedByName);

//case one
//console.log(getAllMovies);
