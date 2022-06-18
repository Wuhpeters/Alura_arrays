/*const pasos = [1550, 8760, 4000, 3200]
const nomes = ["joao","jose","maria","carlos"]

const eliminados = nomes.filter( (_, indice) => pasos[indice] < 3500)

console.log(eliminados)*/

let questoes = 90
const alunos = ["Laura","Augusta","Carlos","luiza"]
const acertos = [38, 59, 42, 71]
let porcentagem;

const aprovados = alunos.filter( (percent, index) =>(acertos[index]*100)/questoes > 60)

console.log(aprovados)