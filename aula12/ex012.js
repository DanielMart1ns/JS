var hora_local = new Date()
var hora = hora_local.getHours()
console.log(`Agora são ${hora} horas`)

if (hora < 6 )
{
    console.log("Boa Madrugada")
}
else if (hora < 12)
{
    console.log("Bom Dia")
}
else if (hora < 18)
{
    console.log("Boa Tarde")
}
else
{
    console.log("Boa Noite")
}