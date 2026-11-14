let botaoProximo = document.querySelector(".proximo")
let botaoAnterior = document.querySelector(".voltar")
let listaImagens = document.querySelectorAll("img")

let i = 0

botaoProximo.onclick = function passarSlide(){
    document.querySelector("img.ativo").classList.remove("ativo")

    if(i < listaImagens.length - 1){
        i+= 1
    } else {
        i = 0
    }

    listaImagens[i].classList.add("ativo")
}

botaoAnterior.onclick = function voltarSlide(){
    document.querySelector("img.ativo").classList.remove("ativo")

    if(i > 0){
        i-= 1
    } else {
        i = 2
    }

    listaImagens[i].classList.add("ativo")
}