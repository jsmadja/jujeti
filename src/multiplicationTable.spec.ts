function toLine(n: number, index: number) {
  return `${n} x ${index} = ${n * index}`;
}

function range(number: number) {
  return [...Array(number).keys()];
}

function toLines(n: number) {
  return range(10)
    .map((i) => i + 1)
    .map((i) => toLine(n, i))
    .join('\n');
}

function multiplicationTable(n: number) {
  return `Table de ${n} :\n${toLines(n)}`;
}

test(`Écrire une fonction qui prend en entrée un nombre, et qui ensuite 
écrit la table de multiplication de ce nombre, présentée comme suit (cas où
l'utilisateur entre le nombre 7) :
Table de 7 :
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
 …
7 x 10 = 70`, () => {
  expect(multiplicationTable(7)).toBe(`Table de 7 :
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70`);
});
