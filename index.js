import moviesData from "./movies.json" assert { type: "json" };

class MovieAPI {
  constructor(movies) {
    this.movies = movies;

    this.genre = movies.genre;
    this.idErrorMessage = "Sorry, could not find a movie with the id.";
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

  getWithoutThumbsAndSubs() {
    this.movies.forEach((movie) => {
      delete movie.subtitle;
      delete movie.thumb;
    });

    return this.movies;
  }

  getMovieById(id) {
    const matchId = this.movies.find((movie) => Math.floor(id) === movie.id);

    if (matchId) {
      return matchId;
    } else {
      return this.idErrorMessage;
    }
  }

  deleteMovieById(id) {
    const matchId = this.movies.find((movie) => Math.floor(id) === movie.id);

    if (matchId) {
      this.movies.splice(matchId, 1);
      console.log("The movie has been deleted!");
      return this.movies;
    } else {
      return this.idErrorMessage;
    }
  }

  setNewTitle(id, newTitle) {
    const matchId = this.movies.find((movie) => Math.floor(id) === movie.id);

    if (matchId) {
      matchId.title = newTitle;
      console.log(
        `Movie id: ${matchId.id} has been updated. The title is now ${matchId.title}.`
      );
      return matchId;
    }
  }
}

const API = new MovieAPI(moviesData);
const getAllMovies = API.getAllMovies();

//case ten
const setNewTitle = API.setNewTitle("4", "Camels Toes");
console.log(setNewTitle);

//case nine
//const deleteMovieById = API.deleteMovieById("13");
//console.log(deleteMovieById);

//case eight
//const getMovieById = API.getMovieById("8");
//console.log(getMovieById);

//case seven
//const getWithoutThumbsAndSubs = API.getWithoutThumbsAndSubs();
//console.log(getWithoutThumbsAndSubs);

//case six
//const getTopAndBottomTwo = API.getTopAndBottomTwo();
//console.log(getTopAndBottomTwo);

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
