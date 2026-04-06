const moviesData = require("./movies.json");
class MovieAPI {
  constructor(movies) {
    this.movies = movies;
    this.idErrorMessage = "Sorry, could not find a movie with the id.";
  }

  initializeMovies() {
    this.movies.forEach((movie, i) => {
      movie.id = i + 1;
      movie.rating = Math.floor(Math.random() * 5 + 1);
    });

    return this.movies;
  }

  getMoviesSortedByName() {
    return [...this.movies].sort((a, b) => a.title.localeCompare(b.title));
  }

  getMovieByGenre(genre) {
    return this.movies.filter((movie) =>
      movie.genre.toLowerCase().includes(genre.toLowerCase()),
    );
  }

  getBottomToTopRated() {
    return [...this.movies].sort((a, b) => (a.rating > b.rating ? 1 : -1));
  }

  getTopThree() {
    return [...this.movies]
      .sort((a, b) => (a.rating < b.rating ? 1 : -1))
      .slice(0, 3);
  }

  getTopAndBottomTwo() {
    const sortedMovies = [...this.movies].sort((a, b) => a.rating - b.rating);
    return [...sortedMovies.slice(0, 2), ...sortedMovies.slice(-2)];
  }

  getWithoutThumbsAndSubs() {
    const noSubsOrThumbs = this.movies.map(
      ({ subtitle, thumb, ...rest }) => rest,
    );

    return noSubsOrThumbs;
  }

  getMovieById(id) {
    const matchId = this.movies.find((movie) => Number(id) === movie.id);

    if (matchId) {
      return matchId;
    } else {
      return this.idErrorMessage;
    }
  }

  deleteMovieById(id) {
    const index = this.movies.findIndex((movie) => Number(id) === movie.id);

    if (index !== -1) {
      this.movies.splice(index, 1);
      return this.movies;
    }

    return this.idErrorMessage;
  }

  setNewTitle(id, newTitle) {
    const matchId = this.movies.find((movie) => Number(id) === movie.id);

    if (matchId) {
      matchId.title = newTitle;
      return matchId;
    } else {
      return this.idErrorMessage;
    }
  }

  setNewMovie(description, subtitle, url, thumb, title, genre) {
    this.movies.push({
      description,
      source: [url],
      subtitle,
      thumb,
      title,
      genre,
    });
    this.initializeMovies();

    return this.movies;
  }
}

const API = new MovieAPI(moviesData);

//Cases (methods)
const getAllMovies = API.initializeMovies();
const getMoviesSortedByName = API.getMoviesSortedByName();
const getMovieByGenre = API.getMovieByGenre("Action");
const getBottomToTopRated = API.getBottomToTopRated();
const getTopThree = API.getTopThree();
const getTopAndBottomTwo = API.getTopAndBottomTwo();
const getWithoutThumbsAndSubs = API.getWithoutThumbsAndSubs();
const getMovieById = API.getMovieById("8");
const deleteMovieById = API.deleteMovieById("13");
const setNewTitle = API.setNewTitle("2", "Camels and Hats");
const setNewMovie = API.setNewMovie(
  "About a girl who fights.",
  "Girls fights everyone.",
  "url",
  "pic.img",
  "Girl Fighter",
  "Action",
);

//Insert Case here to what it returns
console.log(getAllMovies);
