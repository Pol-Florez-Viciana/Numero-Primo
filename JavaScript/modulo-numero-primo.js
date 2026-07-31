// ***********************************************************************************************************
// ***********************************************************************************************************
// Modulo de números primos según Pol
// ***********************************************************************************************************
// ***********************************************************************************************************
// ******************************************************************************* 04/10/2025 a 09/11/2025 ***
// ***********************************************************************************************************

const Cero = 0;
const Uno = 1;
const Dos = 2;
const Tres = 3;
const Cuatro = 4;
const Cinco = 5;
const Seis = 6;
const Siete = 7;
const Nueve = 9;
const Once = 11;
const Mil = 1000;

function ContarNumeros(){
	let NMinimo = parseFloat(document.getElementById("Texto2").value);
	let NMaximo = parseFloat(document.getElementById("Texto3").value);
	
	if(NMinimo % 2 == 0 || Number.isInteger(NMinimo) == false || NMinimo <= 0 ){
		document.getElementById("ResultadoCuenta").innerHTML = "El rango mínimo no puede ser 0 y a de ser un número natural e impar...";
		return; 
	}
	
	if(NMaximo <= 0 || Number.isInteger(NMaximo) == false || NMinimo > NMaximo){
		document.getElementById("ResultadoCuenta").innerHTML = "El rango máximo no puede ser 0 y a de ser un número natural mayor al rango mínimo...";
		return; 
	}
	
	let CuentadePrimos = 0;
	for (let n = NMinimo; n <= NMaximo; n += 2){
		if( n <= 5 ){
			if (EsPrimo(n) == 0){
				CuentadePrimos++;
			}
		}else{
			if( n % 3 != 0 || n % 5 != 0 ){
				if (EsPrimo(n) == 0){
					CuentadePrimos++;
				}
			}
		}	
	}
	
	document.getElementById("ResultadoCuenta").innerHTML = "Cuenta de Número de Primos Entre " + NMinimo + " y " + NMaximo + " es de " + CuentadePrimos;
}
function ComprobarMarcene(){
	var Numero = parseFloat(document.getElementById("Texto1").value);
	var Resultado = EsPrimo(Numero);
	var TextoDevuelto = "";
	if(Resultado == Cero){
		let SubResultado = EsPrimo(Math.pow(2,Numero) - 1);
		if(SubResultado == Cero){
			TextoDevuelto = "El Número " + Numero + " es Primo de Marcene.";
		}else{
			TextoDevuelto = "El Número " + Numero + " No es Primo de Marcene Pero es Primo.";
		}	
	}else{
		if (Resultado == Uno){
			TextoDevuelto = "El Número " + Numero + " No es Primo.";
		}else{
			TextoDevuelto = "El Número " + Numero + " No es Primo y es Divisible por " + Resultado;
		}
	}
	document.getElementById("Resultado").innerHTML = TextoDevuelto;
}
function ComprobarSegunPol(){
	var Numero = parseFloat(document.getElementById("Texto1").value);
	var Resultado = EsPrimo(Numero);
	var TextoDevuelto = "";
	if(Resultado == Cero){
		TextoDevuelto = "El Número " + Numero + " es Primo.";
	}else{
		if (Resultado == Uno){
			TextoDevuelto = "El Número " + Numero + " No es Primo.";
		}else{
			TextoDevuelto = "El Número " + Numero + " No es Primo y es Divisible por " + Resultado;
		}
	}
	document.getElementById("Resultado").innerHTML = TextoDevuelto;
}
function Comprobar(){
	var Numero = parseFloat(document.getElementById("Texto1").value);
	var Resultado = IsPrimeNumber(Numero);
	var TextoDevuelto = "";
	if(Resultado == Cero){
		TextoDevuelto = "El Número " + Numero + " es Primo.";
	}else{
		if (Resultado == Uno){
			TextoDevuelto = "El Número " + Numero + " No es Primo.";
		}else{
			TextoDevuelto = "El Número " + Numero + " No es Primo y es Divisible por " + Resultado;
		}
	}
	document.getElementById("Resultado").innerHTML = TextoDevuelto;
}

