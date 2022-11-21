let nome = "Tullio";
let idade = 23;
let estaAprovado = true;
let sobrenome = undefined;
let corSelecionado = null;

/*JS é uma linguagem dinamica, então é preciso se atentar em cada variavel pois o typeof pode mostrar resultados diferentes a depender da forma que você a declarou*
Por exemplo: a variavel "estaAprovado" é um boolean (true/false) e se você usar o typeof vai mostrar que de fato, é um boolean. Porém caso você atribua o numero 25 a variavel, o typeof vai constar que se trata de um number */
let pessoa = {
  nome: "Tullio",
  idade: 23,
  estaAprovado: true,
  sobrenome: "Silva",
  altura: 1.71,
  caracteristica: "cabeludo",
  olhos: "verdes",
};
/* O comando acima é um objeto. Objeto basicamente são varias variaves agrupadas em um só "lugar" */

console.log(pessoa);
