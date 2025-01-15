// Page load listener
window.onload = function() {
    var formHandle = document.forms.ixdForm;
    var header = document.getElementById("welcome");
    var formSection = document.getElementById("form");
    var resultSection = document.getElementById("result");
    
    // Create variables for confirmation message output
    var resultFname = document.getElementById("result__Fname");
    var resultLname = document.getElementById("result__Lname");
    var resultId = document.getElementById("result__id");
    var resultProgram = document.getElementById("result__program");
    var resultProject = document.getElementById("result__project");
    
    // Onsubmit event
    formHandle.onsubmit = processForm;
    // This function has our form validation logic
    function processForm(event){
        event.preventDefault();    
        var fName = formHandle.f__fName;
        var lName = formHandle.f__lName;
        var humberId = formHandle.f__id;
        var program = formHandle.f__program;
        var projectRadios = formHandle.f__project;
        var captionProject = document.getElementById("caption_project");

        // Making sure that the background of all other elements are blank
        fName.style.background = "";
        lName.style.background = "";
        humberId.style.background = "";
        program.style.background = "";
        captionProject.style.background = "";

         // Validate First Name
        if (fName.value.trim() === "") {
            fName.style.background = "red";
            fName.focus();
            return false;
        }

        // Validate Last Name
        if (lName.value.trim() === "") {
            lName.style.background = "red";
            lName.focus();
            return false;
        }

        // Validate Humber ID with regex
        var validHumberid = /(n|N)\d{8}/;
        if (!validHumberid.test(humberId.value.trim())) {
            humberId.style.background = "red";
            humberId.focus();
            return false;
        }

        // Validate Program selection
        if (program.value === "X") {
            program.style.background = "red";
            program.focus();
            return false;
        }

        // Validate Project selection
        var projectSelected = false;
        for (var i = 0; i < projectRadios.length; i++) {
            if (projectRadios[i].checked) {
                projectSelected = true;
                break;
            }
        }
        if (!projectSelected) {
            captionProject.style.background = "red";
            return false;
        }

        // Show confirmation message by hiding the header and form
        header.style.display = "none";
        formSection.style.display = "none";
        resultSection.style.display = "block";

        // Fill in confirmation message with values from form
        resultFname.innerHTML = fName.value;
        resultLname.innerHTML = lName.value;
        resultId.innerHTML = humberId.value;
        
        // Get the selected program text
        var selectedProgramText = program.options[program.selectedIndex].text;
        resultProgram.innerHTML = selectedProgramText;

        // Get the selected project
        var selectedProject = document.querySelector('input[name="f__project"]:checked').value;
        //Reference: https://stackoverflow.com/questions/11599666/get-the-value-of-checked-checkbox
        resultProject.innerHTML = selectedProject;
    };
};
