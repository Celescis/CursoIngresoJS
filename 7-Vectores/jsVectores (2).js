/*Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
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

Parcialito 2*/
function mostrar() {

	//VALIDACION
	let validacion;
	let mascotaIngresada;
	let tipoPelajeIngresado;
	let edadIngresada;
	let nombreIngresado;
	let razaIngresada;
	let pesoIngresado;
	let estadoClinicoIngresado;
	let tempCorporalIngresada;
	//A
	let pesoPerroPesado;

	validacion = "si";
	pesoPerroPesado = 0;

	while (validacion == "si") {
		mascotaIngresada = prompt("Ingrese la mascota", "gato, perro, otra cosa");
		while (isNaN(mascotaIngresada) == false || mascotaIngresada != "gato" && mascotaIngresada != "perro" && mascotaIngresada != "otra cosa") {
			mascotaIngresada = prompt("Error, ingrese la mascota", "gato, perro, otra cosa");
		}
		tipoPelajeIngresado = prompt("Ingrese el tipo de pelaje", "corto, largo, sin pelo");
		while (isNaN(tipoPelajeIngresado) == false || tipoPelajeIngresado != "corto" && tipoPelajeIngresado != "largo" && tipoPelajeIngresado != "sin pelo") {
			tipoPelajeIngresado = prompt("Error, ingrese el tipo de pelaje", "corto, largo, sin pelo");
		}
		edadIngresada = prompt("Ingrese la edad del animal");
		edadIngresada = parseInt(edadIngresada);
		while (isNaN(edadIngresada) == true || edadIngresada > 100 || edadIngresada < 1) {
			edadIngresada = prompt("Error, ingrese la edad del animal");
			edadIngresada = parseInt(edadIngresada);
		}
		nombreIngresado = prompt("Ingrese el nombre del animal");
		while (isNaN(nombreIngresado) == false) {
			nombreIngresado = prompt("Error, ingrese el nombre del animal");
		}
		razaIngresada = prompt("Ingrese la raza del animal");
		while (isNaN(razaIngresada) == false) {
			razaIngresada = prompt("Error, ingrese la raza del animal");
		}
		pesoIngresado = prompt("Ingrese el peso del animal");
		pesoIngresado = parseInt(pesoIngresado);
		while (isNaN(pesoIngresado) == true || pesoIngresado > 150 || pesoIngresado < 1) {
			pesoIngresado = prompt("Error, ingrese el peso del animal");
			pesoIngresado = parseInt(pesoIngresado);
		}
		estadoClinicoIngresado = prompt("Ingrese el estado clinico del animal", "enfermo, internado, adopcion");
		while (isNaN(estadoClinicoIngresado) == false || estadoClinicoIngresado != "enfermo" && estadoClinicoIngresado != "internado" && estadoClinicoIngresado != "adopcion") {
			estadoClinicoIngresado = prompt("Error, ingrese el estado clinico del animal", "enfermo, internado, adopcion");
		}
		tempCorporalIngresada = prompt("Ingrese la temperatura del animal");
		tempCorporalIngresada = parseInt(tempCorporalIngresada);
		while (isNaN(tempCorporalIngresada) == true || tempCorporalIngresada > 100 || tempCorporalIngresada < 1) {
			tempCorporalIngresada = prompt("Ingrese la temperatura del animal");
			tempCorporalIngresada = parseInt(tempCorporalIngresada);
		}
		validacion = prompt("Desea ingresar otra mascota?", "si/no");

	}
	switch (mascotaIngresada) {
		case "gato":
			break;
		case "perro":
			if (pesoIngresado>pesoPerroPesado){
				
			}
				break;
		case "otra cosa":
			break;
	}

	//a)El perro mas pesado
	//b)El porcentaje de enfermos sobre el total de mascotas
	//c)El nombre de la ultima mascota de tipo "otra cosa"
	//d)El animal sin pelo con menor temperatura corporal
	//e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
	//f)Sumando gatos y perros que porcentaje del total de mascotas son?
	//g)Que estado clinico tiene la menor cantidad de mascotas       
	//H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
	//i)El nombre y raza del gato sin pelos mas liviano


}//FIN DE LA FUNCIÓN