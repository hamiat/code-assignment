# Tech Trainee Code Assignment

### Hello and Welcome! :slightly_smiling_face:

This is a Movie API written as a JavaScript class which containing 11 different methods (cases). The API takes in data from a JSON file (containing movie objects), which is used as input when instantiating the Movie API. Below is an example of the `getAllMovies()` method which supplies each movie object with an id and a rating property before storing it, and then returns all the movies. Error handling has been added (for the methods that use input id to retrieve or change data).

#### Instructions: 

1) With node.js installed run the command "npm run watch". 
2) You can run each case (method) by passing its declared variable to the console.log() function. </br>
3) The console will return a result according to its method.</br>

##### An example: 
The method itself:</br>

```javascript
 getAllMovies() {
    this.movies.forEach((movie, i) => {
      movie.id = i + 1;
      movie.rating = Math.floor(Math.random() * 5 + 1);
    });

    return this.movies;
  }
``` 

</br>The API (using MovieAPI class) takes in json data (moviesData).  The `const getAllMovies` variable (case) which relates to the `getAllMovies()` method, has been inserted into the console.log() function:  </br>

```javascript
const API = new MovieAPI(moviesData);
const getAllMovies = API.getAllMovies();
console.log(getAllMovies);
```

</br>The expected output in the console (as per the provided method):</br>

![screenshot of node console with the retrieved data](https://cdn.glitch.global/8f88fd75-5f31-4389-9519-d822812032f3/Sk%C3%A4rmklipp.PNG?v=1652185141766)

</br>

## The methods 
##### The methods have the same names as their cases (to makes things a bit less confusing).

1. `getAllMovies()` When instantiating the class, adds an “id” and a random “rating” from 1 to 5 for each movie before storing it.
2. `getMoviesSortedByName()` returns the movies sorted by name.
3. `getMovieByGenre(genre)` returns movies from a certain genre.
4. `getBottomToTopRated()` prints out movies sorted from bottom rated to top rated.
5. `getTopThree()` prints out the three top rated movies.
6. `getTopAndBottomTwo()` returns the 2 top rated movies and 2 bottom rated movies.
7. `getWithoutThumbsAndSubs()` returns the movies with the subtitle and thumb properties filtered out.
8. `getMovieById(id)` returns a movie with a certain id (if found).
9. `deleteMovieById(id)` removes a movie with a certain id (if found).
10. `setNewTitle(id, newTitle)` changes the title of a movie with a certain id (if found). The updated title sent in as an argument to the method.
11. `setNewMovie(description, subtitle, url, thumb, title, genre)` allows the user to add a new movie object to the movie list (supply all properties but the “id” and “rating”. The “id” and “rating” properties added internally by the method.

## Possible improvements and reflections.

### Possible improvements

:sewing_needle: Three of the methods are using this piece of code to find and compare the input id with the ids of the movies. This can probably can be refactored into a method that can be passed into them to reduce code duplication.
 ```javascript
const matchId = this.movies.find((movie) => Math.floor(id) === movie.id);
```
 
:sewing_needle: Error handling for the getMovieByGenre(genre) method. 

### Reflections
:bulb: I really enjoyed this coding assigment as it felt like a real life exercise (coming from a frontend background).</br>  
:bulb: Working with classes when working with object oriented programming is always a good challange, as it as commonly used programming practice. However, normally I would approach such a task using a library/framework such as React as its built in hook useState makes working with classes easier. As well as providing a more straight-forward way of rendering the data to the browser with the JSX syntax.</br>  
:bulb: It would have been nice to show-case some of my skills within HTML & CSS as well, however as it was not required I decided to focus on the assigned tasks.</br></br> 
:watch: This project took me about 2 hours to complete with an additional 1.5 hours for testing and refactoring. 
