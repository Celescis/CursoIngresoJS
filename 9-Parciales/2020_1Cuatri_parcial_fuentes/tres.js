/*
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
A)El nombre de la persona con mas temperatura.
B)Cuantos mayores de edad estan viudos
C)La cantidad de hombres que hay solteros  o viudos.
D)cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
E)El promedio de edad entre los hombres solteros.
*/
function mostrar() {

    let respuesta;
    let nombre;
    let edad;
    let sexo;
    let estadoCivil;
    let tempCorporalIngresada;
    let mayorTempIngresada;
    let nomMasTemp;
    let flagtemperatura;
    let contadorMayores;
    let contadorMViudo;
    let contadorMSoltero;
    let promedioSolteros;
    let edadMSolteros;
    let mayoresConTemp;

    // mayorTempIngresada = 0;
    flagtemperatura = 0;
    mayoresViudos = 0;
    contadorMayores = 0;
    contadorMViudo = 0;
    contadorMSoltero = 0;
    edadMSolteros = 0;
    mayoresConTemp = 0;


    respuesta = "si";
    //WHILE DE INGRESO DE DATOS
    while (respuesta == "si") {
        nombre = prompt("Ingrese su nombre");
        while (isNaN(nombre) == false) {
            nombre = prompt("Error, ingrese su nombre");
        }

        edad = prompt("Ingrese su edad");
        edad = parseInt(edad);
        while (isNaN(edad) == true || edad < 1 || edad > 100) {
            edad = prompt("Error, ingrese su edad");
            edad = parseInt(edad);
        }

        sexo = prompt("Ingrese su sexo", "f o m");
        while (isNaN(sexo) == false || sexo != "f" && sexo != "m") {
            sexo = prompt("Error, ingrese su sexo", "f o m");
        }

        estadoCivil = prompt("Ingrese su Estado Civil", "soltero, casado o viudo");
        while (isNaN(estadoCivil) == false || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
            estadoCivil = prompt("Error, ingrese su Estado Civil", "soltero, casado o viudo");
        }

        tempCorporalIngresada = prompt("Ingrese la temperatura");
        tempCorporalIngresada = parseInt(tempCorporalIngresada);
        while (isNaN(tempCorporalIngresada) == true || tempCorporalIngresada < 0 || tempCorporalIngresada > 100) {
            tempCorporalIngresada = prompt("Error, ingrese la temperatura");
            tempCorporalIngresada = parseInt(tempCorporalIngresada);
        }

        //FIN DE WHILE DE DATOS 
        //A) El nombre de la persona con mas temperatura.
        if (flagtemperatura == 0) {
            mayorTempIngresada = tempCorporalIngresada;
            nomMasTemp = nombre;
            flagtemperatura = 1;
        }
        else {
            if (tempCorporalIngresada > mayorTempIngresada) {
                mayorTempIngresada = tempCorporalIngresada;
                nomMasTemp = nombre;
            }
        }

        //B) Cuantos mayores de edad estan viudos
        //C) La cantidad de hombres que hay solteros  o viudos.

        switch (estadoCivil) {
            case "viudo":
                if (edad > 17) {
                    contadorMayores++;
                }
                else {
                    if (sexo == "m") {
                        contadorMViudo++;
                    }
                }
                break;
            case "soltero":
                if (sexo == "m") {
                    contadorMSoltero++;
                    edadMSolteros = edadMSolteros + edad; //ACUMULADOR EDADES
                }
                break;
        }
        //D) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
        if (edad > 59 && tempCorporalIngresada > 37) {
            mayoresConTemp++;
        }
        //E)El promedio de edad entre los hombres solteros. EDAD/CANTIDAD DE PERSONAS
        if (contadorMSoltero > 0) {
            promedioSolteros = edadMSolteros / contadorMSoltero;
            promedioSolteros = parseFloat(promedioSolteros);
        }

        respuesta = prompt("Desea ingresar otro pasajero?");
    }
    alert("El nombre de mas temperatura: " + nomMasTemp);//A
    alert("Cantidad de adultos viudos: " + contadorMayores);//B
    alert("La cantidad de hombres viudos es: " + contadorMViudo + " y la cantidad de hombres solteros es: " + contadorMSoltero);//C
    alert("Promedio de edad de hombres solteros: " + promedioSolteros);//E CON SHIFT ALT Y FLECHA COPIO PARA ABAJO
    alert("Promedio de edad de hombres solteros: " + mayoresConTemp);//D 



}



