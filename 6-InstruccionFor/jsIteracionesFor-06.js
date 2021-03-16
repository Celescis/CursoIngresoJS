/*
al presionar el botón pedir un número. 
mostrar los numeros pares desde el 1 al número ingresado, 
y mostrar la cantidad de numeros pares encontrados.
*/
function mostrar()
{
	let i;
	let numero;
	let numeroPar;

	numeroPar=0;

	numero=prompt("Ingrese un numero");
	numero=parseInt(numero);

	for(i=0;i<numero;i=i+2){
		numeroPar++;
		console.log("Numeros pares: "+numeroPar);
	}

	/*saber si son pares
	numeroPar como contador entonces =0 lo inicializo
	if(i%2==0){
		numeropar++;
	}
	
}//FIN DE LA FUNCIÓN