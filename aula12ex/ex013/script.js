var botao = document.querySelector('input#botao')
botao.addEventListener('click', verificar)

function verificar(){
    var ano = document.querySelector('input#ano_nasc') //Pegando o ano de nascimento do usuário

    var data = new Date(). getFullYear() //variável para ano atual

    var res = document.getElementById('resultado') //Local onde aparecerá os dados

    var sexo = document.getElementsByName('sexo')
    var genero = ''

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (ano.value.length == 0 || ano.value > data){
        window.alert('Verifique os Dados e Tente Novamente') //Verificador de falhas
    }

    ano = Number(ano.value)
    var idade = data - ano

    if (sexo[0].checked){ // Verificador de gênero
        genero = 'Masculino'

        if(idade >= 0 && idade < 2){
            img.setAttribute('src', 'imagens/bebe.png')
        }
        else if (idade < 13){
            img.setAttribute('src', 'imagens/menino.png')
        }
        else if (idade < 26){
            img.setAttribute('src', 'imagens/jovem-h.png')
        }
        else if(idade < 51){
            img.setAttribute('src', 'imagens/homem.png')
        }
        else{
            img.setAttribute('src', 'imagens/idoso-h.png')
        }
    } 
    
    else if (sexo[1].checked){
        genero = 'Feminino'

        if(idade >= 0 && idade < 2){
            img.setAttribute('src', 'imagens/bebe.png')
        }
        else if (idade < 13){
            img.setAttribute('src', 'imagens/menina.png')
        }
        else if (idade < 26){
            img.setAttribute('src', 'imagens/jovem-m.png')
        }
        else if(idade < 51){
            img.setAttribute('src', 'imagens/mulher.png')
        }
        else{
            img.setAttribute('src', 'imagens/idosa.png')
        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Gênero ${genero} ${idade} anos</br>`
    res.appendChild(img)
}