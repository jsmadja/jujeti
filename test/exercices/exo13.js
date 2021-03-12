const axios = require('axios');

async function getDepartmentByOddCode() {
  try {
    const data = await axios.get('https://geo.api.gouv.fr/departements');
    return data.data.filter((d) => d.code % 2 !== 0);
  } catch (error) {
    console.log(error);
  }
}
getDepartmentByOddCode()
  .then((r) => console.log(`Les départements dont le code est impairs sont :`, r.map((dep) => `\n${dep.code} : ${dep.nom}`).join('')));
