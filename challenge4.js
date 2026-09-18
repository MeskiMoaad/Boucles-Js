const	prompt = require('prompt-sync')();
let n = parseInt(prompt("entrer le nombre entier"));
let x = 1;
let i = 1;

while (i <= n)
{
console.log(`${x}`);
x += 2;
i++;
}
