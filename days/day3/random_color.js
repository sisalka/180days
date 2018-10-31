document.getElementById("colorButton").addEventListener("click", RandomColorFunction);

function RandomColorFunction() {
    var NewColor = '#' + Math.random().toString(16).slice(2, 8);
    document.body.style.backgroundColor = NewColor;
    }
    