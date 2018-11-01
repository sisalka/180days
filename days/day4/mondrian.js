

var NewColor = '';
var buttons = document.getElementsByTagName('button');

for( i = 0; i < buttons.length; i++ ) {
	buttons[i].addEventListener("click", PickColor);
}

function PickColor(event) {
  NewColor = event.target.classList[0];
}



var cells = document.getElementsByClassName('item');

for (i=0; i < cells.length; i++) {
	cells[i].addEventListener("click", DropColor);
}

function  DropColor (event) {
  event.target.style.backgroundColor = NewColor
  
}
