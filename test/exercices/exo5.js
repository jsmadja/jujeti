// Pour ce premier exercice, il est demandé de déclarer et définir trois variables numériques.
//
// Si elles sont égales, écrire : « Les trois variables sont identiques. »
// Si seulement deux sont identiques, écrire : « deux des variables sont de valeurs égales. »
// Sinon, écrire : « Les trois variables sont différentes. »

const nb1 = 2;
const nb2 = 3;
const nb3 = 1;

const verifierNombre = (x,y,z) => {
  if(x !== y && x !== z && y !== z){
    console.log('Les trois variables sont différentes');
  } else if(x === y && x === z && y === z){
    console.log('Les trois variables sont identiques');
  } else if( x === y || x === z || y === z){
    console.log('deux des variables sont de valeurs égales');
  }
}

verifierNombre(nb1,nb2,nb3);
