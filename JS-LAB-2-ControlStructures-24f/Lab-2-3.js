//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========

var joinMsg= "Would you like to join our newsletter?";
var thankMsg = "Thank you, our next newsletter will be sent to";
var noBother = "Thank you, we will not bother you again";
var notValid = "Thank you, but your email was not valid";

//==== LOGIC =============
joinNews = confirm(joinMsg);
if (joinNews === true){
    confirmEmail = prompt("Please enter your email Id","me@example.com");
    if(confirmEmail === "" || confirmEmail === "me@example.com" ||confirmEmail === null){
        alert(notValid);
    }else{
        alert(thankMsg+" "+confirmEmail);
    }
}else{
    alert(noBother);
}