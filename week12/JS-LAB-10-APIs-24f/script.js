window.onload = function(){
    /*var location = document.getElementById("location");
    var temperature = document.getElementById("temperature");
    var conditions = document.getElementById("conditions");*/
    var newLocation = document.getElementById("newLocation");
    var newTemperature = document.getElementById("newTemperature");
    var newConditions = document.getElementById("newConditions");

    var url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=0b43c028b1c77d45ad6ec9181b771f50&units=metric"

    var xhr = new XMLHttpRequest(); //Create a new request object.

    xhr.open("GET", url, true); //Opening a connection to the server and requesting the file.
    xhr.responseType="json";
    xhr.send(null); //Sending the request.
    xhr.onreadystatechange = function() {
        if(xhr.readyState===4){
            if(xhr.status===200){
                var data = xhr.response;
                console.log(data);
                /*location.innerHTML = data.name;
                temperature.innerHTML=data.main.temp;
                conditions.innerHTML=data.weather[0].description;*/
                newLocation.innerHTML = "City:"+data.name;
                newTemperature.innerHTML=Math.round(data.main.temp)+"&deg;C";
                newConditions.innerHTML=data.weather[0].description;
                newConditions.innerHTML=data.weather[0].description.charAt(0).toUpperCase()+ data.weather[0].description.slice(1)+".";
                
            }else{
                newLocation.innerHTML="API Call was not success!!!";
            }
        }
        };
}
