function mostrar()
{
	//PARA ANIDAR IF PONGO UNO ADENTRO DEL OTRO
	let edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	/* IF ANIDADOS
	if(edad>=13)
	{
		if(edad<=17)
		{
			alert("Es adolescente");
		}
	}
	*/
	if(edad >=13 && edad <= 17)
	{
		alert("Es adolescente");
	}

}