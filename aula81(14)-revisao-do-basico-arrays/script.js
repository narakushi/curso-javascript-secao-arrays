 //               0           1         2
// array literal
// const nomes = ['Eduardo', 'Maria', 'Joana'];
// Criar arrays através da Classe de Array funciona para
//  String, Objetos, Funções, Números

// array a partir de construtor
//const nomes = new Array('Eduardo', 'Maria', 'Joana');
//deletando um item e mantendo o indice.
//delete nomes[2];


//tudo que ocorrer em novo é refletido em nomes
// tudo o que ocorrer em nomes é refletido em novo
//const novo = nomes;

//trabalhando com spread operator (pega os dados de dentro do array e espalha em outra variavel)
//fazendo atribuição por valor
//const nomes = ['Eduardo', 'Maria', 'Joana'];
//const novo = [...nomes];
//novo.pop();

//console.log(nomes, novo);

//uso do pop() (remove no fim)
 //               0           1        2
//const nomes = ['Eduardo', 'Maria', 'Joana'];
//const removido = nomes.pop();
//console.log(nomes, removido);


// uso do shift (remove no começo)
///const nomes = ['Eduardo', 'Maria', 'Joana'];
//const removido = nomes.shift();
//console.log(nomes, removido);

// uso do push() adicionando item

//const nomes = ['Eduardo', 'Maria', 'Joana'];
//nomes.push('João');
//console.log(nomes);

// uso do unshift() - adicionando item ao começo do array

//const nomes = ['Eduardo', 'Maria', 'Joana'];
//nomes.unshift('João');
//console.log(nomes);

// fatiando um array com slice();
//const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
//const novo = nomes.slice(1, 3);
//console.log(novo);

// removendo itens do array com slice();

//const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
//const novo = nomes.slice(0, -1); //removendo do final
//const novo = nomes.slice(1, -1); //removendo do começo e do final
//console.log(novo);

// conventendo string em array

//const nome = 'Luiz Otávio Miranda';
//const nomes = nome.split(" ");
const nomes = ['Luis', 'Otávio', 'Miranda'];
const nome = nomes.join(' ');
console.log(nome);
