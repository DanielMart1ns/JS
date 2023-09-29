let exemplo = {nome: 'Daniel', sexo: 'M', peso:64, calcular(x=0){
    this.peso += x
}}

exemplo.calcular(3)

console.log(`${exemplo.nome} pesa ${exemplo.peso}Kg`)