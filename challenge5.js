const prompt = require('prompt-sync')();
let base = parseInt(prompt("entrer la base :"));
let exponant = parseInt(prompt("entrer l'exponant :"));

let result = 1;
for (let i = 0; i < exponant; i++)
{
    result *= base;
}
console.log(`${result}`);