console.log("Holi");

var botoncito = document.getElementById('btn');

botoncito.addEventListener('click', function(){
	var comments = document.getElementById('counter-textarea').value;

	//limpiar el textarea
	document.getElementById('counter-textarea').value = '';
console.log("Holi");
	//contenedor que esta en el html
	var cont = document.getElementById('content');

	//creamos el div que contiene cada comentario
	var newComments = document.createElement('div');
  newComments.className="sendTweet";

	//validar que textarea tenga un msje
	if(comments.length == 0 || comments == null) {
		alert('Debes ingresar un mensaje');

		return false;
	}


  var textNewComment = document.createTextNode(comments);
  console.log("Holi");
  var contenedorElemento = document.createElement('p');
  contenedorElemento.appendChild(textNewComment);
  newComments.appendChild(contenedorElemento);

  cont.appendChild(newComments);
  })
