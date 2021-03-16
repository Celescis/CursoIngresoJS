/*
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  hasta que el
usuario quiera e informar al terminar el ingreso por document.write:
a)La cantidad de temperaturas pares.
b)El nombre del pais con menos habitantes
c)la cantidad de paises que superan los 40 grados.
d)el promedio de habitantes entre los paises ingresados				
e)la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
*/
function mostrar() {
    //VALIDACION
    let validacion;
    let paisIngresado;
    let cantidadHabIngresado;
    let tempMinIngresado;
    let contadorVuelta;
    //A
    let contadorTempPar;
    //B
    let flagPaisMenosHab;
    let nomPaisMenosHab;
    let cantMinHab;
    //C
    let cantPaisMas40;
    //D
    let acumHabPaises;
    let promHabPaises;
    //E
    let flagTemMin;
    let nomTempMin;
    let tempMinima;


    validacion = "si";
    contadorVuelta = 0;
    contadorTempPar = 0;
    flagPaisMenosHab = 0;
    acumHabPaises = 0;
    cantPaisMas40 = 0;
    flagTemMin = 0;


    while (validacion == "si") {
        contadorVuelta++;
        //PAIS
        paisIngresado = prompt("Ingrese el nombre del pais");
        while (isNaN(paisIngresado) == false) {
            paisIngresado = prompt("Error, ingrese el nombre del pais");
        }
        //HABITANTES
        cantidadHabIngresado = prompt("Ingrese la cantidad de habitantes del pais", "entre 1 y 7000 millones");
        cantidadHabIngresado = parseInt(cantidadHabIngresado);
        while (isNaN(cantidadHabIngresado) == true || cantidadHabIngresado < 1 || cantidadHabIngresado > 7000) {
            cantidadHabIngresado = prompt("Error, ingrese la cantidad de habitantes del pais", "entre 1 y 7000 millones");
            cantidadHabIngresado = parseInt(cantidadHabIngresado);
        }
        //TEMPERATURA
        tempMinIngresado = prompt("Ingrese la temperatura minima registrada", "entre -50°C y 50°C");
        tempMinIngresado = parseInt(tempMinIngresado);
        while (isNaN(tempMinIngresado) == true || tempMinIngresado < -50 || tempMinIngresado > 50) {
            tempMinIngresado = prompt("Error, ingrese la temperatura minima registrada", "entre -50°C y 50°C");
            tempMinIngresado = parseInt(tempMinIngresado);
        }
        validacion = prompt("Desea ingresar otro pais?", "si o no");

        //a)La cantidad de temperaturas pares.
        if (tempMinIngresado % 2 == 0) {
            contadorTempPar++;
        }
        //b)El nombre del pais con menos habitantes
        if (flagPaisMenosHab == 0) {
            nomPaisMenosHab = paisIngresado;
            cantMinHab = cantidadHabIngresado;
            flagPaisMenosHab = 1;
        } else {
            if (cantMinHab > cantidadHabIngresado) {
                nomPaisMenosHab = paisIngresado;
                cantMinHab = cantidadHabIngresado;
            }
        }
        //c)la cantidad de paises que superan los 40 grados.
        if (tempMinIngresado > 40) {
            cantPaisMas40++;
        }
        //e)la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
        if (flagTemMin == 0) {
            tempMinima = tempMinIngresado;
            nomTempMin = paisIngresado;
            flagTemMin = 1;
        } else {
            if (tempMinima > tempMinIngresado) {
                tempMinima = tempMinIngresado;
                nomTempMin = paisIngresado;
            }
        }

        acumHabPaises = acumHabPaises + cantidadHabIngresado;
        acumHabPaises = parseInt(acumHabPaises);
    }//FIN WHILE

    //d)el promedio de habitantes entre los paises ingresados
    promHabPaises = acumHabPaises / contadorVuelta;
    promHabPaises = parseFloat(promHabPaises);


    //A
    document.write("Cantidad de temperaturas pares: " + contadorTempPar + "<br>")
    //B
    document.write("Nombre del pais con menos habitantes: " + nomPaisMenosHab + "<br>")
    //C
    document.write("Cantidad de paises con más de 40°: " + cantPaisMas40 + "<br>")
    //D
    document.write("Promedio de habitantes entre los paises ingresados: " + promHabPaises + "<br>")
    //E
    document.write("Pais con la menor temperatura registrada: " + nomTempMin + "<br>")











}
