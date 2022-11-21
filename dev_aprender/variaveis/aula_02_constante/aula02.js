/*Há a possibilidade de re-atribuir um novo valor a variavel seguindo o exemplo abaixo */
let valorIngressoAdulto = 20;
valorIngressoAdulto = 30;
console.log(valorIngressoAdulto);

/* Já com constante, você não consegue e não pode reatribuir o valor de uma variavel constante. O exemplo abaixo está errado. 
É uma boa pratica de programação usar o const caso não precise alterar o valor da variavel ao longo do programa, e o Let você usa quando for necessario alterar o valor da variavel 
*/
const precoIngressoAdulto = 20;
precoIngressoAdulto = 30;
console.log(precoIngressoAdulto);
