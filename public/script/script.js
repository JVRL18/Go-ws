let i = 0
let showMenu = (x, init) => {
    if(x === true){
        if(init !== 0){
            i++
            if(i > 4){
                i = 0
            }
        }
    }else{
        i--
        if(i < 0){
            i = 4
        }
    }
    let e = document.getElementsByClassName("content")
    if(e.length !== 0){
        let card = document.getElementById("game_card")
        card.removeChild(e[0])
    }

    let games = ["Matemática v1","Matemática v2","Forca","Jogo da velha", "Roleta russa"]
    let description = [
        "Um jogo onde quem acertar primeiro a soma vence a rodada, a dificuldade aumenta com o tempo e o jogo acaba quando ninguém responde",
        "Sistema idêntico ao v1 porém agora é multiplicação em vez de soma",
        "Jogo da forca tradicional porém utilizamos vidas no lugar dos desenhos, adivinhe a palavra após digitar !chute, ou digite uma letra 🤝",
        "O classico jogo da velha onde você disputa com um amigo (por em quanto)",
        "[EXPERIMENTAL] - Roleta russa, para apostas onde o ultimo a viver leva tudo!."
    ]
    let urls = [
        "./assets/games/Mat-questionsv1.PNG",
        "./assets/games/Mat-questionsv2.PNG",
        './assets/games/Forca-questions.PNG',
        "./assets/games/Velha-game.PNG",
        "./assets/games/Roleta-game.PNG"
    ]
    let card = document.getElementById("game_card")
    if(document.getElementById("jogar").style.display !== 'none') document.getElementById("jogar").style.display = 'none'

    let p = document.createElement('h5')
    let p2 = document.createElement('p')
    
    let tag = document.createElement('div')
    tag.classList.add('content')

    let text = document.createTextNode(games[i]+` [${i+1}/5]`)
    p.appendChild(text)
    tag.append(p)

    let imgdiv = document.createElement('div')
    imgdiv.classList.add('img-div')
    let img = document.createElement('img')
    img.src = urls[i]
    img.onclick = () => { next()}
    imgdiv.appendChild(img)
    tag.appendChild(imgdiv)

    let desc = document.createTextNode(description[i])
    p2.append(desc)
    tag.append(p2)
    
    if(i === 0){
        let txt = document.createTextNode('clique na imagem')
        let text = document.createElement('h4')
        text.appendChild(txt)
        text.classList.add('Aviso')
        tag.append(text)
    }

    card.appendChild(tag)
}

let next = () => {
    showMenu(true)
}

let back = () => {
    showMenu(false)
}