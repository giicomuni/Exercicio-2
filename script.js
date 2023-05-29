function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano || fano.value == 0) {
        window.alert("Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/crianca-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adulto-m.png')
            } else {
                img.setAttribute('src', 'img/idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/crianca-f.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'img/adulto-f.png')
            } else {
                img.setAttribute('src', 'img/idosa-f.png')
            }
        }
        res.innerHTML = `Você é: ${genero} com ${idade} anos.` 
        res.appendChild(img)
    }

}
