/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let contador;
	let acumulador;//va a ir sumando y no quiero que tenga basura, empiezo con 
	let valor;
	var respuesta;
	contador = 0;
	acumulador = 0;
	respuesta = 'si';

	while (respuesta == 'si') {
		valor = prompt("Ingrese un numero");
		acumulador = acumulador + valor;
		acumulador = parseInt(acumulador);
		contador++;
		respuesta = prompt("Desea ingresar otro numero?");
	}

	document.getElementById('txtIdSuma').value = acumulador;
	promedio = acumulador / contador;
	promedio = parseFloat(promedio);
	document.getElementById('txtIdPromedio').value = promedio;

}//FIN DE LA FUNCIÓN