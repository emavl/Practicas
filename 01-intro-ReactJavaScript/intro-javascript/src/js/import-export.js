import { heroes } from "./data/heroes";

console.log(heroes);

const getHeroesById = (id) => {
  return heroes.find((heroes) => {
    if (heroes.id === id) {
      return true;
    } else {
      return false;
    }
  });
};

console.log(getHeroesById(2));

//  Otra forma de ver este codigo es:

