/*una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento */
function mostrar() 
{
	let estacion;
	let destino;
	let tarifabase=15000;
	let descuento;
	let aumento;
	let tarifafinal;
	let mensaje;
	
	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;
	tarifabase = parseInt(tarifabase);

	switch(estacion)
	{
		case "Invierno":
			if(destino=="Bariloche")
			{
				aumento=20;
				tarifafinal=tarifabase+(tarifabase*(aumento/100));
			}
			else if(destino=="Mar del plata")
			{
				descuento=20;
				tarifafinal=tarifabase-(tarifabase*(descuento/100));
			}
			else
			{
				descuento=10;
				tarifafinal=tarifabase-(tarifabase*(descuento/100));
			}
		break;

		case "Verano":
			if(destino=="Bariloche")
			{
				descuento=20;
				tarifafinal=tarifabase-(tarifabase*(descuento/100));
			}
			else if(destino=="Mar del plata")
			{
				aumento=20;
				tarifafinal=tarifabase+(tarifabase*(aumento/100));
			}
			else
			{
				aumento=10;
				tarifafinal=tarifabase+(tarifabase*(aumento/100));
			}
		break;

		default:
			if(destino=="Bariloche")
			{
				aumento=10;
				tarifafinal=tarifabase+(tarifabase*(aumento/100));
			}
			else if(destino=="Cordoba")
			{
				tarifafinal=tarifabase;
			}
			else
			{
				aumento=10;
				tarifafinal=tarifabase+(tarifabase*(aumento/100));
			}
		break;
	}
	
	tarifafinal = parseFloat(tarifafinal);
	mensaje = "La tarifa a pagar es de: $" + tarifafinal;
	alert(mensaje);
	
	
	/*
	PODRIA CREAR UNAS VARIABLES PARA SOLO HACER UNA VEZ EL CALCULO DE AUMENTO Y DESCUENTO Y AL FINAL HACER UN IF
	QUE DEFINA QUE VALOR VA, EN VEZ DE HACER UN CALCULO ENTRE CADA IF.
	
	let estacion;
	let destino;
	let tarifabase=15000;
	let descuento;
	let tarifadescuento;
	let aumento;
	let tarifaaumento;
	let tarifafinal;
	let mensaje;

	estacion = document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;
	tarifabase = parseInt(tarifabase);

	switch(estacion)
	{
		case "Invierno":
			if(destino=="Bariloche")
			{
				aumento=20;
			}
			else if(destino=="Mar del plata")
			{
				descuento=20;
			}
			else
			{
				descuento=10;
			}
		break;
	}
	
	tarifaaumento=tarifabase+(tarifabase*(aumento/100));
	tarifadescuento=tarifabase-(tarifabase*(descuento/100));
	if(aumento)
	{
		tarifafinal= tarifaaumento;
	}
	else if (descuento)
	{
		tarifafinal= tarifadescuento;
	}

	tarifafinal = parseFloat(tarifafinal);
	mensaje = "La tarifa a pagar es de: $" + tarifafinal;
	alert(mensaje);*/


	/*if (estacion == "Invierno") 
	{
		switch (destino) 
		{
			case "Bariloche":
				aumento = 20;
				tarifas = tarifabase + ((tarifabase * aumento) / 100);
			break;

			case "Cataratas":
			case "Cordoba":
				descuento = 10;
				tarifas = tarifabase -((tarifabase * descuento) / 100);
			break;

			case "Mar del plata":
				descuento = 20;
				tarifas = tarifabase - ((tarifabase * descuento) / 100);
			break;
		}
		if (estacion == "Verano") 
		{
			switch (destino) 
			{
				case "Bariloche":
					descuento=20;
					tarifas = tarifabase - ((tarifabase * descuento) / 100);
				break;

				case "Cataratas":
				case "Cordoba":
					aumento = 10;
					tarifas = tarifabase + ((tarifabase * aumento) / 100);
				break;

				case "Mar del plata":
					aumento = 20;
					tarifas = tarifabase + ((tarifabase * aumento) / 100);
				break;
			}
		}
	}
	else 
	{
		switch (destino) 
		{
			case "Cordoba":
				tarifas = tarifabase;
			break;
			
			default:
				aumento = 10;
				tarifas = tarifabase + ((tarifabase * aumento) / 100);
			break;
		}
	}
*/
	
} //FIN DE LA FUNCIÓN