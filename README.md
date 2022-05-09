# Tech Trainee Code Test
Hello and Welcome!  
This is a Movie API written as a class which containing 11 different methods (cases). The API takes in data from an imported JSON file (containing movie objects), which is used as input when instantiating the Movie API. <br/><br/> Below is an example of the ```getAllMovies()``` method which supplies each movie object with an id and a rating property before storing it, and then returns all the movies. 

The method itself: 
```javascript
 getAllMovies() {
    this.movies.forEach((movie, i) => {
      movie.id = i + 1;
      movie.rating = Math.floor(Math.random() * 5 + 1);
    });

    return this.movies;
  }
```
The result can be printed out in the console as following:
```javascript
const API = new MovieAPI(moviesData);
const getAllMovies = API.getAllMovies();
console.log(getAllMovies);
  
```
You can test each method (case) by passing its declared variable to the console.log() function. 

## The cases
1) ```getAllMovies()``` When instantiating the class, adds an “id” and a random “rating” from 1 to 5 for each movie before storing it.  
2) ```getMoviesSortedByName()``` returns the movies sorted by name.
3) ```getMovieByGenre(genre)``` returns movies from a certain genre. 
4) ```getBottomToTopRated()``` prints out movies sorted from bottom rated to top rated.
5) ```getTopThree()``` prints out the three top rated movies.
6) ```getTopAndBottomTwo()``` returns the 2 top rated movies and 2 bottom rated movies.
7) ```getWithoutThumbsAndSubs()``` returns the movies with the subtitle and thumb properties filtered out.
8) ```getMovieById(id)``` returns a movie with a certain id (if found).
9) ```deleteMovieById(id)``` removes a movie with a certain id (if found).
10) ```setNewTitle(id, newTitle)``` changes the title of a movie with a certain id (if found). The updated title sent in as an argument to the method.
11) ```setNewMovie(description, subtitle, url, thumb, title, genre)``` allows the user to add a new movie object to the movie list (supply all properties but the “id” and “rating”. The “id” and “rating” properties added internally by the method.
		



Your task is to create a Movie API written as a class using JavaScript that should perform/offer a certain set of methods (listed below). You are to put around **1 hour** on this project. How you solve it is eventually up to you. We will look at everything from readable code, documentation, minimal code duplication, error handling, etc.


You will receive a JSON file containing movie objects, which should be used as input when instantiating the Movie API. Write your code inside the index.js file. An example of how such a class could look like:

```javascript
const moviesJson = require('./movies.json');
class MovieAPI {
	constructor(movies) {
		this.movies = movies;
	}

	fetchAllMovies(){
		return this.movies;
	}
}


const API = new MovieAPI(moviesJson);
const allMovies = API.fetchAllMovies();
```

### Finish the REQUIRED tagged line and at least 6 of the methods on lines 2 to 11 below:
1. (REQUIRED) When instantiating the class with the imported movies.json file, add an “id” and a random “rating” from 1 to 5 for each movie before storing it.
2. A method that returns movies from a certain genre.
3. A method that removes a movie with a certain id (if found).
4. A method that returns the movies with the subtitle and thumb properties filtered out.
5. A method that returns the movies sorted by name.
6. A method that returns the 2 top rated movies and 2 bottom rated movies.
7. A method that prints out the three top rated movies.
8. A method that prints out movies sorted from bottom rated to top rated.
9. A method that allows the user to add a new movie object to the movie list (supply all properties but the “id” and “rating”. The “id” and “rating” properties should be added internally by the method.
10. A method that returns a movie with a certain id (if found).
11. A method that changes the title of a movie with a certain id (if found). The updated title should be sent in as an argument to the method.

When you are done, upload your files to a github repo and send that link to us in an email. Please also write down the amount of time you've spent on this.
