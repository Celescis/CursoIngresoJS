/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % 
y si es de otra marca el descuento es del 20%.
D.Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.Si el importe final con descuento suma más de $120  se debe sumar un 10% de 
ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

//CELESTE CISTERNAS 
function CalcularPrecio() {
    let cantidadLamparas;
    let precioBruto;
    let marca;
    let porcentaje;
    let descuento;
    let iibb;
    let precioConIibb;
    let precioFinal;

    cantidadLamparas = document.getElementById('txtIdCantidad').value;
    cantidadLamparas = parseInt(cantidadLamparas);

    marca = document.getElementById('Marca').value;

    precioBruto = cantidadLamparas * 35;
    precioBruto = parseFloat(precioBruto);
    console.info("El precio bruto es: ", precioBruto); //PARA AVISARME CUANDO DA EN LA CONSOLA
    //SWITCH CANTIDAD E IF MARCA
    switch (cantidadLamparas) //primero reviso el rango de la cantidad para analizar en cual empezar, de 6 en adelante va al final porque uso default.
    {
        case 1:
        case 2:
            porcentaje = 0; //35 y 70 check
            break;
        case 3:
            if (marca == "ArgentinaLuz") {
                porcentaje = 15; //89,25
            }
            else if (marca == "FelipeLamparas") {
                porcentaje = 10;
            }
            else {
                porcentaje = 5;
            }
            break;
        case 4:
            if (marca == "ArgentinaLuz" && marca == "FelipeLamparas") {
                porcentaje = 25; //89,25
            }
            else {
                porcentaje = 20;
            }
            break;
        case 5:
            if (marca == "ArgentinaLuz") {
                porcentaje = 40;//105
            }
            else {
                porcentaje = 30;//122,5
            }
            break;
        default:
            porcentaje = 50;//105
            break;
    }

    /*   switch (cantidadLamparas) //primero reviso el rango de la cantidad para analizar en cual empezar, de 6 en adelante va al final porque uso default.
       {
           case 1: 
           case 2:
               porcentaje = 0; //35 y 70 check
           break;
           case 3:
               switch (marca) {
                   case "ArgentinaLuz":
                       porcentaje = 15; //89,25
                       break;
                   case "FelipeLamparas":
                       porcentaje = 10;
                       break;
                   default:
                       porcentaje = 5;
                       break;
               }
           break;
           case 4:
               switch (marca) {
                   case "ArgentinaLuz":
                   case "FelipeLamparas":
                       porcentaje = 25;
                       break;
                   default:
                       porcentaje = 20;
                       break;
               }
           break;
           case 5:
               switch (marca) {
                   case "ArgentinaLuz":
                       porcentaje = 40;//105
                       break;
                   default:
                       porcentaje = 30;//122,5
                       break;
               }
           break;
           default:
               porcentaje = 50;//105
           break;
       }
   */
    /* 
       //           EJERCICIO RESUELTO CON IF
   
       if (cantidadLamparas > 5) //de 6 en adelante
       {
           porcentaje = 50; //105
       }
       else {
           if (cantidadLamparas == 5 && marca == "ArgentinaLuz") {
               porcentaje = 40; //105
           }
           else if (marca != "ArgentinaLuz") {
               porcentaje = 30;//122,5 con iibb 134.75 check
           }
           if (cantidadLamparas == 4) {
               if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {
                   porcentaje = 25;//105
               }
               else {
                   porcentaje = 20;//112
               }
           }
           if (cantidadLamparas == 3) {
               if (marca == "ArgentinaLuz") {
                   porcentaje = 15;//89,25
               }
               else if (marca == "FelipeLamparas") {
                   porcentaje = 10;//94,5
               }
               else {
                   porcentaje = 5;//99,75
               }
           }
       }
   */
    descuento = precioBruto * porcentaje / 100;
    descuento = parseFloat(descuento);

    precioFinal = precioBruto - descuento;
    precioFinal = parseFloat(precioFinal);

    if (precioFinal > 120) {
        iibb = 10;

        precioConIibb = precioFinal * (iibb / 100);
        precioConIibb = parseFloat(precioConIibb);

        alert("Usted pago $" + precioConIibb + " de IIBB.");
    }
    else {
        iibb = 0;
    }

    document.getElementById('txtIdprecioDescuento').value = precioFinal;

}

/*
ASIGNACION DE VARIABLE

VNUM= 2;

ACUMULACION DE VARIABLE

VNUM = VNUM + 4 (SUMA EL 2 Y EL 4)
*/