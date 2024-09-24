
//  VARIABLES
teamNumber = 5;
member1Fname = "Vignesh";
member1Lname = "Kavle"
member2Fname = "Mohit";
member2Lname = "Krishna"
member3Fname = "Sharma"  
memeber3Lname = "King"
member4Fname = "Varma"
member4Fname = "King"
//Logics

// 1. Popup messsage asking for the team number
checkTeam = Number(prompt("Please enter your team number"));

// 2. Checking if the person belongs to the team

if (checkTeam === teamNumber){
    memberCheck = prompt("Please check your First name");
    if (memberCheck === ""){
        alert("Invalid Entry");
    }else{
        switch(memberCheck.toLowerCase()){
            case member1Fname.toLowerCase():
                alert("Welcome"+" "+member1Fname+" "+ member1Lname);
                break;
            case member2Fname.toLowerCase():
                alert("Welcome"+" "+member2Fname+" "+ member2Lname);
                break;
            case member3Fname.toLowerCase():
                alert("Welcome"+" "+member3Fname+" "+ member3Lname);
                break;
            case member4Fname.toLowerCase():
                alert("Welcome"+" "+member4Fname+" "+ member4Lname);
                break;
            default:
                alert("Invalid Entry");
                break;
        }
    }
}else{
    alert("Invalid Team number");
}