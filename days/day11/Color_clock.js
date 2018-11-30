


function formatTime(i) { 
    if (i <= 9) {
        i = '0' + i;
    }
    return i;
}

function formatColor(i) { 
    if (i.length <2 ) {
        i = '0' + i;
    }
    return i;
}

function convertTimeToColor(hour, min, sec) {
    var red= Math.round((255*(hour/23))).toString(16);
    var blue= Math.round((255*(min/59))).toString(16);
    var green= Math.round(255*(sec/59)).toString(16);

    return formatColor(red)+formatColor(blue)+formatColor(green);
}

setInterval(function (){

var currentTime = new Date ();

var hour =  currentTime.getHours();
var min =  currentTime.getMinutes();
var sec = currentTime.getSeconds();

var NewColor= convertTimeToColor(hour, min, sec);

var time = formatTime(hour) + ":" + formatTime(min) + ":" + formatTime(sec);

document.getElementById("time").innerHTML = time;

document.getElementById("color").innerHTML = NewColor;

document.body.style.backgroundColor = "#" + NewColor;

}, 1000);



