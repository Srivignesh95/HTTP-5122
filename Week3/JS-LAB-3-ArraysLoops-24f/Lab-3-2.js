//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY

var teamMembers = ["Mohit", "Vignesh", "Sridhar", "Madhesh", "Abinaya"]

//OUTPUT TEAM ARRAY TO JS CONSOLE

console.log(teamMembers)

//REMOVE LAST MEMBER

teamMembers.pop();
console.log(teamMembers)
//ADD SEAN TO FRONT OF ARRAY

teamMembers.unshift("Sean")
console.log(teamMembers)
//REARRANGE THE ARRAY ALPHABETICALLY

teamMembersArranged =  teamMembers.sort();

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log(teamMembersArranged);

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE

for (i = 0; i < teamMembers.length; i++ ){
    console.log(teamMembers[i] + " #" + (i+1));
}