function descendingOrder(n: number) {
  return +n
    .toString()
    .split('')
    .map((nb) => +nb)
    .sort((a, b) => b - a)
    .join('');
}

test(`Ordre décroissant
Votre tâche consiste à créer une fonction qui peut prendre n'importe quel entier non négatif
comme argument et le renvoyer avec ses chiffres dans l'ordre décroissant. Essentiellement,
réorganisez les chiffres pour créer le nombre le plus élevé possible.
Exemples:
Entrée: 42145 Sortie:54421`, () => {
  expect(descendingOrder(6547189)).toBe(9876541);
});
