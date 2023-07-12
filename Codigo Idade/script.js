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
           var img = document.createElement('img')
           img.setAttribute('id', 'foto')
           if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'FotosIdade/criancaM.png')

            } else if (idade < 20) {
                //Jovem
                img.setAttribute('src', 'FotosIdade/adoleM.png')

            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'FotosIdade/adultoM.png')

            } else {
                //Idoso
                img.setAttribute('src', 'FotosIdade/idosoM.png')

            }

           } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'FotosIdade/criancaF.png')

            } else if (idade < 20) {
                //Jovem
                img.setAttribute('src', 'FotosIdade/adoleF.png')

            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'FotosIdade/adultoF.png')

            } else {
                //Idosa
                img.setAttribute('src', 'FotosIdade/idosoF.png')
                }
            
           }
           res.style.textAlign = 'center'
           res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
           res.appendChild(img)
           
           
        }
    }

