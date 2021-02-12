/*2.	Para el departamento de Construcción:
A. mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let comprar;
    const CANTIDAD_ALAMBRE=3;

    largo=document.getElementById('txtIdLargo').value;
    ancho=document.getElementById('txtIdAncho').value;

    largo=parseFloat(largo);
    ancho=parseFloat(ancho);

    perimetro=(largo+ancho)*2;
    comprar=perimetro*CANTIDAD_ALAMBRE;
   
    alert("La cantidad necesaria a comprar es de "+comprar+" metros");
}
function Circulo () 
{
    let radio;
    let circunferencia;
    let pi;
    let comprar;
    const CANTIDAD_ALAMBRE=3;

    pi=3.14;

    radio=document.getElementById('txtIdRadio').value;

    circunferencia=2*radio*pi;
    circunferencia=circunferencia.toFixed(2);
    comprar=parseFloat(circunferencia);


    alert("La cantidad necesaria a comprar es de "+comprar+" metros");
}
function Materiales () 
{
    let largo;
    let ancho;
    let area;
    let cemento;
    let cal;
    
    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;
    
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    area= largo*ancho;

    cemento = area*2;
    cal = area*3;
    
    cemento = parseFloat(cemento);
    cal = parseFloat(cal);

    alert("Se necesita "+cemento+" bolsas de cemento y "+cal+" bolsas de cal");
    
    document.getElementById('txtIdLargo').value="";
    document.getElementById('txtIdAncho').value="";

}