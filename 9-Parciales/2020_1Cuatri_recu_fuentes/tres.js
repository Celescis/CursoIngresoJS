/*
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano
CELESTE CISTERNAS
*/
function mostrar() {

	//VALIDACION
	let respuesta;
	let mascotaIngresada;
	let tipoPelajeIngresado;
	let edadIngresada;
	let nombreIngresado;
	let razaIngresada;
	let pesoIngresado;
	let estadoClinicoIngresado;
	let tempCorporalIngresado;
	//LOGICA Y CONTADORES
	let pesoPerroPesado;
	let nomPerroPesado;
	let cantGatos;
	let cantPerros;
	let cantOtraCosa;
	let sumaMascotas;
	let porcentajeEnfermos;
	let totalPerGat;
	let flagGatoLiviano;
	let nomGatoLiviano;
	let pesoGatoLiviano;
	let razaGatoLiviano;
	let cantEnfermos;
	let cantInternados;
	let cantAdopcion;
	let menorEstadoClinico;
	let nomUltMascota;
	let flagMenorTemp;
	let animalMenorTemp;
	let menorTemp;
	let promedioKilos;
	let sumaPesos;
	let promTempGatos;
	let sumaTempGatos;
	let promTempPerros;
	let sumaTempPerros;
	let promTempOtros;
	let sumaTempOtros;
	let mayorPromMascota;

	respuesta = "si";
	pesoPerroPesado = 0;
	cantGatos = 0;
	cantPerros = 0;
	cantOtraCosa = 0;
	flagGatoLiviano = 0;
	cantInternados = 0;
	cantEnfermos = 0;
	cantAdopcion = 0;
	flagMenorTemp = 0;
	sumaPesos = 0;

	while (respuesta == "si") {

		mascotaIngresada = prompt("Ingrese el tipo de mascota", "gato, perro, otra cosa");
		while (isNaN(mascotaIngresada) == false || mascotaIngresada != "gato" && mascotaIngresada != "perro" && mascotaIngresada != "otra cosa") {
			mascotaIngresada = prompt("Error, ingrese el tipo de mascota", "gato, perro, otra cosa");
		}
		tipoPelajeIngresado = prompt("Ingrese el tipo de pelaje", "corto, largo, sin pelo");
		while (isNaN(tipoPelajeIngresado) == false || tipoPelajeIngresado != "corto" && tipoPelajeIngresado != "largo" && tipoPelajeIngresado != "sin pelo") {
			tipoPelajeIngresado = prompt("Error, ingrese el tipo de pelaje", "corto, largo, sin pelo");
		}
		edadIngresada = prompt("Ingrese la edad de la mascota");
		edadIngresada = parseInt(edadIngresada);
		while (isNaN(edadIngresada) == true || edadIngresada < 0 || edadIngresada > 40) {
			edadIngresada = prompt("Error, ingrese la edad de la mascota");
			edadIngresada = parseInt(edadIngresada);
		}
		nombreIngresado = prompt("Ingrese el nombre de la mascota");
		while (isNaN(nombreIngresado) == false) {
			nombreIngresado = prompt("Error, ingrese el nombre de la mascota");
		}
		razaIngresada = prompt("Ingrese la raza de la mascota");
		while (isNaN(razaIngresada) == false) {
			razaIngresada = prompt("Error, ingrese la raza de la mascota");
		}
		pesoIngresado = prompt("Ingrese el peso de la mascota");
		pesoIngresado = parseInt(pesoIngresado);
		while (isNaN(pesoIngresado) == true || pesoIngresado < 0 && pesoIngresado > 200) {
			pesoIngresado = prompt("Error, ingrese el peso de la mascota");
			pesoIngresado = parseInt(pesoIngresado);
		}
		estadoClinicoIngresado = prompt("Ingrese el estado clinico de la mascota", "enfermo, internado, adopcion");
		while (isNaN(estadoClinicoIngresado) == false || estadoClinicoIngresado != "adopcion" && estadoClinicoIngresado != "internado" && estadoClinicoIngresado != "enfermo") {
			estadoClinicoIngresado = prompt("Error, ingrese el estado clinico de la mascota", "enfermo, internado, adopcion");
		}
		tempCorporalIngresado = prompt("Ingrese la temperatura corporal del animal");
		tempCorporalIngresado = parseInt(tempCorporalIngresado);
		while (isNaN(tempCorporalIngresado) == true || tempCorporalIngresado < 0 && tempCorporalIngresado > 50) {
			tempCorporalIngresado = prompt("Error, ingrese la temperatura corporal del animal");
			tempCorporalIngresado = parseInt(tempCorporalIngresado);
		}

		switch (mascotaIngresada) {
			case "perro":
				cantPerros++;
				//a) El perro mas pesado
				if (pesoIngresado > pesoPerroPesado) {
					pesoPerroPesado = pesoIngresado;
					nomPerroPesado = nombreIngresado;
				}
				sumaTempPerros = sumaTempPerros + tempCorporalIngresado;
				sumaTempPerros = parseInt(sumaTempPerros);
				promTempPerros = cantPerros / sumaTempPerros;
				promTempPerros = parseFloat(promTempPerros);
				break;
			case "gato":
				cantGatos++;
				//i) El nombre y raza del gato sin pelos mas liviano BANDERA PARA VERIFICAR MINIMOS
				if (tipoPelajeIngresado == "sin pelo" && flagGatoLiviano == 0) {
					nomGatoLiviano = nombreIngresado;
					pesoGatoLiviano = pesoIngresado;
					razaGatoLiviano = razaIngresada;
					flagGatoLiviano = 1;
				} else {
					if (pesoGatoLiviano < pesoIngresado) {
						nomGatoLiviano = nombreIngresado;
						pesoGatoLiviano = pesoIngresado;
						razaGatoLiviano = razaIngresada;
					}
				}
				sumaTempGatos = sumaTempGatos + tempCorporalIngresado;
				sumaTempGatos = parseInt(sumaTempGatos);
				promTempGatos = cantGatos / sumaTempGatos;
				promTempGatos = parseFloat(promTempGatos);
				break;
			case "otra cosa":
				cantOtraCosa++;
				//c) El nombre de la ultima mascota de tipo "otra cosa"
				nomUltMascota = nombreIngresado;
				sumaTempOtros = sumaTempOtros + tempCorporalIngresado;
				sumaTempOtros = parseInt(sumaTempOtros);
				promTempOtros = cantOtraCosa / sumaTempOtros;
				promTempOtros = parseFloat(promTempOtros);
				break;
		}
		//g) Que estado clinico tiene la menor cantidad de mascotas
		switch (estadoClinicoIngresado) {
			case "adopcion":
				cantAdopcion++;
				break;
			case "enfermo":
				cantEnfermos++;
				break;
			case "internado":
				cantInternados++;
				break;
		}
		if (cantEnfermos < cantInternados && cantEnfermos < cantAdopcion) {
			menorEstadoClinico = cantEnfermos;
		} else {
			if (cantAdopcion < cantInternados) {
				menorEstadoClinico = cantAdopcion;
			}
			else {
				menorEstadoClinico = cantInternados;
			}
		}
		//e) Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
		if (promTempPerros > promTempGatos && promTempPerros > promTempOtros) {
			mayorPromMascota = "perro"
		} else {
			if (promTempOtros > promTempGatos) {
				mayorPromMascota = "otra cosa"
			}
			else {
				mayorPromMascota = "gato"
			}
		}
		respuesta = prompt("Desea ingresar otra mascota?", "si/no");
	}
	//b) El porcentaje de enfermos sobre el total de mascotas
	sumaMascotas = cantOtraCosa + cantPerros + cantGatos;
	porcentajeEnfermos = sumaMascotas / cantEnfermos * 100; //testear
	porcentajeEnfermos = parseFloat(porcentajeEnfermos);
	//d) El animal sin pelo con menor temperatura corporal
	if (tipoPelajeIngresado == "sin pelo" && flagMenorTemp == 0) {
		animalMenorTemp = mascotaIngresada;
		menorTemp = tempCorporalIngresado;
		flagMenorTemp = 1;
	} else {
		if (tempCorporalIngresado < menorTemp) {
			animalMenorTemp = mascotaIngresada;
			menorTemp = tempCorporalIngresado;
		}
	}
	//f) Sumando gatos y perros que porcentaje del total de mascotas son?
	if (mascotaIngresada == "gato" && mascotaIngresada == "perro") {
		totalPerGat = cantGatos + cantPerros;
		totalPerGat = parseInt(totalPerGat);
	}
	//H) Cual es el promedio de kilos de peso de tomando todas las mascotas
	sumaPesos = sumaPesos + pesoIngresado;
	sumaPesos = parseInt(sumaPesos);
	promedioKilos = sumaMascotas / sumaPesos;
	promedioKilos = parseFloat(promedioKilos);

	//A
	alert("EL PERRO MAS PESADO SE LLAMA " + nomPerroPesado + " Y PESA " + pesoPerroPesado + " KILOS.");
	//B
	alert("EL PORCENTAJE DE ENFERMOS SOBRE EL DE MASCOTAS " + porcentajeEnfermos);
	//C
	alert("EL NOMBRE DE LA ULTIMA MASCOTA OTRA COSA INGRESADO " + nomUltMascota);
	//D
	alert("ANIMAL SIN PELO CON MENOR TEMPERATURA: " + animalMenorTemp + " CON UNA TEMP DE: " + menorTemp);
	//E
	alert("EL ANIMAL CON MAYOR PROMEDIO DE TEMPERATURA ES " + mayorPromMascota);
	//F
	alert("LA SUMA DE PERROS Y GATOS ES " + totalPerGat);
	//G
	alert("EL ESTADO CLINICO CON LA MENOR CANTIDAD DE MASCOTAS " + menorEstadoClinico);
	//H
	alert("PROMEDIO DE KILOS DE TODAS LAS MASCOTAS " + promedioKilos);
	//I
	alert("NOMBRE Y RAZA DEL GATO SIN PELO MAS LIVIANO: " + nomGatoLiviano + " " + razaGatoLiviano);

}







