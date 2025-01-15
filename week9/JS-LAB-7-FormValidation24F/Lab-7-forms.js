/* LAB 7 - SHIPPING FORM */

var shipInfo = {
  cid: 0,
  name: "",
  pc: "",
  speed: "",
  cost: 0,
};
window.onload = pageReady;

function pageReady() {
  var form = document.forms.form_ship;
  var thankYouMessage = document.getElementById("thanks_msg");
  var thankYouCustomer = document.getElementById("thanksCustomer");
  var thanksPC = document.getElementById("thanksPC");
  var name = form.f_Name;
  var postalCodeField = form.f_pc;
  var deliverySpeed = form.f_speed;
  var thankYouSpeed = document.getElementById("thanksSpeed");
  var thankYouCost = document.getElementById("thanksCost");

  // Observing the changes onchange and giving outputs in console
  deliverySpeed.onchange = function() {
    console.log(deliverySpeed.value);
  };
  
  // Validating the data onsubmit

  form.onsubmit = function() {

    if (deliverySpeed.value == 0) {
      deliverySpeed.style.backgroundColor = "red";
      deliverySpeed.focus();
      return false;
    } else {
      deliverySpeed.style.backgroundColor = "";  
    }

    if (name.value.trim() === "") {
      name.style.backgroundColor = "red";
      name.focus();
      return false;
    } else {
      name.style.backgroundColor = ""; 
    }

    if (postalCodeField.value.trim() === "") {
      postalCodeField.style.backgroundColor = "red";
      postalCodeField.focus();
      return false;
    } else {
      postalCodeField.style.backgroundColor = "";  
    }

    form.style.display = "none";
    thankYouMessage.style.display = "block";
	
	
	// Displaying the Thank you message with all the previously input values
    thankYouCustomer.textContent = name.value;
    thanksPC.textContent = postalCodeField.value;
    thankYouSpeed.textContent = deliverySpeed.options[deliverySpeed.selectedIndex].text;
    thankYouCost.textContent = deliverySpeed.value;

	// Updating the shipment informtion 
    shipInfo.name = name.value;
    shipInfo.pc = postalCodeField.value;
    shipInfo.speed = deliverySpeed.options[deliverySpeed.selectedIndex].text;
    shipInfo.cost = deliverySpeed.value;

    console.log("Shipping Info:", shipInfo);

    return false;
  };
}
