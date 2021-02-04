/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
/*function mostrar()
{	
	let nombre;
	let edad;
	
	nombre=document.getElementById('txtIdNombre').value;
	edad=document.getElementById('txtIdEdad').value; 
	alert("Usted se llama "+nombre+" "+" y tiene "+edad+" años");
}
/*
Celeste Cisternas
5 bis :
se debe optener de alguna manera el apellido y mostrar asi:
"Perez, Usted se llama José y tiene 66 años"

*/
function mostrar()
{
	let nombre;
	let edad;
	let apellido;

	nombre=document.getElementById('txtIdNombre').value;
	edad=document.getElementById('txtIdEdad').value; 
	apellido=prompt("Ingrese su apellido","Su apellido aqui");


	alert(apellido+", Usted se llama "+nombre+" y tiene "+edad+" años");

}