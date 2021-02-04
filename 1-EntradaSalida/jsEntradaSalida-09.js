/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumentosueldo;
	let nuevosueldo;

	sueldo=parseInt(document.getElementById("txtIdSueldo").value);
	aumentosueldo= 10*sueldo/100;
	nuevosueldo=sueldo+aumentosueldo;
	document.getElementById("txtIdResultado").value=nuevosueldo
	//si queremos que nos muestre en un cuadro de texto de la página primero poner el getElement y al final la variable//


}
