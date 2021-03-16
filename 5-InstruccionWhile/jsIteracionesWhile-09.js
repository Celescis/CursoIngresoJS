/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables

	let maximo;
	let minimo;
	let numero;
	let respuesta;

	respuesta="si";

	do{
		numero=prompt("Ingrese un numero");
	}while(respuesta=="si"||respuesta=="Si");



	document.getElementById('txtIdMaximo').value=maximo;
	document.getElementById('txtIdMinimo').value=minimo;








	var banderaDelPrimero;
	
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=="si")
	{
		
		respuesta=prompt("desea continuar?");
	}
	
}//FIN DE LA FUNCIÓN