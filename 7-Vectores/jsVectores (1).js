/*
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobreza entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados        
H)la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i)que continente tiene mas habitantes.
*/

function mostrar() {
	//VALIDACION
	let contadorPais;
	let continenteIngresado;
	let paisIngresado;
	let cantidadHabIngresado;
	let nivelPobrezaIngresado;
	let tempMinIngresado;
	//CONTADORES
	let contPaisMenos0;
	//LOGICA
	let tempPares;
	let tempImpar;
	let paisMenosHab;
	let flagPaisMenosHab;
	let paisesMas40G;
	let paisesAmMenos0G;
	let menorTemp;
	let paisMenorTemp;
	let menosHab;
	//ACUMULADOR HABITANTES POR CONTINENTE
	let habAfrica;
	let habAmerica;
	let habEuropa;
	let habOceania;
	let habAsia;

	tempPares = 0;
	tempImpar = 0;
	paisesMas40G = 0;
	paisesAmMenos0G = 0;
	flagPaisMenosHab = 0;
	contPaisMenos0 = 0;
	habEuropa = 0;
	habOceania = 0;
	habAmerica = 0;
	habAsia = 0;
	habAfrica = 0;
	menorTemp = 0;
	menosHab = 0;

	for (contadorPais = 0; contadorPais < 2; contadorPais++) {

		//CONTINENTE
		continenteIngresado = prompt("Ingrese el continente", "america, asia, europa, africa, oceania");
		while (isNaN(continenteIngresado) == false || continenteIngresado != "america" && continenteIngresado != "asia" && continenteIngresado != "europa" && continenteIngresado != "africa" && continenteIngresado != "oceania") {
			continenteIngresado = prompt("Error, ingrese el continente", "america, asia, europa, africa, oceania");
		}
		//PAIS
		paisIngresado = prompt("Ingrese el nombre del pais");
		while (isNaN(paisIngresado) == false) {
			paisIngresado = prompt("Error, ingrese el nombre del pais");
		}
		//CANTIDAD HABITANTES
		cantidadHabIngresado = prompt("Ingrese la cantidad de habitantes en millones", "entre 1 y 7000 millones");
		cantidadHabIngresado = parseInt(cantidadHabIngresado);
		while (isNaN(cantidadHabIngresado) == true || cantidadHabIngresado < 1000000 && cantidadHabIngresado > 7000000000) {
			cantidadHabIngresado = prompt("Error, ingrese la cantidad de habitantes en millones", "entre 1 y 7000 millones");
			cantidadHabIngresado = parseInt(cantidadHabIngresado);
		}
		//POBREZA
		if (continenteIngresado == "europa") {
			nivelPobrezaIngresado = prompt("Ingrese el nivel de pobreza", "rico, muy rico");
			while (isNaN(nivelPobrezaIngresado) == false || nivelPobrezaIngresado != "rico" && nivelPobrezaIngresado != "muy rico") {
				nivelPobrezaIngresado = prompt("Error, ingrese el nivel de pobreza", "rico, muy rico");
			}
		}
		else {
			nivelPobrezaIngresado = prompt("Ingrese el nivel de pobreza", "pobre, rico, muy rico");
			while (isNaN(nivelPobrezaIngresado) == false || nivelPobrezaIngresado != "pobre" && nivelPobrezaIngresado != "rico" && nivelPobrezaIngresado != "muy rico") {
				nivelPobrezaIngresado = prompt("Error, ingrese el nivel de pobreza", "pobre, rico, muy rico");
			}
		}
		//TEMPERATURA MINIMA
		tempMinIngresado = prompt("Ingrese la temperatura minima del territorio", "Entre -50°C y 50°C");
		tempMinIngresado = parseInt(tempMinIngresado);
		while (isNaN(tempMinIngresado) == true || tempMinIngresado > 50 || tempMinIngresado < -50) {
			tempMinIngresado = prompt("Error, ingrese la temperatura minima del territorio", "Entre -50°C y 50°C");
			tempMinIngresado = parseInt(tempMinIngresado);
		}

		if (flagPaisMenosHab == 0) {
		}



		//d)la cantidad de paises que superan los 40 grados.

		//f)el promedio de habitantes entre los paises ingresados .
		//g)el promedio de habitantes entre los paises que superan los 40 grados        

		//i) que continente tiene mas habitantes.
		
		//a)La cantidad de temperaturas pares. SI %2 Y NO ME DA 0, NO ES PAR.
		if (tempMinIngresado % 2 == 0) {
			tempPar++
		}
		switch (continenteIngresado) {
			case "europa":
				habEuropa = habEuropa + cantidadHabIngresado;
				habEuropa = parseInt(habEuropa);
				//b)la cantidad de temperaturas impares de europa.
				if (tempMinIngresado % 2 != 0) {
					tempImpar++
				}
				break;
			case "america":
				habAmerica = habAmerica + cantidadHabIngresado;
				habAmerica = parseInt(habAmerica);
				//e)la cantidad de paises de america que tienen menos de 0 grados.
				if (tempMinIngresado < 0) {
					contPaisMenos0++;
				}
				break;
			case "asia":
				habAsia = habAsia + cantidadHabIngresado;
				habAsia = parseInt(habAsia);
				break;
			case "oceania":
				habOceania = habOceania + cantidadHabIngresado;
				habOceania = parseInt(habOceania);
				break;
			case "africa":
				habAfrica = habAfrica + cantidadHabIngresado;
				habAfrica = parseInt(habAfrica);
				break;
		}
		//c)El nombre del pais con menos habitantes.AYUDAAA
		if (cantidadHabIngresado > menosHab) {
			menosHab = cantidadHabIngresado;
			paisMenosHab = paisIngresado;
		}
		//H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. AYUDDAAA
		if (tempMinIngresado > menorTemp) {
			menorTemp = tempMinIngresado;
			paisMenorTemp = paisIngresado;
		}
	}
	//VALIDACION
	console.log("CONTINENTE " + continenteIngresado);
	console.log("PAIS " + paisIngresado);
	console.log("CANTIDAD DE HABITANTES " + cantidadHabIngresado);
	console.log("POBREZA " + nivelPobrezaIngresado);
	console.log("TEMPERATURA " + tempMinIngresado);
	console.log("CANTIDAD DE TEMPERATURAS PARES " + tempPares); //CUANDO ES NEGATIVO NO ME DA
	console.log("CANTIDAD DE TEMPERATURAS IMPARES " + tempImpar); //AYUDAA NO ME DA
	console.log("CANTIDAD DE PAISES CON MAS DE 40°C " + paisesMas40G);
	//C
	console.log("PAIS CON MENOS HABITANTES " + paisMenosHab);
	//E
	console.log("CANTIDAD DE PAISES DE AMERICA CON MENOS DE 0 GRADOS " + contPaisMenos0);
	//H
	console.log("TEMPERATURA MINIMA INGRESADA " + menorTemp);
	console.log("PAIS CON LA MENOR TEMPERATURA " + paisMenorTemp);//DA UNDEFINED
	//I
	console.log("CANTIDAD DE HABITANTES EN AMERICA " + habAmerica);
	console.log("CANTIDAD DE HABITANTES EN AFRICA " + habAfrica);
	console.log("CANTIDAD DE HABITANTES EN ASIA " + habAsia);
	console.log("CANTIDAD DE HABITANTES EN EUROPA " + habEuropa);
	console.log("CANTIDAD DE HABITANTES EN OCEANIA " + habOceania);



}