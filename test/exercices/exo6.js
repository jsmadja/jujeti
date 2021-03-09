// ----------------- ÉNONCÉ -----------------

// Créer un algorithme qui sert à convertir des degrés Celsius
// en degrés Fahrenheit.
// Le résultat doit être de type nombre.
// Si on donne un autre type qu'un nombre en argument, vous
// devez retourner "Données en entrée non correctes."

// ----------------- CONSEILS -----------------

// le calcul pour convertir les degrés Celsius en Fahrenheit
// est : (degCel * (9/5) + 32);

const convertiseur = (degCelsius) => {
  const conversion = (degCelsius * (9/5) + 32);
  if(typeof degCelsius === 'number'){
    return conversion;
  } else {
    return 'Données en entrée non correctes.';
  }
}

console.log(convertiseur(1));
