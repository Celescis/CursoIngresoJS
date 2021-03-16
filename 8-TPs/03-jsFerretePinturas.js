/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados
con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit
(ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
    let temperatura;
    let fahrenheitACentigrados;
    let mensaje;

    temperatura = document.getElementById('txtIdTemperatura').value;
    temperatura = parseFloat(temperatura);
    
    fahrenheitACentigrados = (temperatura - 32) / 1.8;
    fahrenheitACentigrados = parseFloat(fahrenheitACentigrados);

    mensaje = +temperatura + " Fahrenheit son " + fahrenheitACentigrados + " Centigrados";
    alert(mensaje);
}

function CentigradosFahrenheit() 
{
    let temperatura;
    let centigradosAFahrenheit;
    let mensaje;

    temperatura = document.getElementById('txtIdTemperatura').value;
    temperatura = parseFloat(temperatura);

    centigradosAFahrenheit = (temperatura * 1.8) + 32;
    centigradosAFahrenheit = parseFloat(centigradosAFahrenheit);

    mensaje = +temperatura + "  Centigrados son " + centigradosAFahrenheit + " Fahrenheit";
    alert(mensaje);
}
