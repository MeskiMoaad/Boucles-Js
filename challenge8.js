const prompt = require('prompt-sync')();
let n = Number(prompt("entrer le nombre n:"))
let result = 0;
let nb ;
while (n > 0)
{
    nb = n % 10;
    n = Math.floor(n / 10);
    result = result * 10 + nb;
}
console.log(result);