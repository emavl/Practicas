let a = 10,
  b = 20,
  c = 12,
  d = "hola",
  e = "Emaaa!",
  x = a + b;

const saludo = d + e;
console.log(saludo);

//  Utilizando algo de css
console.log("%c Mis variables:", "color:red; font-weight:bold");

// una forma de mostrar es:
console.log(a);
console.log(b);
console.log(c);

//   otra forma de hacerlo es:
console.log(".log", a);
console.info(".info", b);
console.warn(".warn", c);
console.error("error", x);

//   otra forma de hacerlo sin tanto texo es enmarcando
console.log({ a });
console.log({ b });
console.log({ c });
//  las llaves demarcan que es un objeto.

//  En formato tabla.
console.table({ a, b, c, d, e });
