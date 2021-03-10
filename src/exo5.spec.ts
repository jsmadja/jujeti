const verifierNombre = (x: number, y: number, z: number) => {
  if (x !== y && x !== z && y !== z) {
    return 'Les trois variables sont différentes';
  }
  if (x === y && x === z && y === z) {
    return 'Les trois variables sont identiques';
  }
  return 'deux des variables sont de valeurs égales';
};

test(`Pour ce premier exercice, il est demandé de déclarer et définir trois variables numériques.
Si elles sont égales, écrire : « Les trois variables sont identiques.
Si seulement deux sont identiques, écrire : « deux des variables sont de valeurs égales.
Sinon, écrire : « Les trois variables sont différentes.`, () => {
  expect(verifierNombre(2, 3, 1)).toBe('Les trois variables sont différentes');
  expect(verifierNombre(2, 2, 2)).toBe('Les trois variables sont identiques');
  expect(verifierNombre(2, 2, 1)).toBe('deux des variables sont de valeurs égales');
});
