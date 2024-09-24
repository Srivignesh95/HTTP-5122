// Declaring and initializing 7 variables with 7 movie names

var movie1 = "Speed";
var movie2 = "Evil dead";
var movie3 = "Tarzan";
var movie4 = "The Lion King";
var movie5 = "The pruge";
var movie6 = "Turbo";
var movie7 = "Narnia";

// Creating a JavaScript array to hold these variables and represent your top 7 movie list

topMovieList = [movie1,movie2,movie3,movie4,movie5,movie6,movie7];

// Asking the user "Which top 7 movie would you like?"

var userNumber = prompt("Which top 7 movie would you like?","Pick a number: 1-7");

//Validating the user input

while (userNumber<1 || userNumber >7 || isNaN(userNumber)){
    alert("Please enter a number between 1 and 7!");
    userNumber = prompt("Which top 7 movie would you like?","Pick a number: 1-7");
}

// Popup message to the user with the movie name

alert ("Number " + userNumber + " on the list is " + topMovieList[userNumber]);

// Printing all the movie list in the console

for (i=0; i<topMovieList.length; i++){
    console.log((i+1) + ":" + topMovieList[i]);
}

