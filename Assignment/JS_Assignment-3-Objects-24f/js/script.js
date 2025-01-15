// Creating an object related to movies

var movies = {
    title: "Baby's Day Out",
    releaseYear: 1997,
    director: "Patrick Read Johnson",
    genre: "Comedy",
    
    // Creating a function to update the genre 
    updateProperty:function(genre){
        this.genre = genre;
        alert("The updated Property is genre: "+this.genre);
        
    }

}
// Displaying the default key and values in the console
console.log(movies);

//Getting the release year from the user and updating the default value
newreleaseYear = parseInt(prompt("Please enter the relase year", movies.releaseYear));

// Making sure that the value which the user entered is a Number

while(isNaN(newreleaseYear)){
    alert("Please Enter the Correct Year", movies.releaseYear);
    newreleaseYear = parseInt(prompt("Please enter the relase year", movies.releaseYear));
}

movies.releaseYear = newreleaseYear;


//Getting the director name from the user and updating the default value
movies.director = prompt("Please enter the director name",movies.director);

//Calling the method to update the genre
movies.updateProperty("Family");

// Displaying the updated values in the console.
console.log(movies);