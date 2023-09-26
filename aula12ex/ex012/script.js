function carregar(){

    var hora = new Date(). getHours()
    var mensagem = document.querySelector('div#msg')
    var img = document.getElementById('imagem')

    if (hora >= 0 && hora < 6){
        mensagem.innerHTML = `Agora são ${hora} horas</br>`
        mensagem.innerHTML += 'Boa Madrugada'
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#16243C'
    }
    else if (hora >= 6 && hora < 12){
        mensagem.innerHTML = `Agora são ${hora} horas</br>`
        mensagem.innerHTML += 'Bom dia'
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#DB9272'
    }
    else if (hora >= 12 && hora < 18){
        mensagem.innerHTML = `Agora são ${hora} horas</br>`
        mensagem.innerHTML += 'Boa Tarde'
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#FA7701'
    }
    else if(hora >= 18 && hora <= 23){
        mensagem.innerHTML = `Agora são ${hora} horas</br>`
        mensagem.innerHTML += 'Boa Noite'
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#11101C'
    }
}