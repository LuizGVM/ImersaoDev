var cartaA = {
    nome: "Seiya + Armadura de Ouro",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRILqNStoiqVG0EYNn9p6AnlnUdyLYfk7Pvw&usqp=CAU",
    atributos: {
        ataque: 90,
        defesa: 96,
        magia: 89,
        velocidade: 93
    }
}

var cartaB = {
    nome: "Mega Venusaur",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz3wW4ukFIqVNNRowCFW_jIwOKIE4TuspMpQ&usqp=CAU", 
    atributos: {
        ataque: 72,
        defesa: 85,
        magia: 85,
        velocidade: 68
    }
}

var cartaC = {
    nome: "Darth Vader",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtrF2d1IsfG0ssAc7sLUsCcolNXhEAAZuSw&usqp=CAU",
    atributos: {
        ataque: 86,
        defesa: 61,
        magia: 94,
        velocidade: 60
    }
}

var cartaD = {
    nome: "Level 0 Alucard - SUPER TRUNFO",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTok-8iEInpJa36-Z0JE78ykyTkveRCQsZSVg&usqp=CAU",
    atributos: {
        ataque: 100,
        defesa: 100,
        magia: 100,
        velocidade: 100
    }
}

var cartaE = {
    nome: "Rimuru Tempest",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuCxtmsWkuo_atZBxbcfK0uh-ZKEmSnqg9Iw&usqp=CAU",
    atributos: {
        ataque: 85,
        defesa: 98,
        magia: 98,
        velocidade: 91
    }
}

var cartaF = {
    nome: "Thanos +  Manopla do Infinito",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Abzz3n_jtlSX5XXvpzzA_O4JVhnwFa3z1A&usqp=CAU",
    atributos: {
        ataque: 99,
        defesa: 87,
        magia: 99,
        velocidade: 57
    }
}

var cartaG = {
    nome: "Goku Instinto Superior",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGcfEoi4XFFl8csXGqBO-Jmzynxp2BJc4lQ&usqp=CAU",
    atributos: {
        ataque: 96,
        defesa: 99,
        magia: 97,
        velocidade: 99
    }
}

var cartaH = {
    nome: "Barba Branca",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjk33uJFEGy6wldBqKulns1iP-fdaMl5h_fA&usqp=CAU",
    atributos: {
        ataque: 87,
        defesa: 80,
        magia: 96,
        velocidade: 50
    }
}

var cartaI = {
    nome: "Neo",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYte6AUALsZqf-1SCzI-QEQwdL-52GCE0iQ&usqp=CAU",
    atributos: {
        ataque: 88,
        defesa: 79,
        magia: 90,
        velocidade: 89
    }
}

var cartaJ = {
    nome: "Ichigo Kurosaki",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKe6O2bW9Jg5EnHYDsF3gQ9tQxSsV0A5YwzA&usqp=CAU",
    atributos: {
        ataque: 90,
        defesa: 60,
        magia: 95,
        velocidade: 99
    }
}

var baralho = [cartaA, cartaB, cartaC, cartaD, cartaE, cartaF, cartaG, cartaH, cartaI, cartaJ]
var cartaMaquina
var cartaJogador
var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeCartas()

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function atualizaPlacar(){
  var divPlacar = document.getElementById('placar')
  var html = "Jogador " + pontosJogador + " | " + pontosMaquina + " Maquina"
  divPlacar.innerHTML = html
}

function atualizaQuantidadeCartas(){
  var divQuantidadeCartas = document.getElementById("quantidade-cartas")
  var html = "Quantidade de cartas no jogo: " + baralho.length
  divQuantidadeCartas.innerHTML = html
  
}

function proximaRodada(){
  var divCartas = document.getElementById('cartas')
  var divResultado = document.getElementById("resultado")
  divCartas.innerHTML = '<div id="carta-jogador" class="carta"></div><div id="carta-maquina" class="carta"></div>'
  document.getElementById("btnSortear").disabled = false
  document.getElementById("btnProximaRodada").disabled = true
  divResultado.innerHTML = ""
  
}

