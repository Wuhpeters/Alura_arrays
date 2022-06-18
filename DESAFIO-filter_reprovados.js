const alunos = ["Amanda","Ayla","William","Zoca"]
const medias = ["9","7","5","8"]

const reprovados = alunos.filter( (nome, indice) => medias[indice] < 6 )
            //filtra array alunos - só sera usado o indice
            //se media[indice] < 6 entao o o aluno no mesmo [indece] será
            //gravado em reprovados
            //OBS: como o parametro "nome" não será utilizado, pode-se 
            //utilizar ifem, para o VSC entender que não será utilizado

console.log(reprovados)