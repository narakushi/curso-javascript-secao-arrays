//Retorne a soma do dobro de todos os pares

// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 90, 1, 2, 3, 4, 5, 5, 8, 7, 11, 15, 12, 22, 27];

const pares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((ac, valor) => ac + valor);

//[
//   50, 90,  2, 4,
//    8, 12, 22
// ]

// [
//   100, 180, 4, 8,
//   16, 24, 44
// ]


console.log(pares);