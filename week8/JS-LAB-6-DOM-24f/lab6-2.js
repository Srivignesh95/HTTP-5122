//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = pageReady;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function pageReady() {
    var mysteryBox = document.getElementById("mysteryBox");
    var buttonBox = document.getElementById("buttonBox");


    //====CREATE THE FUNCTIONS WE'LL NEED====
    //FUNCTION TO ASK USER
    function disAppears() {
        var confirmation = confirm("Do you want to see something?");
        if (confirmation ===  true) {
            mysteryBox.style.display = "none";
            buttonBox.style.display = "block";
        }
    }

    //FUNCTION TO CHANGE buttonBox
    function surpriseButton() {
        buttonBox.style.width = "600px";
        buttonBox.style.backgroundColor = "orange";
        buttonBox.innerHTML = "<h2>SURPRISE!!</h2>";
    }

    //SETUP LISTENERS
    mysteryBox.onmouseover = disAppears;
    buttonBox.onclick = surpriseButton;
}	