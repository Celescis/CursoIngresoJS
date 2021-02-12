/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre; //las variables me permiten reservar espacio en memoria para guardar lo que se vaya a ingresar
	
	nombre=prompt("Ingrese su nombre");//prompt me permite guardar lo que escribe el usuario en la ventana prompt
	alert(nombre); //armo la variable, le asigno la funcion prompt y para que refleje el mensaje alert encadeno la variable
}
//cuando tengo una variable=document.get... es entrada por ID y cuando es al reves document.get..=variable es salida por ID
