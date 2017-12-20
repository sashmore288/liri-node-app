

var twitter = require("twitter");
var request = require("request");
var Spotify = require("node-spotify-api");
var fs = require("fs");

var keys = require("./keys.js");

var command = process.argv[2];
var input = process.argv[3];


function myTweets() {
  var twitterObj = new twitter(keys);
  var params = {
    q: "camelCasedBot",
    count: 20
  };

  twitterObj.get("statuses/user_timeline", params, function(
    error,
    tweets,
    response
  ) {
    if (!error) {
      for (var i = 0; i < 20; i++) {
        console.log(tweets[i].text);
      }
    }
  });
}


function spotifySearch() {

  var spotify = new Spotify({
    id: "d0381c87629a4b899198fb957b9cdb9b",
    secret: "74ba38465bea4824b0b17166fd1ffa1f"
  });

  if (!input) {
    input = "The Sign Ace of Base";
  }

  spotify.search({ type: "track", query: input }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log("Artist(s): " + data.tracks.items[0].album.artists[0].name);
    console.log("The song's name: " + data.tracks.items[0].name);
    console.log("Song preview: " + data.tracks.items[0].preview_url);
    console.log("Album: " + data.tracks.items[0].album.name);
  });
}

function movieThis() {
  if (!input) {
    input = "Split";
  }
  
  var queryUrl =
    "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

  request(queryUrl, function(error, response, body) {
    
    if (!error && response.statusCode === 200) {
      
      

      console.log("Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
      console.log(
        "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value
      );
      console.log("Country: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
    }
  });
}

function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }

    
    var output = data.split(",");
    command = output[0];
    input = output[1];

    runCommand(command);
;   
  });
}

function runCommand(command) {
  if (command === "my-tweets") {
    myTweets();
  } else if (command === "spotify-this-song") {
    spotifySearch();
  } else if (command === "movie-this") {
    movieThis();
  } else if (command === "do-what-it-says") {
    doWhatItSays();
  }
}



var twitter = require("twitter");
var request = require("request");
var Spotify = require("node-spotify-api");
var fs = require("fs");

var keys = require("./keys.js");

var command = process.argv[2];
var input = process.argv[3];


function myTweets() {
  var twitterObj = new twitter(keys);
  var params = {
    q: "camelCasedBot",
    count: 20
  };

  twitterObj.get("statuses/user_timeline", params, function(
    error,
    tweets,
    response
  ) {
    if (!error) {
      for (var i = 0; i < 20; i++) {
        console.log(tweets[i].text);
      }
    }
  });
}


function spotifySearch() {

  var spotify = new Spotify({
    id: "d0381c87629a4b899198fb957b9cdb9b",
    secret: "74ba38465bea4824b0b17166fd1ffa1f"
  });

  if (!input) {
    input = "The Sign Ace of Base";
  }

  spotify.search({ type: "track", query: input }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log("Artist(s): " + data.tracks.items[0].album.artists[0].name);
    console.log("The song's name: " + data.tracks.items[0].name);
    console.log("Song preview: " + data.tracks.items[0].preview_url);
    console.log("Album: " + data.tracks.items[0].album.name);
  });
}

function movieThis() {
  if (!input) {
    input = "Split";
  }
  
  var queryUrl =
    "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

  request(queryUrl, function(error, response, body) {
    
    if (!error && response.statusCode === 200) {
      
      

      console.log("Title: " + JSON.parse(body).Title);
      console.log("Release Year: " + JSON.parse(body).Year);
      console.log("IMDB Rating: " + JSON.parse(body).Ratings[0].Value);
      console.log(
        "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value
      );
      console.log("Country: " + JSON.parse(body).Country);
      console.log("Language: " + JSON.parse(body).Language);
      console.log("Plot: " + JSON.parse(body).Plot);
      console.log("Actors: " + JSON.parse(body).Actors);
    }
  });
}

function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }

    
    var output = data.split(",");
    command = output[0];
    input = output[1];

    runCommand(command);
;   
  });
}

function runCommand(command) {
  if (command === "my-tweets") {
    myTweets();
  } else if (command === "spotify-this-song") {
    spotifySearch();
  } else if (command === "movie-this") {
    movieThis();
  } else if (command === "do-what-it-says") {
    doWhatItSays();
  }
}


runCommand(command); 