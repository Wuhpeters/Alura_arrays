const listaDeChamada = ["joao", "juliana", "ana", 
"caio", "lara", "marjorie"]
            //1° indice que sera removido
//listaDeChamada.splice(2,2,"rodrigo")//3° será adicionado
            //2° quantidade de elementos que será removida
//console.log(`lista de chamada ${listaDeChamada}`)

//para somente adicionar um valor em uma posição expecifica

listaDeChamada.splice(2,0,"jonson")
//será adicionado o nome jonson após o indice 2

console.log(`${listaDeChamada}`)