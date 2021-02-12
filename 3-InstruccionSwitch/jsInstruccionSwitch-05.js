/*
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
CELESTE CISTERNAS*/
function mostrar()
{
	let hora;
	let mensaje;

	hora = document.getElementById('txtIdHora').value;
	hora = parseInt(hora);

	switch(hora)
	{
		case hora=7:
		case hora=8:
		case hora=9:
		case hora=10:
		case hora=11:
		mensaje = "Es de mañana.";
		break;
		default:
		mensaje="No es la mañana";
		break;

	}
	alert(mensaje);


}//FIN DE LA FUNCIÓN