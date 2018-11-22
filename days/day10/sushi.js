var sushi = document.getElementsByClassName('sushi');
var classes = ['jiggle_1', 'jiggle_2', 'jiggle_3', 'jiggle_4'];




for (i=0; i < sushi.length; i++) {
	sushi[i].addEventListener("click", RandomClass);
}

function  RandomClass (event) {
	var NewClass = classes[ Math.floor( Math.random()*classes.length ) ];
  var sushi_image = event.target.classList;
    sushi_image.add(NewClass);
 	setTimeout(function () {
     sushi_image.remove(NewClass);
 	},1000)
}

