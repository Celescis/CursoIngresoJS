/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/
function mostrar() {
	//tomo el mes
	let mes;
	let mensaje;

	mes = document.getElementById('txtIdMes').value;

	switch (mes) {
		case "Enero":
			mensaje = "Que comiences bien el año!";
			break;
		case "Marzo":
			mensaje = "A clases!!";
			break;
		case "Julio":
			mensaje = "Se vienen las vacaciones!!";
		case "Diciembre":
			mensaje = "Felices fiestas";
			break;
	}


	alert(mensaje);



	/* switch(condicion)
	   {
		   case (algo):
		   break;
		   case(algo):
		   break;
	   }
	*/


}//FIN DE LA FUNCIÓN