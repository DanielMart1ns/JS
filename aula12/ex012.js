var hora_atual = new Date().getHours() 

console.log(`Agora são exatamente ${hora_atual}h`)

if (hora_atual < 6){
    console.log('Boa Madrugada')
} 
else if(hora_atual < 12){
    console.log('Bom dia')
} 
else if (hora_atual < 18){
    console.log('Boa Tarde')
}
else if (hora_atual <= 23){
    console.log('Boa noite')
}