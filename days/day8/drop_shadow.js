var boxshadow = document.getElementsByClassName('cat');
var textshadow = document.getElementsByClassName('text');

for (i=0; i < boxshadow.length; i++) {
	boxshadow[i].addEventListener("click", DropBoxShadow);
}

for (i=0; i < textshadow.length; i++) {
	textshadow[i].addEventListener("click", DropTextShadow);
}

var shadowboxsize = 0;

function  DropBoxShadow (event) {
	shadowboxsize = shadowboxsize+5;
  event.target.style.boxShadow = "0px 0px 40px "+shadowboxsize+"px grey";
}

var shadowtextsize_y = 0;
var shadowtextsize_x = 0;
var shadowtextsize_z = 0;

function  DropTextShadow (event) {
	shadowtextsize_y = shadowtextsize_y +5;
  shadowtextsize_x = shadowtextsize_x +5;
  shadowtextsize_z = shadowtextsize_z -5;
  let textShadow = shadowtextsize_x+"px "+shadowtextsize_y+"px "+shadowtextsize_y+"px black";
  console.log(textShadow);
  event.target.style.textShadow = textShadow;}