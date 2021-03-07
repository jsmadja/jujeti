function findMinIntFromArray(array: number[]) {
  return array.reduce((curr, acc) => Math.min(curr, acc));
}

test(`Écrire une fonction qui permet de connaître le minimum d'un tableau
d'entiers. La fonction prend en entrée un tableau d'entiers et renvoie un élément
du tableau`, () => {
  expect(findMinIntFromArray([5, 6, 6, 3])).toBe(3);
  expect(findMinIntFromArray([1, 2, 3, 4])).toBe(1);
  expect(findMinIntFromArray([-1, -2, -3, -4])).toBe(-4);
});
