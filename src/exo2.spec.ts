const tableau = [24, 7, 3, 19, 43, 1];

const quiEstLePlusPetit = (tab: number[]) => Math.min(...tab);

test('Trouver le plus petit chiffre du tableau', () => {
  expect(`Le plus petit nombre du tableau est : ${quiEstLePlusPetit(tableau)}`);
});