/*
Para una institución educativa se necesitan registrar los datos de 15 alumnos.
Nos solicitan nombre, carrera , edad, sexo("f" o "m") y modalidad("presencial", "a distancia" o "semi-presencial")
y promedio general. Luego nos solicitan los siguientes informes:

*/
/*
function mostrar() {
	//VALIDACION
	let contadorAlum;
	let nombreIngresado;
	let carreraIngresada;
	let edadIngresada;
	let sexoIngresado;
	let modalidadIngresada;
	let promedioGralIngresado;
	//CONTADORES y LOGICA
	let mayorPromedio;
	let carreraMayorProm;
	let nombreMayorProm;
	let cantMayoresPresencial;
	let cantMujeresDistancia;
	let cantMujeresSemPresencial;
	let cantMayoresMasDe7Prom;
	let promEdadMujeresDistancia;
	let acumEdadMujeres;


	mayorPromedio = 0;
	cantMayoresPresencial = 0
	cantMujeresDistancia = 0
	cantMujeresSemPresencial = 0;
	cantMayoresMasDe7Prom = 0;
	acumEdadMujeres = 0;

	for (contadorAlum = 0; contadorAlum < 15; contadorAlum++) {
		nombreIngresado = prompt("Ingrese el nombre del alumno");
		while (isNaN(nombreIngresado) == false) {
			nombreIngresado = prompt("Error, ingrese el nombre del alumno");
		}
		carreraIngresada = prompt("Ingrese el nombre de la carrera");
		while (isNaN(carreraIngresada) == false) {
			carreraIngresada = prompt("Error, ingrese el nombre de la carrera");
		}
		edadIngresada = prompt("Ingrese la edad del alumno");
		edadIngresada = parseInt(edadIngresada);
		while (isNaN(edadIngresada) == true || edadIngresada < 1 && edadIngresada > 100) {
			edadIngresada = prompt("Error, ingrese la edad del alumno");
			edadIngresada = parseInt(edadIngresada);
		}
		sexoIngresado = prompt("Ingrese el sexo del alumno");
		while (isNaN(sexoIngresado) == false || sexoIngresado != "f" && sexoIngresado != "m") {
			sexoIngresado = prompt("Error, ingrese el sexo del alumno");
		}
		modalidadIngresada = prompt("Ingrese la modalidad de curso", "presencial, a distancia, semi-presencial");
		while (isNaN(modalidadIngresada) == false || modalidadIngresada != "presencial" && modalidadIngresada != "a distancia" && modalidadIngresada != "semi-presencial") {
			modalidadIngresada = prompt("Error, ingrese la modalidad de curso", "presencial, a distancia, semi-presencial");
		}
		promedioGralIngresado = prompt("Ingrese el promedio general del alumno");
		promedioGralIngresado = parseFloat(promedioGralIngresado);
		while (isNaN(promedioGralIngresado) == true || promedioGralIngresado < 0 && promedioGralIngresado > 100) {
			promedioGralIngresado = prompt("Error, ingrese el promedio general del alumno");
			promedioGralIngresado = parseFloat(promedioGralIngresado);
		}

		//a) La Carrera de la persona con mas promedio general.
		if (promedioGralIngresado > mayorPromedio) {
			mayorPromedio = promedioGralIngresado;
			carreraMayorProm = carreraIngresada;
			nombreMayorProm = nombreIngresado;
		}
		switch (modalidadIngresada) {
			case "presencial":
				//b) Cuantos mayores de edad(más de 17) cursan presencial.
				if (edadIngresada > 17) {
					cantMayoresPresencial++;
				}
				break;
			case "a distancia":
				//c) La cantidad de Mujeres que cursan a distancia o semi-presencial.
				//e) El promedio de edad entre las mujeres que cursan a distancia.
				if (sexoIngresado == "f") {
					cantMujeresDistancia++;

					acumEdadMujeres = acumEdadMujeres + edadIngresada;
					acumEdadMujeres = parseInt(acumEdadMujeres);

					promEdadMujeresDistancia = acumEdadMujeres / cantMujeresDistancia;
					promEdadMujeresDistancia = parseInt(promEdadMujeresDistancia);
				}
				break;
			case "semi-presencial":
				if (sexoIngresado == "f") {
					cantMujeresSemPresencial++;
				}
				break;
		}
		//d) Cuantas personas adultas(mas de 40 años), tienen mas de 7 de promedio general.
		if (edadIngresada > 40 && promedioGralIngresado > 7) {
			cantMayoresMasDe7Prom++;
		}
		//A
		alert("EL/LA ALUMNO/A " + nombreMayorProm + " CON EL MEJOR PROMEDIO DE " + carreraMayorProm + " TIENE " + mayorPromedio);
		//B
		alert("CANTIDAD DE MAYORES DE EDAD EN PRESENCIAL " + cantMayoresPresencial);
		//C
		alert("CANTIDAD DE MUJERES QUE CURSAN A DISTANCIA " + cantMujeresDistancia);
		alert("CANTIDAD DE MUJERES QUE CURSAN SEMI-PRESENCIAL " + cantMujeresSemPresencial);
		//D
		alert("CANTIDAD DE MAYORES DE 40 AÑOS CON UN PROMEDIO MAYOR DE 7 " + cantMayoresMasDe7Prom);
		//E
		alert("PROMEDIO DE EDAD DE LAS MUJERES QUE CURSAN A DISTANCIA " + promEdadMujeresDistancia);
	}
}
*/