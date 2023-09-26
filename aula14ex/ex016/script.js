var botao = document.querySelector('input#verif')
botao.addEventListener('click', calc)

var reset = document.querySelector('input#reset')
reset.addEventListener('click', resetar)

function resetar(){
    show.innerHTML = 'Preparando a Contagem...'
}


function calc(){
    var n_inicial = document.querySelector('input#n_inicial')
    var n_final = document.querySelector('input#n_final')
    var passo = document.querySelector('input#passo')
    var show = document.querySelector('div#show')
    var i

    if (n_inicial.value.length == 0 || n_final.value.length == 0)
    {
        show.innerHTML = ' [ERRO] Impossível contar'
    }

    if (passo.value.length == 0 || passo.value == 0){
        alert('Passo inserido inválido. Considerando Passo = 1')
        passo.value = 1
    }

    if (n_inicial.value.length != 0 && n_final.value.length != 0 && passo != 0)
    {
        n_inicial = Number(n_inicial.value)
        n_final = Number(n_final.value)
        passo = Number(passo.value)

        show.innerHTML = 'Contando... </br>'
        if (n_inicial < n_final)
        {
            for (i = n_inicial; i <= n_final; i += passo)
            { 
                show.innerHTML += `${i} &#x1F449`
            }
        }

        if (n_inicial > n_final){
            for (i = n_inicial; i >= n_final; i -= passo)
            {
                show.innerHTML += `${i} &#x1F449`
            }
        }
        show.innerHTML += '&#x1F3C1'
    }
    
}