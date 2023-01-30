const suma = 1 + 2;
const restar = 1 - 2;
const multiplicar = 2 * 3;
const division = 9 / 3;

console.log(suma, restar, multiplicar, division);

const modulo = 10 % 3;
console.log(modulo);

let num = 5;
num++;
num--;

num += 5;
num -= 5;
num *= 5;
num /= 2;
console.log(num);

// operadores de comparacion

// igualdad estricta
const resultado1 = 5 === "5";
// igualdad no estricta, strings puedes ser iguales si el valor es el mismo numero
const resultado2 = 5 == "5";

const resultado3 = 5 < 6;
const resultado4 = 5 < 5;
const resultado5 = 5 > 6;
const resultado6 = 5 > 4;
const resultado7 = 5 <= 5;
const resultado8 = 5 <= 6;
const resultado9 = 5 >= 5;
const resultado10 = 5 >= 6;

const resultado11 = 5 !== "5";
const resultado12 = 5 != "5";

console.log(resultado3, resultado4);

// or ||, and &&, not !

const resultadoOr = false || true;
console.log(resultadoOr);

const resultadoAnd = true && true;
console.log(resultadoAnd);

const resultadoNot = !true;
console.log(resultadoNot);
