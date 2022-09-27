//  Desestructuracion de arreglos.

const personajes = ["goku", "vegueta", "trunks"];

// Mostramos el primer personae .
const [p1] = personajes;
// para elegir al 2do personaje evitando el primero
const [, p2] = personajes;
// para elegir al 3er personaje evitando el segundo
const [, , p3] = personajes;

console.log(p1);
console.log(p2);
console.log(p3);

//  para mostrar lo que esta dentro del arreglo.

// creamos una funcion que retorna dicho arreglo
const retornaArreglo = () => {
  return ["ABC", 123];
};

//  para extraerlos de forma independiente.
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//  Tarea
// 1. El primer valor del arr se llamará nombre.
// 2. se llamara setNombre

const estadoDeUso = (valor) => {
  return [
    valor,
    () => {
      console.log("hola soy");
    },
  ];
};

const [nombre, setNombre] = estadoDeUso(" goku ");

console.log(nombre);
setNombre();
