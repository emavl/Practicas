//  Desestructuracion o asignacion desestructurante referencias en ────► https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

//  una forma para desestructurar i/o extraer la informacion
const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  clave: "Ironman",
  rango: "Soldado",
};

const { edad, clave, nombre } = persona;

console.log(nombre);
console.log(clave);
console.log(edad);

const persona2 = {
  nombre: "Peter",
  apellido: "parker",
  edad: 17,
  clave: "Spaidy",
  rango: "teen",
};

const imprimoPersona = (usuario) => {
  const { edad, clave, nombre } = usuario;
  console.log(edad, clave, nombre);
};

imprimoPersona(persona2);

//  Pero !! es mas utilizado de esta forma
// tambien pudiendo agregar algun componente mas como el ' rango ' .

const persona3 = {
  nombre: "Bruse",
  apellido: "banner",
  edad: 47,
  clave: "hombre Verde",
  rango: "destructor",
};

const imprimoPersona2 = ({ nombre, edad, clave, poder = "Hulk smash" }) => {
  console.log(edad, clave, nombre, poder);
};

imprimoPersona2(persona3);

const estadoDeContexto = ({ nombre, edad, clave, poder = "Hulk smash" }) => {
  return {
    nombreClave: clave,
    anios: edad,
    poderes: {
      brazo: "golpe",
      pierna: "patada",
    },
  };
};

const {
  nombreClave,
  anios,
  poderes: { brazo, pierna },
} = estadoDeContexto(persona);

console.log(nombreClave, anios);
console.log(brazo, pierna);
