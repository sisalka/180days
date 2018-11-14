var cells = document.getElementsByClassName('item');

for (i=0; i < cells.length; i++) {
	cells[i].addEventListener("mouseover", RandomColorFunction);
}

function RandomColorFunction() {
    var NewColor = '#' + Math.random().toString(16).slice(2, 8);
    event.target.style.backgroundColor = NewColor;
    }
    
   