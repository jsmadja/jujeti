// Classer les jeux par ordre de date de sortie et afficher les titres
const gamesList = [
  {
    name: 'Sonic The Hedgehog',
    platform: 'Megadrive',
    releaseYear: 1991,
  },
  {
    name: 'The Legend of Zelda : Breath of the Wild',
    platform: 'Nintendo Switch',
    releaseYear: 2017,
  },
  {
    name: 'Mario Bros',
    platform: 'Nintendo Entertainment',
    releaseYear: 1985,
  },
  {
    name: "The Legend of Zelda: Link's Awakening",
    platform: 'Game Boy',
    releaseYear: 1993,
  },
];
const classerParDateDeSortie = gamesList.slice().sort((a, b) => {
  if (a.releaseYear < b.releaseYear) {
    return -1;
  }
  if (a.releaseYear > b.releaseYear) {
    return 1;
  }
  return 0;
});
// eslint-disable-next-line no-console
console.log(classerParDateDeSortie);
// eslint-disable-next-line no-console
console.log(
  `Les jeux classés par date de sortie : \n ${classerParDateDeSortie
    .map(
      (game, index) => `${index + 1} : ${game.name} sur ${game.platform} sortie en ${
        game.releaseYear
      } \n`,
    )
    .join(' ')}`,
);
