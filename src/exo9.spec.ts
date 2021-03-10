const endsWith = (word: string, suffix: string) => {
  const endWord = word.slice(-suffix.length);
  return endWord === suffix;
};

test(`Créez un Algorithme qui vous informe si les lettres(second arguments),
correspondent à la fin du mot(premier argument).
Si elles correspondent, retournez "La fin est similaire"
Sinon "La fin ne correspond pas".`, () => {
  expect(endsWith('zelda', 'lda')).toBe(true);
  expect(endsWith('zelda', 'er')).toBe(false);
});
