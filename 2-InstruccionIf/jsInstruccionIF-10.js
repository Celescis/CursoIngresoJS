/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/
//Celeste Cisternas ejercicio 10

function mostrar()
{//1ro genero el numero random
	
	let nota;
	let mensaje;
	
	
	nota= Math.floor(Math.random() * 10) + 1;  // te da un numero del 1 al 10 random
	nota=parseInt(nota);
	
	//alert(+nota); para testear cual es el numero random

	if(nota>=9)
	{
		mensaje=" excelente";

		if(nota>4 && nota<9)
		{
			mensaje= " esta aprobado";
		}
		else
		{
			mensaje=" vamos, la proxima se puede";
		}
	}
	
	alert("Tu nota es " +nota+mensaje);

}//FIN DE LA FUNCIÓN
/*if(resultado<4){
		alert("Su nota es "+resultado+" Vamos, la proxima se puede");
	}
	if(resultado>4 && resultado<8){
		alert("Su nota es "+resultado+" Aprobo");
	}
	if(resultado>=9){
		alert("Su nota es "+resultado+" Excelente");
	}*/