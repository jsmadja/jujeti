function filterList(l: (number | string)[]) {
  return l.filter((item: string | number) => typeof item === 'number');
}

test(`Dans ce kata, vous allez créer une fonction qui prend une liste
 d'entiers et de chaînes non négatifs et renvoie une nouvelle liste avec les
  chaînes filtrées.`, () => {
  expect(filterList([1, 'e', 3, 6, 'l'])).toStrictEqual([1, 3, 6]);
});