function reiniciarJogo(){
  var divResultado = document.getElementById("resultado")
  pontosJogador = 0
  pontosMaquina = 0
  atualizaPlacar()
  baralho = [cartaA, cartaB, cartaC, cartaD, cartaE, cartaF, cartaG, cartaH, cartaI, cartaJ]
  atualizaQuantidadeCartas()
  divResultado.innerHTML = ""
  document.getElementById("btnSortear").disabled = false
  document.getElementById("btnProximaRodada").disabled = true
  document.getElementById('btnReiniciar').disabled = true 
  document.getElementById('btnJogar').disabled = true
}

function obtemAtributoSelecionado(){
  var radioAtributo = document.getElementsByName('atributo') 
  var aviso = "Por favor selecione um atributo e jogue novamente"
  var marcado = 0
  for (var i = 0; i < radioAtributo.length; i++){
    if (radioAtributo[i].checked){ 
      return radioAtributo[i].value
      marcado = 1
    }
  }
  if (marcado == 0){
    return aviso
  }
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.foto})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.foto})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id ='opcoes' class='carta-status'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function sortearCarta() {
    if (baralho.length == 0){
       alert("O jogo terminou")
       var divResultado = document.getElementById("resultado")
       var htmlResultado = ""
       if (pontosMaquina > pontosJogador){
         htmlResultado = '<p class="resultado-final">Você perdeu</p>'
       }
       else if (pontosMaquina < pontosJogador){
         htmlResultado = '<p class="resultado-final">Você venceu!</p>'
       }
       else {
         htmlResultado = '<p class="resultado-final">Terminou em empate</p>'
       }
       divResultado.innerHTML = htmlResultado
       document.getElementById('btnReiniciar').disabled = false
       return
    }
 
    var numeroCartaMaquina = getRandomIntInclusive(0,baralho.length - 1)
    cartaMaquina = baralho[numeroCartaMaquina]
    baralho.splice(numeroCartaMaquina, 1) 
  
    var numeroCartaJogador = getRandomIntInclusive(0,baralho.length - 1)
    cartaJogador = baralho[numeroCartaJogador]
    baralho.splice(numeroCartaJogador, 1)
    
    document.getElementById('btnReiniciar').disabled = true
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function jogar(){
  var atributoSelecionado = obtemAtributoSelecionado()
  var divResultado = document.getElementById("resultado")
  var htmlResultado = ""
  if (cartaJogador.nome == "Level 0 Alucard - SUPER TRUNFO"){
     htmlResultado = '<p class="resultado-final">SUPER TRUNFO! VOCE VENCEU </p>'
     exibeCartaMaquina()
     pontosJogador++
     divResultado.innerHTML = htmlResultado
     document.getElementById('btnProximaRodada').disabled = false
     atualizaPlacar()
     atualizaQuantidadeCartas()
     return
  }
  if (cartaMaquina.nome == "Level 0 Alucard - SUPER TRUNFO"){
     htmlResultado = '<p class="resultado-final">SUPER TRUNFO! VOCE PERDEU </p>'
     exibeCartaMaquina()
     pontosMaquina++
     divResultado.innerHTML = htmlResultado
     document.getElementById('btnProximaRodada').disabled = false
     atualizaPlacar()
     atualizaQuantidadeCartas()
     return
  }
  if (atributoSelecionado == "Por favor selecione um atributo e jogue novamente"){
    alert (atributoSelecionado)
    return
  }
  else if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){ 
    htmlResultado = '<p class="resultado-final">Venceu!</p>'
    pontosJogador++
  } 
  else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = '<p class="resultado-final">Perdeu</p>'
    pontosMaquina++
  }
  else {
    htmlResultado = '<p class="resultado-final">Empatou</p>'
  }
  divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
    exibeCartaMaquina()
    document.getElementById('btnProximaRodada').disabled = false
    atualizaPlacar()
    atualizaQuantidadeCartas()
}