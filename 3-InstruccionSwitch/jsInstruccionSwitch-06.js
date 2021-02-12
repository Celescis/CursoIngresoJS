/* Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".*/

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
		case hora=12:
		case hora=13:
		case hora=14:
		case hora=15:
		case hora=16:
		case hora=17:
		case hora=18:
		case hora=19:	
			mensaje = "Es de tarde.";
		break;
		case hora=0:
		case hora=1:
		case hora=2:
		case hora=3:
		case hora=4:
		case hora=5:
		case hora=6:
		case hora=20:
		case hora=21:
		case hora=22:
		case hora=23:
		case hora=24:
			mensaje = "Es de noche.";
		break;
		default:
			mensaje= "la hora no existe";
		break;
	}
	alert(mensaje);


}//FIN DE LA FUNCIÓN