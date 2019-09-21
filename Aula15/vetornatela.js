let valores = [8,1,7,4,2,9]
valores.sort()
/*for (let pos=0; pos < valores.length ;pos++){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}

*/
console.log(`Outra forma de mostar um array na tela:`)

for(let pos in valores){
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
