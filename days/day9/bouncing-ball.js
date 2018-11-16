var ball = document.getElementsByClassName("ball")[0];
var speed = 1;
var level = 1;  

var FastenerFunction = function () {
    
    console.log(speed);
    
    ball.style.display= "none";
    document.getElementById("alarmmsg").innerHTML = "Level " + level;
    
    setTimeout(function () {
    	document.getElementById("alarmmsg").innerHTML = "";
      level = level + 1;
      speed = speed - 0.15;
      ball.style["-webkit-animation-duration"] = speed+"s";
      ball.style.display= "block";
      console.log("po 3 sekundach...");
    }, 3000);
    
};


ball.addEventListener('click', FastenerFunction, false);
    
  
		
  