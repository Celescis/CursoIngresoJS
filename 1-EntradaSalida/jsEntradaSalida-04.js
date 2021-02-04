/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() {
	let nombre
	let apellido
	nombre = prompt("Ingrese su nombre: ", ""); //se deja un espacio entre comillas porque ahi va a ir el valor//
	apellido = prompt("Ingrese su apellido: ", "");

	alert("Su nombre ingresado es: " + nombre + " " + apellido);

	//dato por id document.getElementById buscamos en el html el codigo que deberia tener el valor//
	document.getElementById('txtIdNombre').value = nombre +" "+ apellido //MUESTRA DATOS SI LO DEJAMOS AL FINAL//

/*function mostrar() LO QUE HIZO EL PROFE
{
	var nombreNuevo;
	
	
	nombreNuevo=prompt("ingrese nombre");
	// tomar dato nombreNuevo=document.getElementById('txtIdNombre').value;
	document.getElementById('txtIdNombre').value="su nombre es "+nombreNuevo+" ,bienvenido/a"; // muestra datos
}
/*
entrada DATOS
 nombreNuevo=prompt("ingrese nombre");
 nombreNuevo=document.getElementById('txtIdNombre').value;


mostrar DATOS
 alert(nombre);
	alert("su nombre es: "         +         nombreIngresado);
 document.getElementById('txtIdNombre').value=nombreNuevo;

*/



}

