// Define Buttons & Default for Undefined
var button = document.querySelector("#button-submit");
var buttonClear = document.querySelector("#button-clear");
var found = true;

// Recipe Elements
var recipeImg = document.querySelector("#recipe-img");
var recipeIngredients = document.querySelector("#recipe-ingredients");
var recipeLink = document.querySelector("#recipe-link");

// Playlist Elements
var image = document.querySelector("#playlist-img");
var playlist = document.querySelector("#playlist-songs");

// Search Functionality
button.addEventListener("click", function() {
  var searchInput = document.querySelector("#search-query").value;
  console.log(searchInput);
  if (searchInput == "") {
    alert("Please put in a party theme!");
  } else {
    recipeCall(searchInput);
    deezerCall(searchInput);
  }
});

// Clear Functionality
buttonClear.addEventListener("click", function() {
  var searchInput = document.querySelector("#search-query");
  searchInput.value = "";
});

// RECIPE PUPPY API CALL
function recipeCall(searchTerm) {
  var xhr = new XMLHttpRequest();
  var url = "http://www.recipepuppy.com/api/?q=";
  var searchTerms = createSearchTerm(searchTerm);

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var recipeObj = JSON.parse(xhr.responseText);
      var randomRecipe = chooseRandom(recipeObj.results); // Choose a random result

      // Check if there are no results
      if (randomRecipe == undefined) {
        alert("Please put in a proper party theme!");
        var searchInput = document.querySelector("#search-query");
        searchInput.value = "";
        found = false;
      }
      // Split ingredients list into items
      var ingredients = randomRecipe.ingredients.split(",");

      // Function for creating list items
      function listCreation(str) {
        var listItem = document.createElement("li");
        listItem.textContent = str;
        recipeIngredients.appendChild(listItem);
      }
      // Function to add each ingredient
      function addIngredients() {
        recipeIngredients.textContent = "";
        ingredients.forEach(c => listCreation(c));
      }

      // Check for thumbnail and resort to default if unavailable
      if (randomRecipe.thumbnail) {
        recipeImg.src = randomRecipe.thumbnail;
      } else {
        recipeImg.src =
          "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
      }
      recipeLink.textContent = randomRecipe.title;
      recipeLink.href = randomRecipe.href;
      addIngredients();
    }
  };
  xhr.open("GET", createURL(url, searchTerms), true);
  xhr.send();
}

// DEEZER API CALL

function deezerCall(searchTerm) {
  var searchTerms = createSearchTerm(searchTerm);
  var url = `https://api.deezer.com/search/playlist?q=`;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var parsedContent = JSON.parse(xhr.responseText);
      var randomPlaylist = chooseRandom(parsedContent.data); //  Returns random playlist out of top 10

      //  var tracklistLink = randomPlaylist.tracklist; Returns playlist tracklist link > for second call

      if (found) {
        playlist.textContent = randomPlaylist.title;
        image.src = randomPlaylist.picture_medium;
        playlist.href = randomPlaylist.link;
      }
    }
  };

  xhr.open("GET", createURL(url, searchTerms), true);
  xhr.send();
}

// SECOND COSMIC API CALL TO NEW GALAXY

function deezerCallTwo(tracklistLink) {
  var xhs = new XMLHttpRequest();
  xhs.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var parsedTracklist = JSON.parse(xhs.responseText);

      //console.log(parsedTracklist);
    }

    xhs.open("GET", tracklistLink, true);
    xhs.send();
  };
}
