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
  })

console.log("Holi3");

function retroceso(){
  var num= document.getElementById('counter');
  var comments = document.getElementById('counter-textarea').value;
  var long = comments.length
  var contador= 140;
  contador= contador-long;
  num.innerHTML=contador;
}
