//Script veja mais

var btnVejaMais = document.getElementById("btn-veja-mais")
var verMaisOpen = 0
var setaVejaMais = document.getElementById("seta-veja-mais")
var btnVejaMenos = document.getElementById("btn-veja-menos")
var setaVejaMenos = document.getElementById("seta-veja-menos")


btnVejaMais.onmouseover = function () {
    setaVejaMais.style.transform = "rotate(0deg)"
}

btnVejaMais.onmouseout = function () {
    setaVejaMais.style.transform = "rotate(-90deg)"
}

btnVejaMenos.onmouseover = function () {
    setaVejaMenos.style.transform = "rotate(-180deg)"
}

btnVejaMenos.onmouseout = function () {
    setaVejaMenos.style.transform = "rotate(0deg)"
}


btnVejaMais.onclick = function () {
    var gridBoxes = document.getElementById("grid-boxes")
    var boxDisplay = document.getElementsByClassName("veja-mais-div")

    for (i = 0; i < boxDisplay.length; i++) {
        boxDisplay[i].style.display = "flex"
        console.log("foi 1")
    }

    gridBoxes.style.gridTemplateRows = "1fr 1fr"

    btnVejaMais.style.display = "none"
    btnVejaMenos.style.display = "flex"

    verMaisOpen = 1
}

btnVejaMenos.onclick = function () {
    var gridBoxes = document.getElementById("grid-boxes")
    var boxDisplay = document.getElementsByClassName("veja-mais-div")

    for (i = 0; i < boxDisplay.length; i++) {
        boxDisplay[i].style.display = "none"
        console.log("foi 1")
    }

    gridBoxes.style.gridTemplateRows = "none"

    btnVejaMais.style.display = "flex"
    btnVejaMenos.style.display = "none"

    setaVejaMais.style.transform = "rotate(-90deg)"

    verMaisOpen = 0
}


// Contact form functions 

    function sendEmail() {
    var params = {
        from_nome: document.getElementById('nomeid').value,
        email: document.getElementById('emailid').value,
        message: document.getElementById('mensagem').value
    }

    const serviceID = 'service_4dyi1jp'
    const templateID = 'template_silfd4r'

    emailjs.send(serviceID, templateID, params, "Pfr7xDvjaGR6q7OjN")
        .then(res => {
        document.getElementById('nomeid').value = ''
        document.getElementById('emailid').value = ''
        document.getElementById('mensagem').value = ''
        console.log(res)
        alert('Your message was sent')
        })
        .catch((err) => console.log('error' + err))
}
