const nombre = "ema";
const apellido = "vidal";

//una forma de mostrar

// const nombreCompleto = nombre + ' ' + apellido;

// console.log( nombreCompleto);

// par mostrarlo de otra forma

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo( nombre) {
  return " buenas como va " + nombre;
}

console.log( `Esto es un texto: ${ getSaludo(nombre)}` );
