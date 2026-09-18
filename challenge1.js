const prompt = require('prompt-sync')();
let n = parseInt(prompt("Enterz le nombre pour la table de multiplaction :"));
console.log(`Table de multiplication de ${n} :`);
for (let i = 1; i <= 10; i++)
{
    let resultat = n * i;
    console.log(`${n} * ${i} = ${resultat}`);
}