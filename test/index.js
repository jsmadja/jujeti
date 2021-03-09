let nbAleatoire = Math.floor(Math.random() * 20);

if(nbAleatoire < 7){
    console.log(nbAleatoire + ' : Petit');
} else if(nbAleatoire < 15){
    console.log(nbAleatoire + ' : Moyen');
} else {
    console.log(nbAleatoire + ' : Grand');
}