var searchMovieDBId = (movieId, callback) => {
    
    var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://api.themoviedb.org/3/movie/${movieId}?api_key=a5a94b2a59dcba58d783377765036437`,
    "method": "GET",
    "headers": {},
    "data": "{}"
  }
  
  $.ajax(settings).done(function (response) {
    callback(response)
  });

}

export default searchMovieDBId;


