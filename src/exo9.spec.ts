const mot1 = 'zelda';

const veriferFinDeMot = (mot: string, fin: string) => {
  const finDuMot = mot.slice(-fin.length);
  if (finDuMot === fin) {
    return 'La fin est similaire';
  }
  return 'La fin ne correspond pas';
};

test(`Créez un Algorithme qui vous informe si les lettres(second arguments),
correspondent à la fin du mot(premier argument).
Si elles correspondent, retournez "La fin est similaire"
Sinon "La fin ne correspond pas".`, () => {
  expect(veriferFinDeMot(mot1, 'da')).toBe('La fin est similaire');
  expect(veriferFinDeMot(mot1, 'er')).toBe('La fin ne correspond pas');
});
