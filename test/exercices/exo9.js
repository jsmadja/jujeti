// ----------------- ÉNONCÉ -----------------

// Créez un Algorithme qui va factoriser le nombre qu'on
// lui passe en argument.
// Pour rappel lorsqu'on factorise 5 :
// 5! = 1 * 2 * 3 * 4 * 5 = 120.
// C'est le produit de tous les entiers qui précèdent ou qui sont
// égaux à N, ici 5.

// ----------------- CONSEILS -----------------

// La boucle "for" est ton amie.

const factorielle = (nb) => {
  let result = 1;
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= nb; i++) {
    result *= i;
  }
  return result;
};
// eslint-disable-next-line no-console
console.log(factorielle(5));
