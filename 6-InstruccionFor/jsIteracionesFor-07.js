/*
al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado, 
y mostrar la cantidad de numeros divisores encontrados.
*/
function mostrar()
{
	let i;
	let numero;
	let numDivisor;

	numDivisor=0;

	numero=prompt("Ingrese un numero");
	numero=parseInt(numero);

	for(i=1;i<numero;i++){

		if(numero%i==0)
		{
			console.log("Divisores: "+i);
			numDivisor++;
	    }
	}
	console.log("La cantidad de divisores es: "+numDivisor);

}//FIN DE LA FUNCIÓN