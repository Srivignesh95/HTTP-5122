//LAB 9-DATA STORAGE: PRODUCT PAGE

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
            var welcomeMsg = document.getElementById("MesgBox");
            welcomeMsg.innerHTML = "Welcome " + storeName +"!"
            //change BG colour to stored colour
    
            document.body.style.background = storedColor;
    
            var button = document.getElementById("btnDel");
            }
            


