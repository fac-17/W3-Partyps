
var button = document.querySelector(".search-btn");

button.addEventListener("click", function() {
  var searchInput = document.querySelector(".search-query").value;
  (function() {
    var xhr = new XMLHttpRequest();

    var url =
      "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=" +
      searchInput;

    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var recipeObj = JSON.parse(xhr.responseText);

        var recipeDrop = document.querySelector(".recipe");
        var response = recipeObj;

        var random = chooseRandom(response.results);

        recipeDrop.textContent =
          random.title + " & ingr: " + random.ingredients;
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  })();
});


function chooseRandom(arr) {
  return arr[Math.floor(Math.random() * 10)];
}


// DEEZER API CALL


function deezerCall () {
  var testSearch = "sick tunes"
  var searchTerms = testSearch.split(' ').join('+')
  var url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/playlist?q=${searchTerms}`
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var parsedContent = JSON.parse(xhr.responseText);
        var totalResults = parsedContent.total //  Returns number of results from the search
        var randomPlaylist = chooseRandom(parsedContent.data) //  Returns random playlist out of top 10

        var playlistTitle = randomPlaylist.title; //  Returns selected playlist's title
        var playlistImage = randomPlaylist.picture_medium; //  Returns selected playlist's cover
        //
        var tracklistLink = randomPlaylist.tracklist; //  Returns playlist tracklist link > for second call
        console.log(randomPlaylist);
        console.log(tracklistLink);

    }

  };

  xhr.open("GET", url, true);
  xhr.send();

}

// SECOND COSMIC API CALL TO NEW GALAXY

function deezerCallTwo (tracklistLink) {
var xhs = new XMLHttpRequest();
xhs.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {

      var parsedTracklist = JSON.parse(xhs.responseText);

      //console.log(parsedTracklist);
    }

  xhs.open("GET", tracklistLink , true);
  xhs.send();

  };

};


(deezerCall());
