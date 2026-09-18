const prompt = require('prompt-sync')();
let n = parseInt(prompt("entrer un nombre entier"));
let x = 2;
let i = 0;
while (i < n)
{
    console.log(`${x}`);
    x += 2;
    i++;
}

