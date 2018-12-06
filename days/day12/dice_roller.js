var title = document.getElementById("title");
var shake = document.getElementById("shake");
var number = document.getElementById("number");
var button = document.getElementsByClassName("button")[0];
var dice_left = document.getElementsByClassName("dice")[0];
var dice_right = document.getElementsByClassName("dice")[1];




document.getElementById("title").innerHTML = "Hey you! Give us a roll!";



document.getElementById("1_1").classList.add("dot_visible");
document.getElementById("1_9").classList.add("dot_visible");
document.getElementById("2_1").classList.add("dot_visible");
document.getElementById("2_3").classList.add("dot_visible");
document.getElementById("2_7").classList.add("dot_visible");
document.getElementById("2_9").classList.add("dot_visible");


var ShakeFunction = function () {

  title.style.display="none";
  number.style.display="none";
  shake.style.display="block";
 
  
  document.getElementById("shake").innerHTML = "Shake, shake, shake..";
  shake.classList.add("shake_it");
  dice_left.classList.add("spindice");
  dice_right.classList.add("spindice");
  
  setTimeout( function(){
    shake.classList.remove("shake_it");
  	dice_left.classList.remove("spindice");
  	dice_right.classList.remove("spindice"); 	
  }, 2000)
  
  }
  


// funkcia pouzije ako prvy argument "1" alebo "2" - cislo kocky ako ako druhy vysledok nahodneho cisla - premenna nc1 alebo nc2 //
// pre kocku 1 aj 2 sa pouzije premenna dotComb - dictionary pre nahodne cislo (key), ktoremu prisluchaju bodky na vyfarebnie (values)//


var ChangeValueFunction = function () {

	
  document.getElementById("shake").innerHTML = "Shake, shake, shake..";

	var nc1 = Math.floor((Math.random() * 6) + 1);
	var nc2 = Math.floor((Math.random() * 6) + 1);
	var dotComb = {
    "1":[5],
    "2":[3,7],
		"3":[3,5,7],
    "4":[1,3,7,9],
    "5":[1,3,5,7,9],
    "6":[1,3,4,6,7,9]
	};
  
  /*document.getElementById("1_1").innerHTML = nc1;
  document.getElementById("2_1").innerHTML = nc2;*/
  
  var Dots = document.getElementsByClassName("dot_visible");
  var arr = Array.from(Dots);
  [].forEach.call(arr, function (element){
   		element.classList.remove("dot_visible")
    }
    );
  
	function ZmenHodnotuKocky(CisloKocky, HodnotaKocky) {
		var valuelist = dotComb[HodnotaKocky];
    

    
  	for ( i =0 ; i < valuelist.length ; i++ ) {
  							document.getElementById(CisloKocky+"_"+valuelist[i]).classList.add("dot_visible");
 				 }

	}
 	
  ZmenHodnotuKocky("1", nc1);
	ZmenHodnotuKocky("2", nc2);
  
  setTimeout ( function () {
    shake.style.display="none";
    number.style.display="block";
  	document.getElementById("number").innerHTML = nc1 + nc2;
		}, 1500);
    
}


button.addEventListener("click", ShakeFunction, false);
button.addEventListener("click", ChangeValueFunction, false);