// A r r e g l o s  referencias ────► https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// exite esta forma, pero no suele utilizarse
const arreglo = new Array(100);
arreglo.push(1);
//  el push no lo utilizaremos por que modifica el objeto principal, nosotros utilizaremos el operador spread que es el de los 3 puntos.

const arreglo2 = [1, 2, 3, 4];

// normalmente utilizamos esta
const arreglo3 = [...arreglo2, 5];

//  funcion ──► que se ejecuta dentro de un metodo lo llamamos callback.
const arreglo4 = arreglo2.map(function (numero) {
  return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
console.log(arreglo4);

let aVarios = [
  true,
  false,
  "Emanuel",
  1 + 5,
  ["X", "Megaman", "Zero", "Dr. light", ["ema", "maty", "tito"]],
];

console.log({ aVarios });
console.log(aVarios[4][4][2]);
console.log("Largo:", aVarios.length);

let juegos = ["Zelda", "Mario", "Metroid", "Megaman"];

juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
  //console.table({ elemento, indice, arr });
});

let a = "ingreso otro juego",
  b = "inserto al principio",
  c = "borro el ultimo";

//  para ingresar, otro dato al array.
let otroJuego = [...juegos, "hulk"];
console.log({ a, otroJuego, juegos });

// Para insertar un dato al principio del array.
otroJuego = juegos.unshift("Fire blade");
console.log({ b, otroJuego, juegos });

// hora par borrar el ultimo insertdo.
// le asigno lo que borro a la variable y lo muestro.
let juegoBorrado = juegos.pop();
console.log({ c, juegoBorrado, juegos });

let juegoBorrados = juegos.splice( 1, 2);