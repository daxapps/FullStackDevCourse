console.log("Connected");

var movies = [
	{
	 title: "Rambo",
	 hasWatched: true,
	 rating: 5
	}, 
	{
	 title: "Mad Max",
	 hasWatched: true,
	 rating: 10
	}, 
	{
	 title: "Frozen",
	 hasWatched: false,
	 rating: 4.5
	}
];

movies.forEach(function(movie){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	console.log(result)
})





