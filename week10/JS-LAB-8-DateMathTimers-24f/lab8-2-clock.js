/* LAB 8.2 - STOP TIME */

//create page load listener
window.onload = clockFunction;


//create page load function

function clockFunction() {

	//create variables for required HTML elements
	var hoursCal = document.getElementById("hoursOut");
    var minCal = document.getElementById("minsOut");
	var secCal =  document.getElementById("secsOut");
	var startButton = document.getElementById("btnStart");
    var stopButton = document.getElementById("btnStop");
    
	

	//create time variable so all functions have access to it
	var now = new Date();
	var interval = null;
	//CREATE FUNCTION THAT DISPLAYS THE TIME
	function timer(){
		now = new Date();
		hoursCal.innerHTML = digitCheck((now.getHours()).toString()); 
		minCal.innerHTML =":"+digitCheck((now.getMinutes()).toString());
		secCal.innerHTML = ":"+digitCheck((now.getSeconds()).toString());
	
	}
	function digitCheck(timings){
		if(timings.length===1){
			return "0" + timings;
		}else{
			return timings;
		}
	}
	
	//CREATE FUNCTION TO START THE CLOCK.
	function startClock(){
		timer();
        interval = setInterval(timer, 1000);
	}
	
	//CREATE FUNCTION TO STOP THE CLOCK
	function stopClock(){
		clearInterval(interval);

	}
	// SET EVENT LISTENERS
	startButton.onclick = startClock;
    stopButton.onclick= stopClock;

}