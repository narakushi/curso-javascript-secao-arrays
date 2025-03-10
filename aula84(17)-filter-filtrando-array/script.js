// Filter, map, reduce
// Filter -> sempre ira retornar um array, com a mesma quantidade de elementos ou menos

// Retorne os números maiores que 10

const numeros = [5, 50, 90, 1, 2, 3, 4, 5, 5, 8, 7, 11, 15, 22, 27];
let newArray = [];
/*
for (let numero of numeros){
  if(numero > 10){
    newArray.push(numero);
  }
}

console.log(newArray);*/

/** retornando com filter */

function callbackFilter(valor /*indice, array*/) {
  /*if(valor > 10) {
    return true;
  }
  else {
    return false;
  }*/

  return valor > 10;
}

//const numerosFiltrados = numeros.filter(callbackFilter);
//função sintetizada
/*const numerosFiltrados = numeros.filter((valor, indice, array) => {
  console.log(valor, indice, array);
  return valor > 10;
});*/

const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

/** Segundo exemplo */

// Retorne as pessoas que tem nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 abos
// Retorne as pessoas cujo nome termina com "a";

const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Letícia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
];

const pessoasComNomeGrande = pessoas.filter(pessoa => pessoa.nome.length >= 5);
console.log('*********************');
console.log(pessoasComNomeGrande);

const pessoasComMais50 = pessoas.filter(pessoa => pessoa.idade > 50);
console.log('*********************');
console.log(pessoasComMais50);

/*const nomesTerminaComA = pessoas.filter(pessoa => pessoa.nome[pessoa.nome.length - 1].toLowerCase() === 'a' ? pessoa : '');*/
// ou
const nomesTerminaComA = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith('a'));
console.log("********************");
console.log(nomesTerminaComA);

