/* CELESTE CISTERNAS
Debemos realizar la carga de 5(cinco) productos de prevención de contagio, <br>
			de cada una debo obtener los siguientes datos: <br>
			el tipo (validar "barbijo" , "jabón" o "alcohol") , <br>
			el precio (validar entre 100 y 300),<br>
			la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), <br>
			 la Marca y el fabricante. <br>
			Se debe Informar al usuario lo siguiente:<br>

			a) Del más barato de los alcohol, la cantidad de unidades y el fabricante<br>
			b) Del tipo con mas unidades, el promedio por compra <br>
			c) Cuántas unidades de jabones hay en total
*/
function mostrar() {

	let contadorVueltas;
	let tipoIngresado;
	let precioIngresado;
	let cantidadIngresada;
	let marcaIngresada;
	let fabricanteIngresado;
	//let banderaPrimerAlcohol;
	let alcoholMasBarato;
	let alcoholBaratoUnidades;
	let alcoholBaratoFabricante;
	let contadorBarbijo;
	let contadorJabon;
	let contadorAlcohol;
	let unidadesBarbijo;
	let unidadesJabon;
	let unidadesAlcohol;
	let promedio;

	contadorBarbijo = 0;
	contadorJabon = 0;
	contadorAlcohol = 0;
	contadorVueltas = 0;
	banderaPrimerAlcohol = 0;

	while (contadorVueltas < 5) {
		tipoIngresado = prompt("Ingrese tipo: barbijo/jabón/alcohol");
		while (isNaN(tipoIngresado) == false || tipoIngresado != "barbijo" && tipoIngresado != "jabon" && tipoIngresado != "alcohol") {
			tipoIngresado = prompt("Error, Ingrese tipo: barbijo/jabón/alcohol");
		}

		precioIngresado = prompt("Ingrese el precio entre 100 y 300");
		precioIngresado = parseInt(precioIngresado);
		//while (precioIngresado > 100 && precioIngresado < 300){ esta mal porque es lo correcto
		while (isNaN(precioIngresado) == true || precioIngresado < 100 || precioIngresado > 300) {
			precioIngresado = prompt("Error, Ingrese el precio entre 100 y 300");
			precioIngresado = parseInt(precioIngresado);
		}

		cantidadIngresada = prompt("Ingrese la cantidad de unidades entre 0 y 1000");
		cantidadIngresada = parseInt(cantidadIngresada);
		while (isNaN(cantidadIngresada) == true || cantidadIngresada < 0 || cantidadIngresada > 1000) {
			cantidadIngresada = prompt("Error, Ingrese la cantidad de unidades");
			cantidadIngresada = parseInt(cantidadIngresada);
		}

		marcaIngresada = prompt("Ingrese marca");
		while (isNaN(marcaIngresada) == false) {
			marcaIngresada = prompt("Error, Ingrese marca");
		}

		fabricanteIngresado = prompt("Ingrese fabricante");
		while (isNaN(fabricanteIngresado) == false) {
			fabricanteIngresado = prompt("Error, Ingrese fabricante");
		}
		//a) Del más barato de los alcoholes, la cantidad de unidades y el fabricante<br>
		/*		if (tipoIngresado == "alcohol") {
					if (banderaPrimerAlcohol == 0) {
						alcoholMasBarato = precioIngresado;
						alcoholBaratoUnidades = cantidadIngresada;
						alcoholBaratoFabricante = fabricanteIngresado;
					}
					else if (precioIngresado < alcoholMasBarato) {
						alcoholMasBarato = precioIngresado;
						alcoholBaratoUnidades = cantidadIngresada;
						alcoholBaratoFabricante = fabricanteIngresado;
					}		
		*/
		/*      if(tipoIngresado=="alcohol" && precioIngresado<alcoholMasBarato || banderaPrimerAlcohol== true){
					alcoholMasBarato = precioIngresado;
					alcoholBaratoUnidades = cantidadIngresada;
					alcoholBaratoFabricante = fabricanteIngresado;
					banderaPrimerAlcohol == false;
				}
		*/
		//b) Del tipo con mas unidades, el promedio por compra <br>
		switch (tipoIngresado) {
			case "barbijo":
				contadorBarbijo++;
				unidadesBarbijo = cantidadIngresada;
				break;
			case "jabon":
				contadorJabon++;
				unidadesJabon = cantidadIngresada;
				break;
			case "alcohol":
				if (contadorAlcohol == 0 || precioIngresado < alcoholMasBarato) { //la bandera queda obsoleta porque el contador indica la cantidad
					alcoholMasBarato = precioIngresado;
					alcoholBaratoUnidades = cantidadIngresada;
					alcoholBaratoFabricante = fabricanteIngresado;
				}
				contadorAlcohol++;
				unidadesAlcohol = cantidadIngresada;
				break;
		}
		contadorVueltas++;
	}
	// A
	document.write("Cantidad de unidades de alcohol mas barato " + alcoholBaratoUnidades + "<br>");
	document.write("Precio del alcohol mas barato $ " + alcoholMasBarato + "<br>");
	document.write("Fabricante del alcohol mas barato " + alcoholBaratoFabricante + "<br>");

	//shift flecha derecha, ctrl d, y ya puedo escribir

	// B
	if (unidadesAlcohol > unidadesBarbijo && unidadesAlcohol > unidadesJabon) {
		promedio = unidadesAlcohol / contadorAlcohol;
	}
	else {
		if (unidadesBarbijo > unidadesJabon) {
			promedio = unidadesBarbijo / contadorBarbijo;
		}
		else {
			promedio = unidadesJabon / contadorJabon;
		}
	}
	//C
	alert("Unidades de jabon en total " + unidadesJabon);

}

/* isNaN, diferencia lo que son numeros vs el resto del universo
isNaN(valor)="33" es falso, es un numero
isNaN(valor)="lalala" es verdadero, no es un numero
para validar que no es un numero while(isNaN()==true)
para numeros ==true palabras ==false
*/






