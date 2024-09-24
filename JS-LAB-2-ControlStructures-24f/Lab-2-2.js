//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
// Correct user name
var username = "dart";
// Correct password
var password = "vader";
// user name input
var userInput = "Please enter your Username";
// password input
var passInput = "Please enter your Password";


//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
userCheck = prompt(userInput);
//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE

//5. CREATE POPUP BOX FOR PASSWORD
passCheck = prompt(passInput);
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if (userCheck === username && passCheck===password){
	alert("Welcome back"+" "+username);
	console.log("Login successful");
}else{
	alert("Invalid username/password");
	console.log("Login Fail");
}
