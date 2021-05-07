const phrase1 = 'Bonjour à tous';

const inverserPhrase = (phrase: string) => phrase.split('').reverse().join('');

test(`Créez un Algorithme qui va retourner une phrase.
par exemple : "Bonjour à tous" donnera "suot à ruojnoB"`, () => {
  expect(inverserPhrase(phrase1)).toBe('suot à ruojnoB');
});
