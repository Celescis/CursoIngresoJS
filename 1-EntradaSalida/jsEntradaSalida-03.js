/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	
	nombreIngresado= document.getElementById('txtIdNombre').value; //me guarda la variable en la caja del html
	
	alert(nombreIngresado); //poner el alert para testear aunque no lo pidan, puede ayudar a identificar errores

	document.getElementById('txtIdNombre').value = ""; 	//para hacer que se borre lo ingresado y quede todo como antes

}


