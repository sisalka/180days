function myFunction() {
    var d = new Date();
    var n = d.getDay()
    document.getElementById(n).classList.add("today");
    var quotes = [
        "Sunday Funday!",
        "Back to the grind!",
        "Oh. It's Tuesday.",
        "Boom! Wednesday!",
        "Thirsty Thursday, yo!",
        "It's Friday! We should be kickin' it!",
        "Paaarrrtttyyy!"
    
    ]
    document.getElementById("quote").innerHTML = quotes[n];
    
}

myFunction();