/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let nuevoimporte;

	importe=parseInt(document.getElementById("txtIdImporte").value);
	descuento= 25*importe/100;
	nuevoimporte=importe-descuento;
	document.getElementById("txtIdResultado").value=nuevoimporte
	//si queremos que nos muestre en un cuadro de texto de la página primero poner el getElement y al final la variable//
}
