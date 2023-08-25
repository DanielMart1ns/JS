function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector("input#txtano")
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano)
    {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }
    else
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img') //Criando uma Tag sem precisar de HTML
        img.setAttribute('id', 'foto') //Criando um id="foto" sem precisar de HTML

        if (fsex[0].checked)
        {
            genero = 'Homem'

            if (idade >= 0 && idade < 10)
            {
                img.setAttribute('src', 'bebezinho.png')
            }
            else if (idade < 21)
            {
                img.setAttribute('src', 'menino.png')
            }
            else if (idade < 50)
            {
                img.setAttribute('src', 'homem.png')
            }
            else
            {
                img.setAttribute('src', 'idoso.png')
            }

        }
        else if (fsex[1].checked)
        {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10)
            {
                img.setAttribute('src', 'bebezinha.png')
            }
            else if (idade < 21)
            {
                img.setAttribute('src', 'menina.png')
            }
            else if (idade < 50)
            {
                img.setAttribute('src', 'mulher.png')
            }
            else
            {
                img.setAttribute('src', 'idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos gênero ${genero} com idade ${idade} anos`
        res.appendChild(img)
    }
}