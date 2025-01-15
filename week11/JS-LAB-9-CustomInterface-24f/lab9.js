//LAB 9-DATA STORAGE: HOME PAGE

//window.onload
window.onload = storeValue;
    //check for stored values
        //retrieve stored values

        if (document.cookie != ""){
            storeVlaueCookie = document.cookie;
            var storeVlaueArray = document.cookie.split(';')
            //console.log(storeVlaueArray);
            var storedColor = storeVlaueArray[1].split("=")[1];
            //console.log(storedColor);
            var storeName = storeVlaueArray[0].split("=")[1];
            //console.log(storeName);
            //change welcome text to stored name
            var welcomeMsg = document.getElementById("newMsgBox");
            welcomeMsg.innerHTML = "Welcome " + storeName +"!"
            //change BG colour to stored colour
    
            document.body.style.background = storedColor;
    
            var button = document.getElementById("btnDel");
            button.onclick = function(event) {
                document.cookie = "Name = "+ storeName +";max-age=0";
                document.cookie =  "Color =" + storedColor +";max-age=0";
                window.location.reload();
            }
            }

        
		
//#####============== DO THIS PART FIRST! ===============		
    //get the form and set submit listener
	function storeValue() {
        var myform = document.forms.infoForm;
        var name = myform.f_name;
        var fav_color = myform.f_colour;
    
        //onsubmit Function
        myform.onsubmit = function() {
            //get values from form
            var nameValue = name.value;
            var colorValue = fav_color.value;
            //console.log the form values
            console.log(nameValue,colorValue);           
            makeCookie('Name', nameValue, 172800);
            makeCookie('Color', colorValue, 172800);
        } 
    }
    function makeCookie(cookieName, cookieValue, lifespan) {
        document.cookie = cookieName+"="+cookieValue+";max-age="+lifespan;
    }

    