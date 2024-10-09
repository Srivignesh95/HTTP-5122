//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!

var meObject = {
    myName: "Vicky",
    courseName: "Web Developement",
    subjects: ["Design","Workshop","Front-end developement","Wed deign","Back-end developemnt"],
    avgPercentage: 90,
    alertFunction:function(){
        alert("My name is "+ meObject.myName +" and I'm pursuing " + meObject.courseName);
    }
}

console.log(meObject.myName);
meObject.alertFunction();