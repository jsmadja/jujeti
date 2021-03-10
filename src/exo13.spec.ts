// An isogram is a word that has no repeating letters,
// consecutive or non-consecutive. Implement a function
// that determines whether a string that contains only
// letters is an isogram. Assume the empty string is an
// isogram. Ignore letter case.

function isIsogram(str: string) {
  return str;
}

test(`Un isogramme est un mot sans lettres répétitives,
consécutif ou non consécutif. Implémenter une fonction
qui détermine si une chaîne contenant uniquement
lettres est un isogramme. Supposons que la chaîne vide est un
isogramme. Ignorez la casse des lettres.`, () => {
  expect(isIsogram('aba')).toBe('aba');
});
