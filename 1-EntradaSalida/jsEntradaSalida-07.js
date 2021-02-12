/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numerouno;
	let numerodos;
	let resultado;

	numerouno = document.getElementById('txtIdNumeroUno').value;
	numerodos = document.getElementById('txtIdNumeroDos').value;

	numerouno=parseInt(numerouno); //antes de hacer la variable resultado que va a tener una accion matematica, pido que me convierta el dato a numero entero
	numerodos=parseInt(numerodos);

	resultado = numerouno+numerodos;
	
	alert(typeof resultado); //PARA SABER QUE TIPO DE STRING ES O SI ES NUMERO

	alert("La suma es "+resultado);	
}

function restar()
{
	let numerouno;
	let numerodos;
	let resultado;

	numerouno = document.getElementById('txtIdNumeroUno').value;
	numerodos = document.getElementById('txtIdNumeroDos').value;

	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);

	resultado = numerouno - numerodos;

	alert("La resta es "+resultado);	
	
}

function multiplicar()
{ 
	let numerouno;
	let numerodos;
	let resultado;

	numerouno = document.getElementById('txtIdNumeroUno').value;
	numerodos = document.getElementById('txtIdNumeroDos').value;

	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);

	resultado = numerouno * numerodos;

	alert("La multiplicación es "+resultado);	
}

function dividir()
{
	let numerouno;
	let numerodos;
	let resultado;

	numerouno = document.getElementById('txtIdNumeroUno').value;
	numerodos = document.getElementById('txtIdNumeroDos').value;

	numerouno=parseInt(numerouno);
	numerodos=parseInt(numerodos);

	resultado = numerouno / numerodos;

	alert("La dividisión es "+resultado);	
}

