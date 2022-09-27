const persona = {
  nombre: "peter",
  apellido: "parker",
  direccion: {
    ciudad: "new york",
    CodigoP: 553253,
  },
};

// opcion 1 para visualizarlo

console.log(persona);
console.log({ persona });
console.log(persona.apellido, persona.nombre);
// opcion 2 en modo de tabla

// para hacer una asignacion clonada utilizaremos siempre los 3 puntos.

const persona2 = { ...persona };
persona2.nombre = "Tony";

console.log(persona);
console.log(persona2);
