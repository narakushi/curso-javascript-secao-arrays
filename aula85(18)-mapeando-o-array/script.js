// // Dobre os numeros do array
// const numeros = [5, 50, 90, 1, 2, 3, 4, 5, 5, 8, 7, 11, 15, 22, 27];
// /*const numerosEmDobro = numeros.map(function(valor, indice, array) {
//   return console.log(valor, indice, array);
// })*/
// /*
// const numerosEmDobro = numeros.map(function (valor) {
//   return valor * 2;
// })*/

// const numerosEmDobro = numeros.map((valor) => valor * 2);

// console.log(numerosEmDobro);

/** exemplo com uso de objetos */

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
]
// Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map((pessoa) => pessoa.nome);
// console.log(nomes);

// Remova apenas a chave "nome" do objeto
// const idades = pessoas.map((pessoa) => {
//   const novaPessoa = {...pessoa};
//   delete novaPessoa.nome;
//   return novaPessoa
// })

// const idades = pessoas.map((pessoas) => ({idade: pessoas.idade}))
// console.log(idades);

// Adicione uma chave id em cada objeto

// const pessoaId = pessoas.map((pessoa) => {
//   const newPessoa = {id: Math.floor(Math.random() * 10),...pessoa}
//   return newPessoa;
// })

// com indice com id

const pessoaId = pessoas.map((pessoa, indice) => {
  const newPessoa = {id: indice, ...pessoa};
  return newPessoa;
})

console.log(pessoaId, pessoas);