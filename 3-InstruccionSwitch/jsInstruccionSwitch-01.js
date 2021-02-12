/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/
function mostrar()
{
	//tomo el mes
	let mes;
	let mensaje;

	mes=document.getElementById('txtIdMes').value;

	if(mes=="Enero")
	{
		mensaje="Que comiences bien el año!";
	}
	else
	{
		if(mes=="Marzo")
		{
			mensaje="A clases!!";
		}
		if(mes=="Julio")
		{
			mensaje="Se vienen las vacaciones!!";
		}
		if(mes=="Diciembre")
		{
			mensaje="Felices fiestas";
		}
	}
	alert(mensaje);
	
	
	
/* switch(condicion)
   {
	   case (algo):
	   break;
	   case(algo):
	   break;
   }



}//FIN DE LA FUNCIÓN