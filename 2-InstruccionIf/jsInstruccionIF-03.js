function mostrar()
{
	let edad;

	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	if(edad>=18)
	{
		alert("Es mayor de edad");
	}
	else // SE PROVOCA UNA BIFURCACION EN EL CODIGO
	//if (!(edad>=18)) if(edad<=18)
	{
		alert("Es menor de edad");
	}
	document.getElementById('txtIdEdad').value=""

}