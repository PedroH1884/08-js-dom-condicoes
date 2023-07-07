function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('fotos')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        //BOM DIA!!
        img.src = 'Fotos/foto manha.jpg'
        document.body.style.background = '#f3c68e'
    }   else if (hora >= 12 && hora < 18) {
        //BOA TARDE!!
        img.src = 'Fotos/fototarde.jpg'
        document.body.style.background = '#fe9001'
    }   else {
        //BOA NOITE!!
        img.src = 'Fotos/fotonoite.jpg'
        document.body.style.background = ''
    }
}