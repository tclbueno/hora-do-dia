function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
       img.src = 'assets/manha.jpg'
        document.body.style.background = '#f1dcc1'
    } else if ( hora >=12 && hora <= 18) {
        img.src = 'assets/tarde.jpg'
        document.body.style.background = '#f19d61'
    }else{
        img.src = 'assets/noite.jpg'
        document.body.style.background = '#021438'
    }
}

