//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION

function fiveNumber(one,two,three,four,five){
    var avgNumber = (one + two+three+four+five)/5;
    return avgNumber.toFixed(1);
}
//This function takes five numbers and returns their average to one decimal place.

console.log(fiveNumber(5, 10, 15, 20, 25));

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS

var course1 = 90;
var course2 = 90;
var course3 = 100;
var course4 = 90;
var course5 = 60;

function couseMarks(course1,course2,course3,course4,course5){
    var avgMarks =  (course1+course2+course3+course4+course5)/5;
    if (avgMarks > 70){
        return true;
    }else{
        return false;
    }
}

if (couseMarks(course1,course2,course3,course4,course5) === true){
    alert("Your Avg is over 70");
}else{
    alert("Review required");
}