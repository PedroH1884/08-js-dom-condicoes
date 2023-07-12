function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        //BOM DIA!!
        img.src = 'FotosHora/FotoManha.png'
        document.body.style.background = '#f3c68e'
    }   else if (hora >= 12 && hora < 18) {
        //BOA TARDE!!
        img.src = 'FotosHora/FotoTarde.png'
        document.body.style.background = '#fe9001'
    }   else {
        //BOA NOITE!!
        img.src = 'FotosHora/FotoNoite.png'
        document.body.style.background = '#24507c'
    }
}