//######## LAB 2-1 FILE DELETE CONFIRMATION ########
//alert("hey 2.1");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES ========
var userChoice;
var messageOut = "Thank you, your file has ";
var yesMessage = "been successfully deleted.";
var noMessage = "not been altered.";

//==== LOGIC ========

//1. CREATE POPUP TO ASK FOR PERMISSION TO PROCEED WITH DELETION OF FILE.

userChoice = confirm("Are your sure, you would like to delete the file?")

//2. IF USER CLICKS OKAY, POPUP messageOut WITH yesMessage.

if (userChoice==true){
    alert(messageOut+" "+ yesMessage)
}else{
    alert(messageOut+" "+ noMessage)
}
