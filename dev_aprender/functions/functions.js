// A função faz parte d abase de todo software, ela controla o fluxo toda a entrada e saida de dados precisa de uma funcao
//nomer a funcao precisa de um verbo + um substantivo
/* Exemmplo: 
function transformaObjeto(){

};
function alterarTamanho(){

}; */

let corSite = "azul";

function resetaCor(cor, tonalidade){ //o parametro "cor" dentro de parentese, será passada para a variavel "corSite" quando a função for chamada
    corSite = cor + ' ' + tonalidade; // essa é a forma recomendada para add espaço
};
console.log(corSite);
//Para chamar uma função, basta digita-la, colocar parentese e ponto e virgula
resetaCor("vermelho", "escuro");
console.log(corSite);

//Exercicio

let fonteSite = "arial" + " regular";

function mudaFonte(fonte, peso){
    fonteSite = fonte + ' ' + peso;
};
console.log(fonteSite);
mudaFonte("Roboto", "lighter");
console.log(fonteSite);