function counter(array: string[], char: string) {
  return array.filter((c) => c === char).length;
}

test(`Écrire une fonction qui compte le nombre d’occurrences d’un
caractère dans un tableau, c’est à dire le nombre de fois où un élément
apparaît dans un tableau de caractères. Le caractère recherché et le tableau
seront les deux paramètres de l'algorithme. Exemples :
Caractère ---- tableau ---- résultat
'z' ---- {'a', 'b', 'c'} ---- 0
'a' ---- {'a', 'b', 'c'} ---- 1
'b ---- {'a','b','c','b','d','b','a','d'} ---- 3`, () => {
  expect(counter('abc'.split(''), 'z')).toBe(0);
  expect(counter('abc'.split(''), 'a')).toBe(1);
  expect(counter('abcbdbad'.split(''), 'b')).toBe(3);
});
