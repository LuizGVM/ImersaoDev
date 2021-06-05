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

var baralho = [cartaA, cartaB, cartaC, cartaD, cartaE, cartaF, cartaG, cartaH, cartaI]
var cartaMaquina
var cartaJogador


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function exibeCartaJogador(){
   var divCartaJogador = document.getElementById("carta-jogador")
   var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
   var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  var opcoesTexto = ""
  var html = "<div id ='opcoes' class='carta-status'>"
   
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.foto})` 
 
  for (var atributo in cartaJogador.atributos) {
     opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
  divCartaJogador.innerHTML = nome + moldura + html + opcoesTexto + '</div>'
}

function exibeCartaMaquina(){
   var divCartaMaquina = document.getElementById("carta-maquina")
   var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
   var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  var opcoesTexto = ""
  var html = "<div id ='opcoes' class='carta-status'>"
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.foto})`
  
  for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
  }
  divCartaMaquina.innerHTML = nome + moldura + html + opcoesTexto + '</div>'
}

function sortearCarta(){
  var cartasIguais = 1
  cartaMaquina = baralho[getRandomIntInclusive(0,baralho.length - 1)]
  cartaJogador = baralho[getRandomIntInclusive(0,baralho.length - 1)]
  while (cartasIguais == 1){
    if(cartaMaquina != cartaJogador){
      cartasIguais = 0
    }
    else {
      cartaJogador = baralho[getRandomIntInclusive(0,baralho.length - 1)]
    }
  }
  document.getElementById('btnSortear').disabled = true 
  exibeCartaJogador()
  document.getElementById('btnJogar').disabled = false 
}

function obterAtributo(){
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

function jogar(){
  var valorAtributoSelecionado = obterAtributo()
  var divResultado = document.getElementById("resultado")
  var htmlResultado = ""
  if (cartaJogador.nome == "Level 0 Alucard - SUPER TRUNFO"){
     htmlResultado = '<p class="resultado-final">SUPER TRUNFO! VOCE VENCEU </p>'
     exibeCartaMaquina()
     divResultado.innerHTML = htmlResultado
     document.getElementById('btnReiniciar').disabled = false
     return
  }
  if (valorAtributoSelecionado == "Por favor selecione um atributo e jogue novamente"){
    alert (valorAtributoSelecionado)
    return
  }
  else if (cartaJogador.atributos[valorAtributoSelecionado] > cartaMaquina.atributos[valorAtributoSelecionado]){ 
    htmlResultado = '<p class="resultado-final">Venceu!</p>'
  } 
  else if(cartaJogador.atributos[valorAtributoSelecionado] < cartaMaquina.atributos[valorAtributoSelecionado]){
    htmlResultado = '<p class="resultado-final">Perdeu</p>'
  }
  else {
    htmlResultado = '<p class="resultado-final">Empatou</p>'
  }
  exibeCartaMaquina()
  divResultado.innerHTML = htmlResultado
  document.getElementById('btnReiniciar').disabled = false
}

function jogarNovamente(){
  var divResultado = document.getElementById("resultado")
  var divCartaJogador = document.getElementById("carta-jogador")
  var divCartaMaquina = document.getElementById("carta-maquina")
  var htmlResultado = ""
  divResultado.innerHTML = htmlResultado
  divCartaJogador.innerHTML = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  divCartaJogador.style.backgroundImage = ``
  divCartaMaquina.innerHTML = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
  divCartaMaquina.style.backgroundImage = ``
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnReiniciar').disabled = true 
}