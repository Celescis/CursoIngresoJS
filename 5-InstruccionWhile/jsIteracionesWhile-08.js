/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	
	let respuesta;
	let valor;
	let positivos;
	let negativos;
	let flag;

	contador = 0;
	positivos = 0;
	negativos = 1;
	flag = 0;//o contador
	respuesta = 'si';

	do {
		valor = prompt("Ingrese un numero positivo o uno negativo");
		if (valor >= 0) {
			positivos = positivos + valor;
			positivos = parseInt(positivos);
		}
		else {
			negativos = negativos * valor;
			negativos = parseInt(negativos);
			flag = 1;
		}
		respuesta = prompt("Quiere ingresar otro numero? R: Si o No");
	} while (respuesta == 'si' || respuesta == "Si");

	/*	while (respuesta == 'si'|| respuesta=="Si") {
			valor = prompt("Ingrese un numero positivo o uno negativo");
			contador++;
	
			if (valor > 0) {
				positivos = (positivos + valor); //no me suma
			}
			else {
				negativos = negativos * valor;
			}
			respuesta=prompt("Quiere ingresar otro numero?");
		}
	*/

	document.getElementById('txtIdSuma').value = positivos;
	if (flag == 0) {//me permite dejar en cero los num negativos. CONTROLA SI LO QUE SE MUESTRA VA BIEN O MAL.
		negativos = 0
	}
	document.getElementById('txtIdProducto').value = negativos;

}//FIN DE LA FUNCIÓN