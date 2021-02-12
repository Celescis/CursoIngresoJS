/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
//CELESTE CISTERNAS 
function CalcularPrecio() 
{
    let cantidadlamparas;
    let marca;
    let preciobruto = 35;
    let descuento;
    let preciodescuento;
    let preciofinal;

    cantidadlamparas = document.getElementById('txtIdCantidad').value;
    marca = document.getElementById('Marca').value;
    //preciofinal=document.getElementById('txtIdprecioDescuento').value;

    cantidadlamparas = parseInt(cantidadlamparas);
    preciobruto = parseFloat(preciobruto);
    //preciofinal=parseInt(preciofinal);

    if (cantidadlamparas > 5) 
    {
        descuento = 50;
    }
    else 
    {
        /*if(cantidadlamparas==5)
        {
            if(marca=="ArgentinaLuz")
            {
                descuento=40;
            }
            else
            {
                descuento=30;
            }
        }
        */
       if (cantidadlamparas == 5 && marca == "ArgentinaLuz")
        {
            descuento = 40;
        }
        else
        {
            descuento = 30;
        }
        if(cantidadlamparas==4)
        {
            if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
            {
                descuento = 25;
            }
            else
            {
                descuento = 20;
            }
        }
        if(cantidadlamparas==3 && marca=="ArgentinaLuz")
        {
            descuento = 15;
        
            if(marca=="FelipeLamparas")
            {
                descuento = 10;
            }
            else
            {
                descuento = 5;
            }
        }
    }
    
    preciodescuento= preciobruto-((preciobruto*descuento)/100);
    preciodescuento=parseFloat(preciodescuento);

    preciofinal= cantidadlamparas*preciodescuento; 
    preciofinal=parseFloat(preciofinal);

    document.getElementById('txtIdprecioDescuento').value=preciofinal;

}

/*
ASIGNACION DE VARIABLE

VNUM= 2;

ACUMULACION DE VARIABLE

VNUM = VNUM + 4 (SUMA EL 2 Y EL 4) 
*/