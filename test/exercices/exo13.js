const axios = require('axios');

async function getDepartmentByOddCode() {
  try {
    const data = await axios.get('https://geo.api.gouv.fr/departements');
    return data.data.filter((d) => d.code % 2 !== 0);
  } catch (error) {
    return error;
  }
}
// eslint-disable-next-line no-console
getDepartmentByOddCode().then(
  (r) =>
    // eslint-disable-next-line no-console,implicit-arrow-linebreak
    console.log(
      'Les départements dont le code est impairs sont :',
      r.map((dep) => `\n${dep.code} : ${dep.nom}`).join(''),
    ),
  // eslint-disable-next-line
);
