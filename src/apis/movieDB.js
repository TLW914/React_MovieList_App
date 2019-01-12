

var searchMovieDB = (query, callback) => {

    var settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=a5a94b2a59dcba58d783377765036437&language=en-US`,
    "method": "GET",
    "headers": {},
    "data": "{}"
        }

	$.ajax(settings).done((response) => {
		  callback(response.results)
	});

}

export default searchMovieDB;