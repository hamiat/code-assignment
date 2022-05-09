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
    const sortedByTitle = this.movies.sort((a, b) =>
      a.title.localeCompare(b.title)
    );

    return sortedByTitle;
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
      return this.movies;
    } else {
      return this.idErrorMessage;
    }
  }

  setNewTitle(id, newTitle) {
    const matchId = this.movies.find((movie) => Math.floor(id) === movie.id);

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
    this.getAllMovies();

    return this.movies;
  }
}

const API = new MovieAPI(moviesData);

//Cases
const getAllMovies = API.getAllMovies();
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
  "Action"
);

//Insert Case
console.log(getAllMovies);
