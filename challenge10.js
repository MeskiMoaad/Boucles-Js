const prompt = require('prompt-sync')();
let base = Number(prompt("entrez la base :"));
let exposant = Number(prompt("entrez l'exposant :"));

let resultat = 1;
let i = 0;

while (i < exposant) {
    resultat *= base;
	i++;
}

console.log("resultat : " , resultat);

