function iterar(arg1) {
  for (let i = 0; i < arg1.length; i++) {
    console.log(arg1[i]);
  }
}

const numeros = [1, 2, "hola", 4, 5];
const nombres = [
  "Pedro",
  "Juan",
  "Felipe",
  "Chanchito feliz",
  "Chanchito triste",
];

// function suma(a, b) {
//   return a + b;
// }

// const resultado = suma(1, 2);
// const resultado2 = suma(5, 6);
// const resultado3 = suma(resultado, resultado2);
// console.log("resultado", resultado3);

function sumar(a, b, cb) {
  const r = a + b;
  cb(r);
}

function callback(result) {
  console.log("resultado", result);
}

callback(6);
// sumar(2, 3, callback);

// fat arrow functions
const miFatArrowFunction = (a, b) => a + b;
const otraFAF = (a, b) => {
  return a + b;
};
const r = otraFAF(1, 2);
console.log(r);
sumar(2, 3, function (r) {
  console.log("Soy una funcion anonima y mi resultado es ", r);
});
