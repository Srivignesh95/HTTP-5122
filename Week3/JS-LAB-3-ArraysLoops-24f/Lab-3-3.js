//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========

var amount = [];
var numberAmount = 0;
//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.

	//GET ITEM COST FROM USER

	while(numberAmount < 35){
 
		var userEntry = prompt("please Enter the cost:");

		if (isNaN(userEntry)){

			alert ("Please Enter the cost in number");

		}
		else{
		
		numberAmount += parseInt(userEntry);

		amount.push(userEntry);
		
		}
	
	}
	alert("Your shipping for this order will be free!");

	// Adding the total purchase amount to the popup
	
	alert("Total purchase amount:" + " $"+numberAmount);

	console.log(amount.join("| "))