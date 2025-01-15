/* LAB 8-1 - FINAL COUNTDOWN!! */

// Create page load listener
window.onload = dueDate;

// Create page load function
function dueDate() {
    // Create variables for required HTML elements
    var todayDate = document.getElementById("todayData");
    var finalDate = document.getElementById("finalData");
	var dueDateMsg =  document.getElementById("dueData");
    var failMsg = document.getElementById("countMsg");


    // Create variables for now date and due date
    var now = new Date();
    var dueDate = new Date('December 13, 2023 18:00:00');

    // Output today's date and the due date to HTML page
    todayDate.innerHTML = now.toDateString();
    finalDate.innerHTML = dueDate.toDateString() ;

	 // Convert dates to UTC and subtract to get time difference
	 var timeDifference = dueDate.getTime() - now.getTime();
	console.log(timeDifference)

 	// Convert time difference to whole number of days
	 var daysRemaining = Math.floor(timeDifference/86400000);
	 console.log(daysRemaining);

	 // Logic to check if the due date has passed, and output appropriate message to HTML page

	if (daysRemaining > 0) {
		dueDateMsg.innerHTML = daysRemaining ;
    } else {
		failMsg.innerHTML = "The Deadline for the Final Assignment has passed!" ;
    }
}
