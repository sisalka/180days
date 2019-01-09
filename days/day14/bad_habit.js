
var title = document.getElementById("title");

document.getElementById("title").innerHTML = "What's your bad habit?";

var hobit = document.getElementById("habit");


var Answers = {
"1":["Seriously? Why don't you grow the hell up?!"],
"2":["What? Who does that?!"],
"3":["NO! Bad!"],
"4":["That's terrible! You should knock that off!"],
"5":["A kitten dies everytime you do that."],
"6":["Aren't you a little old for that crap?"],
"7":["I thought you were better than that."],
"8":["ಠ__ಠ"],
"9":["My disapproval is overwhelming."],
"10":["You are bad and you should feel bad!"],
"11":["Are you going to suck all your life?"],
"12":["That is totally unacceptable."],
"13":["I can't believe you are that disgusting."],
"14":["You should be utterly ashamed."],
"15":["Gross. You are gross."],

};

var RandomAnswer = function(NahodnaOdpoved) {
 var ListOdpovedi = Answers[NahodnaOdpoved];
 return ListOdpovedi;
};

var ReplyFunction = function(){
	var NahodneCislo = Math.floor((Math.random() * 15) + 1);
  //var ListOdpovedi = Answers[NahodnaOdpoved];
  

	if  (hobit.value === '') {
    text = "You don't fill in forms?<br>Are you freaking kidding me?";
  } else {
    text = "You "+ hobit.value + "?" + "<br>" + RandomAnswer(NahodneCislo);
    // ekvivalent tohto:
    //text = "You "+ habit+ " ?" + "\n" + Answers[NahodneCislo]
  
  }
  document.getElementById("title").innerHTML = text;
};

button.addEventListener("click", ReplyFunction, false);

