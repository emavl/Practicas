//     ◄──────── F u n c i o n e s ─────────►
const nombre = " Emanuel ";
const nombre2 = " matias ";
const nombre3 = " Tito ";
const nombre4 = " Alejandro ";

//  una forma de hacerlo es:

function saludar(nombre) {
  return `hola, ${nombre}`;
}

//  otra forma de hacerlo es:

const saludar2 = function (nombre) {
  return `hola, ${nombre}`;
};

//  Otra forma de crearla es: ( Mas facil de leer y de mantener )

const saludar3 = (nombre) => `hola, ${nombre}`;
const saludar5 = () => `hola, ${nombre}`;

// otra forma de hacerlo es : funcion flecha

const saludar4 = (nombre) => {
  return `hola, ${nombre}`;
};

//  Esta funcion flecha devuelve el objeto. ──► utilizando return.

const getUser = () => {
  return {
    pass: "loco22",
    username: "El_pappi22",
  };
};

//  Esta funcion flecha devuelve el objeto. ──► pero 'NO' utiliza return.

const getUser2 = () => ({
  pass: "loco22",
  username: "El_pappi22",
});

// console.log( saludar(' ema '));

console.log(saludar(nombre));
console.log(saludar2(nombre2));
console.log(saludar3(nombre3));
console.log(getUser());
console.log(saludar4(nombre4));
console.log(saludar5(nombre3));
console.log(getUser2());

//  tarea
// 1. Transformar una funcion de flecha .
// 2. que retorne un objeto implisito.
// 3. probarlo.

// ej: de la funcion.

function getUsuarioActivo(nombre) {
  return {
    pass: "larozca12",
    username: nombre
  };
}

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);

//  tarea resuelta

const getUsuarioActivo2 = () => ({
  pass: "larozca12",
  username: nombre,
});

const usuarioActivo2 = getUsuarioActivo2("Fernando");
console.log(usuarioActivo2);
