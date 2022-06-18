const notas = [10, 9, 8, 7, 6]

const notasAtualizadas = notas.map( nota => nota == 10 ?
    nota : ++nota ) 
//operador ternario
//map recebe uma arrow function de uma linha só
//se nota == 10 entao ? nota senao : ++nota // soma antes
// map retorna o que está dentro do bloco

console.log(notasAtualizadas)