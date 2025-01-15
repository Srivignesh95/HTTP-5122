/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
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
  var thanksMessage = document.getElementById("thanks_msg");
  var thanksCustomer = document.getElementById("thanksCustomer");
  var thanksPC = document.getElementById("thanksPC");
  var name = form.f_Name;
  var postalCode = form.f_pc;
  var speed = form.f_speed;
  var thanksSpeed = document.getElementById("thanksSpeed");
  var thanksCost = document.getElementById("thanksCost");

  speed.onchange = goDD;
  form.onsubmit = processForm;
  function goDD() {
    console.log(speed.value);
  }

  function processForm() {
    if (speed.value == 0) {
      speed.style.background = "red";
      return false;
    }

    if (name.value === "") {
      name.style.background = "red";
      name.focus();
      return false;
    }

    if (postalCode.value === "") {
      postalCode.style.background = "red";
      postalCode.focus();
      return false;
    } else {
      form.style.display = "none";
      thanksMessage.style.display = "block";
      thanksCustomer.innerHTML = name.value;
      thanksPC.innerHTML = postalCode.value;
      thanksSpeed.innerHTML = speed.options[speed.selectedIndex].text;
      thanksCost.innerHTML = speed.value;
	  // ship info obj
      shipInfo["name"] = name.value;
      shipInfo["pc"] = postalCode.value;
      shipInfo["speed"] = speed.options[speed.selectedIndex].text;
      shipInfo["cost"] = speed.value;

      console.log("Shipping Info",shipInfo);
    }

    return false;
  }
}
