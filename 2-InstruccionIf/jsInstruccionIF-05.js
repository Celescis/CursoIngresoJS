function mostrar()
{
	let edad;

	edad= document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad<13 || edad>17){
		alert("No es adolescente");
	}

	
	/*if(!(edad>13 && edad<18)){
		alert("No es adolescente");
	}

	*/
}//FIN DE LA FUNCIÓN