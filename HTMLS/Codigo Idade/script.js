function verificar() {
        var data = new Date()
        var ano = data.getFullYear()
        var img = document.getElementById('foto')
        var fano = document.getElementById('txtano')
        var res = document.querySelector('div#res')
        if (fano.value.length == 0 || fano.value > ano) {
            window.alert('[ERRO] Verifique os dados e tente novamente!')

        } else {
           var fsex = document.getElementsByName('radsex')
           var idade = ano - Number(fano.value)
           var genero = ''
           img.setAttribute('id', 'foto')
           if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'FotosI/criancaM.jpg')

            } else if (idade < 20) {
                //Jovem
                img.setAttribute('src', 'FotosI/adoleM.jpg')

            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'FotosI/adultoM.jpg')

            } else {
                //Idoso
                img.setAttribute('src', 'FotosI/velhoM.jpg')

            }

           } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'FotosI/crincaF.jpg')

            } else if (idade < 20) {
                //Jovem
                img.setAttribute('src', 'FotosI/adoleF.jpg')

            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'FotosI/adultoF.jpg')

            } else {
                //Idosa
                img.setAttribute('src', 'FotosI/velhaF.jpg')
                }
            
           }
           res.style.textAlign = 'center'
           res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
           res.appendChild(img)
           
           
        }
    }

