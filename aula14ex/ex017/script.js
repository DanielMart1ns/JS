var botao = document.querySelector('input#verif')
botao.addEventListener('click', calc)

var reset = document.getElementById('reset')
reset.addEventListener('click', resetar)

var show = document.getElementById('show')

function resetar(){
    show.innerHTML = '&UpArrow;Insira um valor para mostrar a tabuada &DownArrow;'
}

function calc(){
    var valor = document.querySelector('input#valor')
    var i
    var resultado
    
    
    if (valor.value.length == 0){
        alert('Por favor, insira um número')
    }

    if (valor.value.length != 0){
        valor = Number(valor.value)
        show.innerHTML = 'Aqui está o Resultado:'

        for (i=1; i <= 10; i++)
        {
            resultado = valor * i
            show.innerHTML += `</br>${valor} x ${i} = ${resultado}`
        }
    }
}