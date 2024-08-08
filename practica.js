// Comentarios

console.log('Hola consola');

//alert('Hola desde un alert');
/*Aqui let y var se ocupan para lo mismo 
Dicen que let ya es el que se debe ocupar mejor por la sintaxis*/
let nombre="Itzel";
const pi=3.1416;
console.log(nombre);
console.log(pi);
nombre="Maria";
//pi=3.2426;
console.log(nombre);
console.log(pi);

//String nombre = "Juan";
//Tipos de datos
/*No definido*/
let noDefinido;
//Número 
let cantidad = 50;
console.log(cantidad);
//Cadena de texto o String
let bebida = "agua";
//Booleanos
let activo = true;

/*Objetos: Colección de propiedades
Persona: nombre,apellido, edad, peso*/

let persona = { nombre: 'Itzel',apellido:'Chávez',edad:'22'}
console.log(persona);

//ARRAYS COLECCIÓN
let personas = [
    {nombre: 'Maria',apellido:'Chavez',edad:22},
    {nombre: 'Fernando',apellido:'Zavala',edad:23},
    persona

]
console.log(personas);
console.log(personas[2]);

/*Bloques fundamentales para que una aplicacion pueda funcionar,bloque de instrucciones*/
//Forma larga
function suma() {
    return 2+2;
}
let resultado = suma()
console.log(resultado)

//Funcion sin parametros
function suma() {
    return 2+2;
}
console.log("La suma es",suma())

//Funcion con parametros
let a;
let b;
function suma1(a,b) {
    return a+b;
}
console.log("La suma es",suma1(10,2))

function multiplicacion(a,b){
     return a*b;
}
console.log("La multiplicación es",multiplicacion(3,9))

// Operadores aritmeticos
let datoA = 10;
let datoB = 5;

// suma
let suma2 = datoA + datoB;
// resta
let resta = datoA - datoB;
// multiplicación 
let multip = datoA * datoB;
// división
let div = datoA / datoB;
// Modulo o residuo
let residuo = datoA % datoB;
// incremento
let incremento = datoA;
incremento++;
// decremento 
let decremento = datoA;
decremento --;
// *******************************
// operadores relacionales
// mayor que >
let mayorQue = datoA > datoB;
// menor que <
let menorQue = datoB < datoB;
// mayor o igual >=
let menorIgual = datoB <= datoB;
// igual que == 
let igual = datoA == datoB;
// diferente de !=
let diferenteDe = datoA != datoB;
// *********************************
// Operadores lógicos
// y &&
let and = (datoA < 10 && datoB > 10);
// or ||
let or = (datoA > 10 || datoB > 10);
// not !
let not= !(datoA < 10);
// ////////////////////////////////////
// Operadores de asignacion
// Asignación simple =
let dato1 = 60;
// summar y asignar +=
let masigual = 10;
console.log(masigual += datoA);
// Menos igual -=
let menosIgual= 10;
console.log(menosIgual -= datoB);
// Por 
