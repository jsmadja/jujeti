const convertiseur = (degCelsius: number): number | string => {
  const conversion = degCelsius * (9 / 5) + 32;
  if (degCelsius) {
    return conversion;
  }
  return 'Données en entrée non correctes.';
};

test(`Créer un algorithme qui sert à convertir des degrés Celsius
en degrés Fahrenheit.
Le résultat doit être de type nombre.
Si on donne un autre type qu'un nombre en argument, vous
devez retourner "Données en entrée non correctes."`, () => {
  expect(convertiseur(1)).toBe(33.8);
});

// voir gerer les erreurs js et lancer les erreurs
