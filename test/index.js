const nbAleatoire = Math.floor(Math.random() * 20);

if (nbAleatoire < 7) {
  // eslint-disable-next-line no-console
  console.log(`${nbAleatoire} : Petit`);
} else if (nbAleatoire < 15) {
  // eslint-disable-next-line no-console
  console.log(`${nbAleatoire} : Moyen`);
} else {
  // eslint-disable-next-line no-console
  console.log(`${nbAleatoire} : Grand`);
}
