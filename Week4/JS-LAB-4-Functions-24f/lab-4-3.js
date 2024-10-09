//#### LAB 4 - FUNCTIONS ####
//PART 3:  SAFE DOG WALKING CHECK 


//================== CREATE YOUR checkTemp FUNCTION

//This function's job is to get the current temp from the user and return true or false.
//It needs to receive currentTemp as a "number" from the user.
//It will return true when the temperature is less than 30, It will be easy for dogs to go for a walk or it will false if the temperature is leesser than -10 / greater than 30, it's not the good temperature of dogs (Boolean), with that as a input we can give the output messages as string.

function checkTemp(currentTemp){
    
    if (currentTemp > 30 || currentTemp < -10){
        return false;
    }
    else{
        return true;
    }
}

//================== LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
currentTemp = parseInt(prompt("Please enter the current Temperture"));

if (checkTemp(currentTemp)=== true){
    alert("You’re good, have a nice walk!");
}else if(currentTemp < -10){
    alert("Yikes! Too cold for dog walking!");
}else{
    alert("Yikes! Too hot for dog walking!");
}