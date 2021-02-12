/* Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/
function mostrar()
{
	let destino;
	let mensaje;

	destino=document.getElementById('txtIdDestino').value;

	switch(destino)
	{
		case "Mar del plata":
		case "Cataratas":
			mensaje= "Calor";
		break;
		case "Bariloche":
		case "Ushuaia":
			mensaje= "Frio";
		break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN