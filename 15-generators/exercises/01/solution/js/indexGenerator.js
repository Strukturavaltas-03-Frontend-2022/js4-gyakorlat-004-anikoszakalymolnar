/* 1. Írj egy generátor függvényt indexGenerator néven, amit egyedi indexek generálására használsz!
A index értéke kezdetben 1 legyen, és a next() mindig eggyel nagyobb értéket adjon vissza! */

function* indexGenerator() {
  let index = 1;
  while (true) {
    yield index++;
  }
}

export default indexGenerator;
