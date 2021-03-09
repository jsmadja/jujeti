// Ecrire une fonction qui prend en entrée un nombre, et qui ensuite écrit la table de multiplication de ce nombre,
// présentée comme suit (cas où l'utilisateur entre le nombre 7) :

const tableMultiplication = (multiplicateur) => {
  let table = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= 10; i++) {
    table += `${multiplicateur} X ${i} = ${multiplicateur * i} \n`;
  }
  return table;
};
// eslint-disable-next-line no-console
console.log(tableMultiplication(7));

// table de multiplication sans boucle :

function toLine(n, index) {
  return `${n} x ${index} = ${n * index}`;
}

function range(number) {
  return [...Array(number).keys()];
}

function toLines(n) {
  return range(10)
    .map((i) => i + 1)
    .map((i) => toLine(n, i))
    .join('\n');
}
// eslint-disable-next-line no-console
console.log(toLines(2));

function multiplicationTable(n) {
  return `Table de ${n} :\n${toLines(n)}`;
}

multiplicationTable(7);
