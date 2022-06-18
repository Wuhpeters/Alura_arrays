const nomes = ["joao", "juliana", "ana", "caio", "lara", "marjorie",
 "guilherme", "aline", "fabiana", "andre", "carlos","paulo", "bia",
 "vivian", "isabela", "vinicius", "renan", "renata", "daisy", 
 "camilo"]

 const sala1 = nomes.slice(0, nomes.length/2)//inicio até a metade
 const sala2 = nomes.slice(nomes.length/2)
 // quando não coloca valor final ele vai até o ultimo elemento

 console.log(`Alunos da sala 1: ${sala1}`)
 console.log(`Alunos da sala 2: ${sala2}`)
