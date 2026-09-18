const prompt = require('prompt-sync')();
let n = parseInt(prompt("entrer un nombre entier :"));
let result = 0;
for(i = 1; i <= n; i++)
{
     result += i;
}
console.log(`le rsultat est ${result}`);