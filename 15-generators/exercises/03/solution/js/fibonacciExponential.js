/* 3. Van egy előre megírt fibonacci generátor függvényed:

    function *fibonacci() {
        let a = 1;
        let b = 1;
        while( true ) {
            [a, b] = [b, a+b];
            yield b;
        }
    }
A feladatod, hogy írj egy olyan generátor függvényt, ami a fibonacci generátor által
visszaadott értékekből visszaadja a kapott érték négyzetét! */

function* fibonacci() {
  let a = 1;
  yield a;
  let b = 1;
  yield b;
  while (true) {
    [a, b] = [b, a + b];
    yield b;
  }
}

const fibonacciIterator = fibonacci();

const fibonacciExponential = () => {
  const { value } = fibonacciIterator.next();
  return value * value;
};

export default fibonacciExponential;
