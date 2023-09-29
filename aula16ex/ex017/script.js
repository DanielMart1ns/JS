
var btn_add = document.querySelector('input#add')
var reset = document.querySelector('input#reset')
var btn_finalizar = document.querySelector('input#finalizar')

var dados_numericos = document.querySelector('p#texto')

var vetor = []

btn_add.addEventListener('click', adicionar)
btn_finalizar.addEventListener('click', finalizar)
reset.addEventListener('click', resetar)

function resetar(){
    seletor.innerHTML = ''
    dados_numericos.innerHTML = ''
    vetor = []
}

function adicionar(){
    var numero = document.querySelector('input#numero')
    numero = Number(numero.value)
    var seletor = document.querySelector('select#seletor')
    var option =  document.createElement('option')

    if (numero < 1 || numero > 100){
        alert('Verifique os dados e tente novamente')
    }

    else if (numero >= 1 && numero <= 100)
    {
        vetor.push(numero)
    
        option.text += `Número ${numero} adicionado`
        seletor.appendChild(option)
        dados_numericos.innerHTML = ''
    }
}

function finalizar(){
    if (vetor.length == 0){
        alert('Adicione valores antes de finalizar')
    }

    else
    {
        var maior = vetor[0]
        var menor = vetor[0]
        dados_numericos.innerHTML = ''

        dados_numericos.innerHTML += `Foram inseridos ${vetor.length} números`

        for(let pos in vetor){
            if(vetor[pos] > maior)
            {
                maior = vetor[pos]
            }
            if (vetor[pos] < menor)
            {
                menor = vetor[pos]
            }
        }

        dados_numericos.innerHTML += `</br>O menor número é o ${menor}`
        dados_numericos.innerHTML += `</br>O maior número é o ${maior}`
    }

}