// Función de Ejemplo de Stack Overflow
// 191919191919313 es primo 
// La siguiente función devuelve un multiplo si no es número primo y 0 si es primo... 
function IsPrimeNumber(Numero){
	if (Numero <= Uno ) {return Uno;}
	if (Numero === Tres) { return Cero;}
	if (Numero % Dos === Cero  ){ return Dos; }
	if (Numero % Tres === Cero ){ return Tres; }
	const Limite = parseInt(Math.sqrt(Numero));
	for (let i = Cinco; i <= Limite; i += Seis) {
		if (Numero % i === Cero ){ return i; }
		if (Numero % (i + Dos) === Cero ){ return (i + Dos); }
	}
    return Cero;
}

// Función optimizada por Pol que comprueba un número para ver si es primo o no lo es
// 1919191919193149 es primo y este también 919191919193159 
// Mi función está pensada para descartar más rápidamente un no primo con los 3 primeros primos ( 3 5 y 7 ) antes de entrar en bucles 
// y al entrar en bucle descarta los casos de multiples de 5 y de 3 para no analizar-los 

// Función de Comprobación de Números Primos  
function EsPrimo(Numero){
	if (Numero < Cero){ Numero = Numero - Numero - Numero; } // Si es negativo, lo pasamos a positivo
	if (Number.isInteger(Numero) == true && Numero > Dos){
		// Si no es entero o mayor a 2 decimos que no es primo
		if ( Numero == Tres || Numero == Cinco || Numero == Siete ){ return Cero; } // Si es 3 5 o 7 decimos que es primo
		
		// Si es multiple de 2 3 5 o 7 decimos que es divisible de manera entera
		if ( Numero % Dos == Cero ){ return Dos; }
		if ( Numero % Tres == Cero ){ return Tres; }
		if ( Numero % Cinco == Cero ){ return Cinco; }
		if ( Numero % Siete == Cero ){ return Siete; }			
		
		// Este código reduce el tamaño del bucle pero afecta al resultado
		// var Largada = "" + Numero; // Creamos String Para Saber la Largada de dígitos
		// var Limite = 10;
		// if (Largada.length == 2 ){ Limite = 100; }
		// if (Largada.length == 3 ){ Limite = 100; }
		// if (Largada.length == 4 ){ Limite = 1000; }
		// if (Largada.length == 5 ){ Limite = 1000; }
		// if (Largada.length == 6 ){ Limite = 10000; }
		// if (Largada.length == 7 ){ Limite = 10000; }
		// if (Largada.length == 8 ){ Limite = 100000; }
		// if (Largada.length == 9 ){ Limite = 100000; }
		// if (Largada.length == 10 ){ Limite = 1000000; }
		// if (Largada.length == 11 ){ Limite = 1000000; }
		// if (Largada.length == 12 ){ Limite = 10000000; }
		// if (Largada.length == 13 ){ Limite = 10000000; }
		// if (Largada.length == 14 ){ Limite = 100000000; }
		// if (Largada.length == 15 ){ Limite = 100000000; }
		// if (Largada.length == 16 ){ Limite = 1000000000; }
		
		// Establecemos el limite del bucle
		let Limite = parseInt(Math.sqrt(Numero));
		
		// Llegados a este punto, entramos en bucle de impares para descartar no primos con posibles primos no comprobados
		// Y entramos en bucle recorriendo impares de 9 hacia el limite descartando los multiplos de 3 y 5 en su comprobación de no primo
		for ( x = Nueve; x <= Limite; x = x + Dos) {
			if ( x % Cinco != Cero && x % Tres != Cero ){	
				if (Numero % x == Cero) { return x; } // Si esto se cumple es que no es primo y devolvemos su multiple
			}	
		}
		// Llegados aquí es por que el número es primo
		return Cero;
	}
	// Llegados aquí es que el número no es primo
	return Uno;	
}
function Porunidaje(Cuantia,Tamano,Escala){
	return (Cuantia*Escala)/Tamano;
}
function Ir1(){
	document.getElementById("Pantalla1").style = "display: inline-block;";
	document.getElementById("Pantalla2").style = "display: none;";
	document.getElementById("Pantalla3").style = "display: none;";
}
function Ir2(){
	document.getElementById("Pantalla1").style = "display: none;";
	document.getElementById("Pantalla2").style = "display: inline-block;";
	document.getElementById("Pantalla3").style = "display: none;";
}
function Ir3(){
	document.getElementById("Pantalla1").style = "display: none;";
	document.getElementById("Pantalla2").style = "display: none;";
	document.getElementById("Pantalla3").style = "display: inline-block;";
}