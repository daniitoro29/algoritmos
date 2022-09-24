/* Una frutería vende manzanas a $4500 el kilo, realice un algoritmo que permita
saber al vendedor cuanto debe pagar un cliente, teniendo en cuenta que la 
frutería tiene la siguiente tabla de descuentos:
Número de Kilos % De descuento
 0 - 2                0%
 3 - 5                10%
 6 - 10               15%
 10 - Más             20%  */

function totalPagar() {
    let kilos = 0;
    let descuento = 0;
    let valorKilo = 4500;
    let totalAPagar = 0;
    let totalAPagarConDescuento = 0;

    kilos = parseInt(prompt("Por favor ingrese cuantos kilos de manzana va a comprar"));

    if (kilos <= 2) {
        totalAPagar = kilos * valorKilo;
        return alert('Usted compro ' + kilos + ' por un valor de $' + totalAPagar + ' con un descuento de $' + descuento + ' el total a pagar es de $' + totalAPagar);
    } else if (kilos <= 5) {
        totalAPagar = (kilos * valorKilo);
        descuento = totalAPagar * 0.1;
        totalAPagarConDescuento = totalAPagar - descuento;
    } else if (kilos <= 10) {
        totalAPagar = (kilos * valorKilo);
        descuento = totalAPagar * 0.15;
        totalAPagarConDescuento = totalAPagar - descuento;
    } else {
        totalAPagar = (kilos * valorKilo);
        descuento = totalAPagar * 0.2;
        totalAPagarConDescuento = totalAPagar - descuento;
    }
    return alert('Usted compro ' + kilos + ' por un valor de $' + totalAPagar + ' con un descuento de $' + descuento + ' el total a pagar es de $' + totalAPagarConDescuento);
}

function suma() {
    let a = 0;
    let b = 0;
    let suma = 0;

    a = parseInt(prompt("Por favor ingrese el primer valor a sumar"));
    b = parseInt(prompt("Por favor ingrese el segundo valor a sumar"));

    suma = a + b;

    alert("El resultado de la suma es " + suma)
}

// Hallar la suma, resta, división y multiplicación de dos números

function operacionesBasicas() {
    let a = 0;
    let b = 0;

    a = parseInt(prompt("Por favor ingrese el primer valor a sumar"));
    b = parseInt(prompt("Por favor ingrese el segundo valor a sumar"));

    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;

    alert("El resultado de la suma es " + suma);
    alert("El resultado de la resta es " + resta);
    alert("El resultado de la multiplicación es " + multiplicacion);
    alert("El resultado de la división es " + division);
}

// Hallar el número mayor

function numeroMayor() {
    let numero1 = 0;
    let numero2 = 0;

    numero1 = parseInt(prompt("Por favor ingrese el primer valor a comparar"));
    numero2 = parseInt(prompt("Por favor ingrese el segundo valor a comparar"));

    if (numero1 === numero2) {
        alert("Los valores ingresados son iguales");
    }
    if (numero1 > numero2) {
        alert("El numero " + numero1 + " es mayor que " + numero2);
    } else {
        alert("El numero " + numero1 + " es menor que " + numero2);
    }
}
// Hallar el cuadrado de un número

function cuadrado() {
    let numero = 0;
    let cuadrado = 0;

    numero = parseInt(prompt("Por favor ingrese el valor"));
    cuadrado = numero*numero;
    alert("El número  " + numero + " elevado al cuadrado es " + cuadrado);
}

// Hallar el área de un triángulo

function area(){
    let base = 0;
    let altura = 0;
    let area = 0;

    base = parseInt(prompt("Por favor ingrese la base del triángulo"));
    altura = parseInt(prompt("Por favor ingrese la altura del triangulo"));

    area = (base*altura)/2;

    alert("El área del triángulo es " + area);
}

// Determinar los centímetros y metros de un valor dado en pulgadas

function inchM() {
    let pulgadas = 0;
    let centimetros = 0;
    let metros = 0;

    pulgadas = parseInt(prompt("Por favor ingrese las pulgadas a convertir"));
    centimetros = pulgadas * 2.54;
    metros = centimetros/100;

    alert(pulgadas + " pulgadas, equivale a  " + centimetros + " centímetros y " + metros + " metros");
}

/* Un individuo desea invertir un capital en un banco y desea saber cuanto dinero ganará, después de un número n de años, 
teniendo en cuenta que el banco pagará un interés del 1.7% mensual */