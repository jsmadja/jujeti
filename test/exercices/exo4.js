// Ecrire une fonction qui compte le nombre d’occurrences d’un caractère dans un tableau,
// c’est à dire le nombre de fois où un élément apparaît dans un tableau de caractères.
// Le caractère recherché et le tableau seront les deux paramètres de l'algorithme. Exemples :
// Caractère ---- tableau ---- résultat
// 'z' ---- {'a', 'b', 'c'} ---- 0
// 'a' ---- {'a', 'b', 'c'} ---- 1
// 'b ---- {'a','b','c','b','d','b','a','d'} ---- 3

const table = ['a', 'b', 'a', 'c', 'a', 'd', 'b', 'c', 'c', 'a'];

const nbOccurrences = (tab, character) => {
  return tab.filter(t => t === character).length;
}

console.log(nbOccurrences(table, 'a'));
console.log(`----- Il y a ${nbOccurrences(table, 'a')} 'a' dans le tableau -----`)
