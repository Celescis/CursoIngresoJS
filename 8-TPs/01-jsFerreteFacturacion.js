/*1. Celeste Cisternas
TP 1	
Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let preciouno;
    let preciodos;
    let preciotres;
    let suma;
    
    preciouno=document.getElementById('txtIdPrecioUno').value;
    preciodos=document.getElementById('txtIdPrecioDos').value;
    preciotres=document.getElementById('txtIdPrecioTres').value;

    preciouno=parseFloat(preciouno);
    preciodos=parseFloat(preciodos);
    preciotres=parseFloat(preciotres);

    suma=preciouno+preciodos+preciotres;

    alert("La suma es: $"+suma);
}

/* num + num = operacion aritmetica
string + string = concatenacion
num + string = string operador de concatenacion
undefined= no defini la variable 
*/
function Promedio () 
{
    let preciouno;
    let preciodos;
    let preciotres;
    let suma;
    let promedio;
    
    preciouno=document.getElementById('txtIdPrecioUno').value;
    preciodos=document.getElementById('txtIdPrecioDos').value;
    preciotres=document.getElementById('txtIdPrecioTres').value;

    preciouno=parseFloat(preciouno);
    preciodos=parseFloat(preciodos);
    preciotres=parseFloat(preciotres);

    suma=preciouno+preciodos+preciotres;
    promedio= suma/3;

    promedio=promedio.toFixed(2); //asi nos  queda para siempre asignado el tofixed para promedio y no solo en el alert
    alert("El promedio es: $"+promedio.toFixed(2));//el toFixed achica los numeros
}
function PrecioFinal () 
{
	let preciouno;
    let preciodos;
    let preciotres;
    let suma;
    let preciofinal;
    const IVA=21 //LOS NOMBRES DE LAS CONSTANTES VAN EN MAYUSCULA
    
    preciouno=document.getElementById('txtIdPrecioUno').value;
    preciodos=document.getElementById('txtIdPrecioDos').value;
    preciotres=document.getElementById('txtIdPrecioTres').value;

    preciouno=parseFloat(preciouno);
    preciodos=parseFloat(preciodos);
    preciotres=parseFloat(preciotres);

    suma=preciouno+preciodos+preciotres;
    preciofinal= suma+suma*IVA/100 //si hacia el iva x 1.21 ya se me sumaba el iva y la suma

    preciofinal=preciofinal.toFixed(2);
    alert("El promedio es: $"+preciofinal);

    //console.log es un alert oculto que ayuda a debuggear y comprobar
}