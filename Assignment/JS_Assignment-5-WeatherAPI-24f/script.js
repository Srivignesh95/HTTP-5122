
// Function to fetch and display weather information for a specified location
function bulletproof(id){
    // Get references to elements in the HTML for updating the UI
    var button1 = document.getElementById("Toronto");
    var button2 = document.getElementById("Kitchener");
    var currentLocation = document.getElementById("location");
    var icon = document.getElementById("icon");
    var error = document.getElementById("error");
    var temperature = document.getElementById("temperature");
    var conditions = document.getElementById("conditions");
    var output = document.getElementById("output");
    var feelslike = document.getElementById("feelslike");
    
    // Make the weather output container visible
    document.getElementById("output").style.display = "block";

    // Construct the API URL with the provided location ID and API key
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+id+"&appid=0b43c028b1c77d45ad6ec9181b771f50&units=metric"
    console.log(url);

    // Create a new XMLHttpRequest object to make the API request
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true); //Opening a connection to the server and requesting the file.
    xhr.responseType="json";
    xhr.send(null); //Sending the request.
    
    // Handle the API response
    xhr.onreadystatechange = function() {
        if(xhr.readyState===4){
            if(xhr.status===200){
                var data = xhr.response;
                // Update the UI with the received weather data
                currentLocation.innerHTML = data.name;
                console.log(data.name);
                icon.innerHTML="<img src=https://openweathermap.org/img/wn/"+data.weather[0].icon+".png alt="+data.weather[0].main+">";
                temperature.innerHTML=Math.round(data.main.temp)+"&deg;C";
                conditions.innerHTML=data.weather[0].description.charAt(0).toUpperCase()+ data.weather[0].description.slice(1)+".";
                feelslike.innerHTML= Math.round(data.main.feels_like)+"&deg;C";

                console.log(data);
            }else{
                // Log an error message if the API call fails
               console.log("API Call was not success!!!");
            }
        }

    }
}