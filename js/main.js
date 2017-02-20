var lat,lon;
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        
    } else {
        $(".demo").append("Geolocation is not supported by this browser.");
    }
}

function showPosition(position,lat,lon) {
    lat=position.coords.latitude;
    lon=position.coords.longitude;
    $(".demo").append("Latitude: " + lat + 
    "<br>Longitude: " + lon);
    gettingJSON(lat,lon);    
}

var gettingJSON = function(lat,lon){
        
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID=4e1e14669a3df8f9829a1a9074ec22e8",function(json){
            tempC=Math.round(json.main.temp - 273.15);
            tempF=(tempC*1.8) + 32;
            country=json.sys.country;
            $(".city-name").append(""+ json.name+ ", " + country);
            $(".temp-min").append(""+ tempC + "\xB0" + "C");
            $("#Fahrenheit").on("click", function(){
            $(".temp-min").empty();
            $(".temp-min").append(""+ tempF + "\xB0" + "F");
                });
            $("#Celcius").on("click", function(){
            $(".temp-min").empty();
            $(".temp-min").append(""+ tempC + "\xB0" + "C");
                });
            icon=json.weather[0].icon;
            $(".icon").append("<img src=http://openweathermap.org/img/w/"+ icon +".png>");
            
            
});}
 
$(document).ready(function(){
getLocation();
  });
