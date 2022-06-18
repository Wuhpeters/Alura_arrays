//tratando de arrays de modo separado

const alunos = ["joao", "juliana", "ana", "caio", "lara", "marjorie",
 "guilherme", "aline", "fabiano", "andre", "carlos"]

const media = [9.8, 5.6, 7.8, 7, 8, 9, 8.8, 6, 9.9, 5, 7.6]

const AeM = [alunos, media]

/*const procurando = (nome) => {

if(alunos.indexOf(nome) >= 0){
let ok = alunos.indexOf(nome)
return `A média referente ao aluno(a) ${nome} é: ${media[ok]}`
}else{
    return "Aluno não encontrado"
}
}

console.log(procurando("zeca"))*/

//tratando de arrays de duas dimensões

const id = (nome) => {

    if(AeM[0].includes(nome)){
        let indice = AeM[0].indexOf(nome)
        
        return `Aluno(a) ${AeM[0][indice]} tem media de ${AeM[1][indice]}`
    }else{
        return "Aluno não encontrado"
    }

}

console.log(id("ana"))