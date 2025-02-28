// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)

// // Some todos os números (reduce)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11 ,15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor, indice, array){
//   acumulador += valor
//   return acumulador;
// }, 0);

// console.log(total);

// Retorne um array com os pares (filter)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11 ,15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor, indice, array){
//   if(valor % 2 === 0) acumulador.push(valor);
//   return acumulador;
// }, []);

// console.log(total);


// Retorne um array com o dobro dos valores (map)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11 ,15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor){
//   acumulador.push(valor*2);
//   return acumulador;
// }, []);

// console.log(total);


// retornando a soma dos valores pares
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11 ,15, 22, 27];
// const total = numeros.reduce(function(acumulador, valor){
//   if(valor % 2 === 0) acumulador += valor;
//   return acumulador;
// }, 0);

// console.log(total);


// Forma com arrow function

// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11 ,15, 22, 27];
// const total = numeros.reduce((acumulador, valor) => {
//   acumulador += valor;
//   return acumulador;
// }, 0);

// console.log(total);


//Retorne a pessoa mais velha
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 100 }
]

const maisVelha = pessoas.reduce((acumulador, valor) => {
  if(acumulador.idade > valor.idade) return acumulador;
  return valor; 
})

console.log(maisVelha);