// control de flujo
const edad = 5;
if (edad > 5 && edad < 18) {
  console.log("el niño puede jugar");
} else {
  console.log("el niño no puede jugar");
}

let x = 0;
while (x < 5) {
  console.log(x);
  x++;
}

switch (1) {
  case 1: {
    console.log("Yo soy el caso 1");
    break;
  }
  case 2: {
    console.log("Yo soy chanchito feliz");
    break;
  }
  case 3:
    console.log("Yo soy chanchito triste :(");
    break;
  default:
    console.log("Ya no hay chanchito");
    break;
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const numeros = [1, 2, "hola", 4, 5];
console.log(numeros[0]);

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
