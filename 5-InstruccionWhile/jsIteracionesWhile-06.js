function mostrar() {
	let numero;
	let contador;
	let acumulador;
	let promedio;

	contador = 0;
	acumulador = 0;

	while(contador<5){
		numero=prompt("Ingrese cinco números");
		numero=parseInt(numero);

		acumulador=acumulador+numero;
		contador++;
	}

	promedio=acumulador/5;
	promedio=parseFloat(promedio);

	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = promedio;

}//FIN DE LA FUNCIÓN