// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui va retourner une phrase.
// par exemple : "Bonjour à tous" donnera "suot à ruojnoB"
// Bonne chance.

// ----------------- CONSEILS -----------------

// La fonction join(), permet de transformer un tableau en chaine de caractère.
// La fonction split(), permet de transformer une chaine de caractère en tableau.
// La fonction reverse(), permet de retourner les éléments d'un tableau.

const phrase1 = 'Bonjour à tous';

const inverserPhrase = (phrase) => phrase.split('').reverse().join('');
// eslint-disable-next-line no-console
console.log(inverserPhrase(phrase1));
