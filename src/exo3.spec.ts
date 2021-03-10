const tableMultiplication = (multiplicity: number) => {
  let table = `Table de ${multiplicity} :`;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i <= 10; i++) {
    table += `\n${multiplicity} X ${i} = ${multiplicity * i}`;
  }
  return table;
};

test('Ecrire une fonction qui prend en entrée un nombre, et qui ensuite '
  + 'écrit la table de multiplication de ce nombre', () => {
  expect(tableMultiplication(7)).toBe(`Table de 7 :
7 X 0 = 0
7 X 1 = 7
7 X 2 = 14
7 X 3 = 21
7 X 4 = 28
7 X 5 = 35
7 X 6 = 42
7 X 7 = 49
7 X 8 = 56
7 X 9 = 63
7 X 10 = 70`);
});
