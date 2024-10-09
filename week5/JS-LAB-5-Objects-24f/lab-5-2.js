//#### LAB 5 - OBJECTS ####
//PART 2:  CREATE A BANK CUSTOMER OBJECT
//1. Create the object structure first.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.

var bankCustomer={
    lastName: "Kavle",
    branchNumber: 2451,
    accountBalance: 500.25,
    interestRate: 1.03,
    multipleAccount: true,
    depositFunction:function(depostAmount){
        bankCustomer.accountBalance = bankCustomer.accountBalance + depostAmount
        return "Thank you, your current balance is now "+ ((bankCustomer.accountBalance).toFixed(2));
    },
    withdrawalFunction:function(withdrawalAmount){
        bankCustomer.accountBalance = bankCustomer.accountBalance - withdrawalAmount
        return "Thank you, your current balance is now "+ ((bankCustomer.accountBalance).toFixed(2));
    },
    multipleFunction:function(){
        if (bankCustomer.multipleAccount === true){
            bankCustomer.accountBalance = bankCustomer.accountBalance * (bankCustomer.interestRate + 0.005);
            return "Thank you, your current balance is now " + ((bankCustomer.accountBalance).toFixed(2));
        }else{
            finalAmount = bankCustomer.accountBalance * bankCustomer.interestRate;
            return "Thank you, your current balance is now " + ((finalAmount).toFixed(2));
        }
    }

}

//5. Create the required output to complete steps 6-10 of the lab.
var depositResult = bankCustomer.depositFunction(200);
console.log(depositResult);
var withdrawResult = bankCustomer.withdrawalFunction(75);
console.log(withdrawResult);


//6. Once everything is working, tackle the Stretch Goal!
var multipleResult = bankCustomer.multipleFunction();
console.log(multipleResult);