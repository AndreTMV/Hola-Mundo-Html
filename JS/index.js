//  Tipos de Datos en js
//  String: cadena de caracteres.
//  Boolean: true false
//  NUll: nulo
//  Number: 1323123123
//  Undefined: no se encuentra indefenida
//  Object: objeto

// Definicion de variables
// var: tiene hoisting
// let
// const

let miPrimeraVariable = "Mi primera variable";
console.log(miPrimeraVariable);

miPrimeraVariable = "esto ha cambiado";
console.log(miPrimeraVariable);

let miBoolean = true;
let miOtroBool = false;
let miNumero = 0;
let miNumero2 = 12;
let miNumero3 = -258;

// console.log(miNumero, miNumero2, miBoolean, miPrimeraVariable);

let undef;
console.log(undef);

let nulo = null;
console.log(nulo);

// Objeto vacio
const miPrimerObjeto = {};

// objeto agrupaciones de datos que hacen sentido entre si
const miObjeto = {
  unNumero: 12,
  unString: "Esta cadena de caracteres",
  unaCondicion: true,
};

console.log(miObjeto);

const arrVacio = [];
const arr = [1, 2, "hola", "mundo", miObjeto];

// console.log(arrVacio, arr);

arr.push(5);

console.log(arr);
