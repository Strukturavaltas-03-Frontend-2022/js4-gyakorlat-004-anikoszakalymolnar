/* 2. Írj egy generátor függvényt , ami a 2 hatványait adja vissza! Az első érték a 2 legyen! */

function* powersOfTwo() {
  let power = 1;
  while (true) {
    yield power *= 2;
  }
}

export default powersOfTwo;
