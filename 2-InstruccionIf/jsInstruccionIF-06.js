function mostrar()
{
	let edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad<13)
	{
		alert("Es un niño");
	}

	else
	{
		if(edad<18)
		{
			alert("Es adolescente");
		}
		else
		{
			if(edad>65)
			{
				alert("Es un adulto mayor");
			}
			else
			{
				alert("Es adulto"); //en vez de alert puedo poner una variable que sea mensaje="adolescentes"
			}
			
		}
	}
//y poner un alert final que sea "usted es: +mensaje"
}