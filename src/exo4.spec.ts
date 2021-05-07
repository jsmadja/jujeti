const table = ['a', 'b', 'a', 'c', 'a', 'd', 'b', 'c', 'c', 'a'];

const nbOccurrences = (tab: string[], character: string) => tab.filter((t) => t === character).length;

test(`Ecrire une fonction qui compte le nombre d’occurrences d’un caractère dans un tableau,'
    'c’est à dire le nombre de fois où un élément apparaît dans un tableau de caractères.'
    "Le caractère recherché et le tableau seront les deux paramètres de l'algorithme. Exemples :
    'Caractère ---- tableau ---- résultat' +
    Il y a 4 'a' dans le tableau`, () => {
  expect(nbOccurrences(table, 'a')).toBe(4);
});
