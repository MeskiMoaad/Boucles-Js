const prompt = require('prompt-sync')();
let n = Number(prompt("entrer le nombre des lignes :"));
let i = 1;
let j;
while (i <= n)
{
let espaces = n - i;
let etoiles = i * 2 - 1;
j = 1;
while (j <= espaces)
{
    process.stdout.write(" ");
    j++;
}
j = 1;
while(j <= etoiles)
{
    process.stdout.write("*");
    j++;
}
console.log();
i++;
}
