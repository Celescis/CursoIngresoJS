/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() 
{
	let numerouno;
	let numerodos;
	let resultado;
	/*numerouno = parseInt(document.getElementById("txtIdNumeroUno").value);//parseInt es para que busque los numeros enteros//
	numerodos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = numerouno + numerodos*/
	numerouno = document.getElementById("txtIdNumeroUno").value;//parseInt es para que busque los numeros enteros//
	numerodos = document.getElementById("txtIdNumeroDos").value;

	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);

	resultado = numerouno + numerodos;

	alert("La suma es: " + resultado);//podria poner una variable que se llame respuesta 
	/*respuesta="La suma es: "+resultado;
	y pongo un alert con esa variable
	alert(respuesta);*/

	/*STRING + STRING = STRING OSEA CONCATENA
	STRING + NUMBER = STRING
	NUMER + NUMBER = NUMBER
	
	Parsear es convertir un tipo de dato que no es numero, a un numero 
	castear es convertir un tipo de dato numero en otro numerico
	el parse FLOAT convierte un dato que no es numero en numero con decimales el INT en enteros
	*/

}

