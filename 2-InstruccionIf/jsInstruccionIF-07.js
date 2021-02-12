function mostrar()
{
	let edad;
	let estadoCivil;

	edad=document.getElementById('txtIdEdad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	edad=parseInt(edad);
	
	if(edad<18 && estadoCivil != "Soltero"){ // != para cuando es distinto y "Soltero" se escribe con S mayus porque asi lo marca el html

		alert("Es muy pequeño para no ser soltero")
		
	}

}//FIN DE LA FUNCIÓN