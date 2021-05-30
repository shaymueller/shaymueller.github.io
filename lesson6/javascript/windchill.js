// wind chill
let s = document.getElementById("speed").innerHTML;
let t = document.getElementById("tempF").innerHTML;
var result;

if(t <= 50 && s >= 3){
    wind = Math.round(35.74 + (0.6215 * t) - (35.75 * (s ** 0.16)) + (0.4275 * t * (s ** 0.16)));
    document.getElementById("windChill").innerHTML = wind;
}
else{
    document.getElementById("windChill").innerHTML = "N/A";
}