/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento") 
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.	
a)El importe total a pagar , bruto sin descuento y...
b)el importe total a pagar con descuento(solo si corresponde)
c)Informar el tipo con mas cantidad de bolsas.		
d)El tipo mas caro
*/
function mostrar() {

  let tipoIngresado;
  let cantidadBolsas;
  let precioBolsas;
  let respuesta;
  let precioBruto;
  let descuento;
  let precioNeto;
  let totalAPagar;
  let acumularBolsas;
  let tipoMasBolsas;
  let acumMayorBolsas;
  let tipoMayorPrecio;
  let precioMayor;
  let cantArena;
  let cantCal;
  let cantCemento;

  acumularBolsas = 0;
  cantArena = 0;
  cantCal = 0;
  cantCemento = 0;
  precioMayor = 0;

  //INGRESAR MATERIALES TODAS LAS VECES QUE DESEE EL USUARIO, PREGUNTO AL FINAL SI DESEA SEGUIR.
  respuesta = "si";

  while (respuesta == "si") {

    tipoIngresado = prompt("Ingrese el tipo de material", "Arena, Cal o Cemento");
    while (isNaN(tipoIngresado) == false || tipoIngresado == "arena" && tipoIngresado == "cal" && tipoIngresado == "cemento") {
      tipoIngresado = prompt("Error, ingrese el tipo de material", "Arena, Cal o Cemento");
    }

    cantidadBolsas = prompt("Ingrese la cantidad de bolsas del material");
    cantidadBolsas = parseInt(cantidadBolsas);
    while (isNaN(cantidadBolsas) == true || cantidadBolsas < 1) {
      cantidadBolsas = prompt("Error, ingrese la cantidad de bolsas del material");
      cantidadBolsas = parseInt(cantidadBolsas);
    }

    precioBolsas = prompt("Ingrese el precio por bolsa");
    precioBolsas = parseInt(precioBolsas);
    while (isNaN(precioBolsas) == true) {
      precioBolsas = prompt("Error, ingrese el precio por bolsa");
      precioBolsas = parseInt(precioBolsas);
    }

    //INICIO SWITCH
    switch (tipoIngresado) {
      case "arena":
        cantArena = cantArena + cantidadBolsas;
        cantArena = parseInt(cantArena);
        break;
      case "cal":
        cantCal = cantCal + cantidadBolsas;
        cantCal = parseInt(cantCal);
        break;
      case "cemento":
        cantCemento = cantCemento + cantidadBolsas;
        cantCemento = parseInt(cantCemento);
        break;
    }
    if (cantArena > cantCal && cantArena > cantCemento) {
      acumMayorBolsas = cantArena;
      tipoMasBolsas = tipoIngresado;
    } else {
      if (cantCal > cantCemento) {
        acumMayorBolsas = cantCal;
        tipoMasBolsas = tipoIngresado;
      }
      else {
        acumMayorBolsas = cantCemento;
        tipoMasBolsas = tipoIngresado;
      }
    }
    acumularBolsas = acumularBolsas + cantidadBolsas;
    respuesta = prompt("Desea ingresar otro material?");
  }//FIN WHILE

  //INICIO IF DE DESCUENTOS
  precioBruto = cantidadBolsas * precioBolsas;
  precioBruto = parseFloat(precioBruto);

  if (cantidadBolsas > 10) {
    descuento = 15;

    precioNeto = precioBruto * descuento / 100;
    precioNeto = parseFloat(precioNeto);

    totalAPagar = precioBruto - precioNeto;
    totalAPagar = parseFloat(totalAPagar);
  }
  else if (cantidadBolsas > 30) {
    descuento = 25;

    precioNeto = precioBruto * descuento / 100;
    precioNeto = parseFloat(precioNeto);

    totalAPagar = precioBruto - precioNeto;
    totalAPagar = parseFloat(totalAPagar);
  }//FIN DE IF
  if (precioMayor < precioBolsas) {
    precioMayor = precioBolsas;
    tipoMayorPrecio = tipoIngresado;
  }

/*
  document.write("El importe total a pagar sin descuento es: $" + precioBruto + "<br>")
  document.write("El importe total a pagar con descuento es: $" + totalAPagar + "<br>")
  document.write("El tipo que mayor cantidad tiene es: " + tipoMasBolsas + "<br>")
*/

  // a)El importe total a pagar , bruto sin descuento y...
  alert("El importe total a pagar sin descuento es: $" + precioBruto);
  //b)el importe total a pagar con descuento(solo si corresponde)
  alert("El importe total a pagar con descuento es: $" + totalAPagar);
  //c)Informar el tipo con mas cantidad de bolsas.
  alert("El tipo que mayor cantidad tiene es: " + tipoMasBolsas);
  //d)El tipo mas caro
  alert("El tipo con mayor precio es: " + tipoMayorPrecio + " y el precio es " + precioMayor);




}
