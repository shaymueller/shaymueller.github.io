// wind chill
function tempSpeed() {
    document.querySelector('#speed').innerHTML = 21;   
    let speed = document.getElementById('speed').innerHTML;  

    document.querySelector('#tempF').innerHTML = 47;     
    let tempF = document.getElementById('tempF').innerHTML;


    let currentChill = windChill(tempF, speed);
    document.querySelector('#windChill').textContent = currentChill;
}
function windChill(t, s) {
     if (t <= 50 && s > 3) {
        let f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
        return f;
    } else {
        return "N/A";
    }
}