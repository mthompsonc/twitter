var textarea = document.getElementById('counter-textarea');
var limit = 200;

textarea.oninput = function() {
 textarea.style.height = "";
 textarea.style.height = Math.min(textarea.scrollHeight, 300) + "px";
};

var botoncito = document.getElementById('btn');

botoncito.addEventListener('click', function(){
	var comments = document.getElementById('counter-textarea').value;

	//limpiar el textarea
	document.getElementById('counter-textarea').value = '';
	//contenedor que esta en el html
	var cont = document.getElementById('content');

	//creamos el div que contiene cada comentario
	var newComments = document.createElement('div');
  newComments.className="sendTweet";

	//validar que textarea tenga un msje
	if(comments.length == 0 || comments == null) {
		return document.getElementById(btn);
	}

  var textNewComment = document.createTextNode(comments);
  console.log("Holi3");
  var contenedorElemento = document.createElement('p');
  contenedorElemento.appendChild(textNewComment);
  newComments.appendChild(contenedorElemento);

  cont.appendChild(newComments);

	var contador= 140;
	var num= document.getElementById('counter');
	num.innerHTML=contador;
	num.className='';
  })

console.log("Holi3");

function retroceso(){
  var num= document.getElementById('counter');
  var comments = document.getElementById('counter-textarea').value;
  var long = comments.length
  var contador= 140;
  contador= contador-long;
  num.innerHTML=contador;

	if(comments.length >= 130){
		num.className='rojo';
	}
	else if(comments.length >= 120){
		num.className='naranjo';
	}
	else if(comments.length >=141){
		botoncito.disabled='true';
	}
	else {
		num.className='';
		botoncito.disables='false';
	}
}
