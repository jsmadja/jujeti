const nb1 = 2;
const nb2 = 3;
const nb3 = 1;

// eslint-disable-next-line consistent-return
const verifierNombre = (x: number, y: number, z: number) => {
  if (x !== y && x !== z && y !== z) {
    return 'Les trois variables sont différentes';
  } if (x === y && x === z && y === z) {
    return 'Les trois variables sont identiques';
  } if (x === y || x === z || y === z) {
    return 'deux des variables sont de valeurs égales';
  }
};

test(`Pour ce premier exercice, il est demandé de déclarer et définir trois variables numériques.
Si elles sont égales, écrire : « Les trois variables sont identiques.
Si seulement deux sont identiques, écrire : « deux des variables sont de valeurs égales.
Sinon, écrire : « Les trois variables sont différentes.`, () => {
  expect(verifierNombre(nb1, nb2, nb3)).toBe('Les trois variables sont différentes');
});
