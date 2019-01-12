var searchMovieDBPopular = (callback) => {

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/movie/top_rated?page=1&language=en-US&api_key=a5a94b2a59dcba58d783377765036437",
    "method": "GET",
    "headers": {},
    "data": "{}"
  }
  
  $.ajax(settings).done((response) => {
        callback(response.results)
    });
}

  export default searchMovieDBPopular;
