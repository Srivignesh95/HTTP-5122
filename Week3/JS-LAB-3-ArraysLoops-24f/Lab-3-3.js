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
		
		numberAmount += parseInt(userEntry);

		amount.push(userEntry);
	
	}
	alert("Your shipping for this order will be free!");

	console.log(amount.join("| "))