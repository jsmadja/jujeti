// Écrire une fonction qui permet de connaître le minimum d'un tableau d'entiers.
// La fonction prend en entrée un tableau d'entiers et renvoie un élément du tableau

// trouver le plus petit du tableau
const tableau = [24, 7, 3, 19, 43, 1];

const quiEstLePlusPetit = (tab) =>
  // eslint-disable-next-line prefer-spread,implicit-arrow-linebreak
  Math.min.apply(Math, tab);
// eslint-disable-next-line no-console
console.log(
  `Le plus petit nombre du tableau est : ${quiEstLePlusPetit(tableau)}`,
);

/// /////////////////////////////////
// trouver le nombre le plus grand
const tableau4 = [54, 7, 10, 43, 77, 456, 20, 34];

// eslint-disable-next-line prefer-spread
const quiEstLePlusGrand = (tab) => Math.max.apply(Math, tab);
// eslint-disable-next-line no-console
console.log(
  `Le plus grand nombre du tableau est : ${quiEstLePlusGrand(tableau4)}`,
);

/// ////////////////////////////
// trier par ordre croissant //
const tableau2 = [21, 45, 10, 2, 54, 8, 32, 5];

const parOrdreCroissant = (tab) => tab.map((nb) => nb).sort((a, b) => a - b);
// eslint-disable-next-line no-console
console.log(`Par ordre croissant : ${parOrdreCroissant(tableau2)}`);

/// //////////////////////////////
// trier par ordre décroissant //
const tableau3 = [4, 6, 2, 54, 9, 21, 18, 7, 40];

const parOrdreDecroissant = (tab) => tab.map((nb) => nb).sort((a, b) => b - a);
// eslint-disable-next-line no-console
console.log(`Par ordre décroissant : ${parOrdreDecroissant(tableau3)}`);

/// ////////////////////////////////////////
// le plus petit avec reduce()
const tableau6 = [24, 7, 3, 19, 43, 11, 21, 2, 10];

const testXEtY = (x, y) => {
  if (x < y) {
    return x;
  }
  return y;
};

const min = (tab) => tab.reduce(testXEtY, tab[0]);
// eslint-disable-next-line no-console
console.log(`Le plus petit nombre du tableau est : ${min(tableau6)}`);

// le corrigé
function findMinIntFromArray(array) {
  return array.reduce((curr, acc) => Math.min(curr, acc));
}
// eslint-disable-next-line no-console
console.log(findMinIntFromArray(tableau6));
