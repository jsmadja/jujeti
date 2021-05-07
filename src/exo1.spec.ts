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
const sortByReleaseDate = gamesList.slice().sort((a, b) => {
  if (a.releaseYear < b.releaseYear) {
    return -1;
  }
  if (a.releaseYear > b.releaseYear) {
    return 1;
  }
  return 0;
});

test('Ecrire un fonction qui classe les jeux par date de sortie', () => {
  expect(
    `Les jeux classés par date de sortie :\n${sortByReleaseDate
      .map((game, index) => `${index + 1} : ${game.name} sur ${game.platform} sortie en ${game.releaseYear}`)
      .join('\n')}`,
  ).toBe(`Les jeux classés par date de sortie :
1 : Mario Bros sur Nintendo Entertainment sortie en 1985
2 : Sonic The Hedgehog sur Megadrive sortie en 1991
3 : The Legend of Zelda: Link's Awakening sur Game Boy sortie en 1993
4 : The Legend of Zelda : Breath of the Wild sur Nintendo Switch sortie en 2017`);
});
