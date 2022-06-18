const media = [10, 6.5, 8, 7.5]
let soma = 0

/*for(let i = 0; i < media.length; i++){
    soma += media[i]
}*/
//ou
/*media.forEach( (nota) => {
    soma += nota
})*/
//ou
media.forEach(function(nota){
    soma += nota
})

console.log(soma / media.length)