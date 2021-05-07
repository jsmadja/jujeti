const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function fizzBuzz(list) {
  const tableau = [];
  for (let i = 0; i < list.length; i += 1) {
    if ((list[i] % 3 === 0) && (list[i] % 5 === 0)) {
      tableau.push('FizzBuzz');
    } else if (list[i] % 3 === 0) {
      tableau.push('Fizz');
    } else if (list[i] % 5 === 0) {
      tableau.push('Buzz');
    } else {
      tableau.push(list[i]);
    }
  }
  return tableau;
}

console.log(fizzBuzz(array1));
