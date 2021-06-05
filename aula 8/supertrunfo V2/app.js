var cartaPaulo = {
    nome: "Seiya de Pegaso",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2JpFs1Y6qoqdbjKxFIuX7RJ_f22UeAiR5_Q&usqp=CAU",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var cartaRafa = {
    nome: "Bulbasauro",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4OYSTUi2Hm_0BnVwzxsKMxQgA3hBDExmcxw&usqp=CAU", 
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var cartaGui = {
    nome: "Lorde Darth Vader",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtrF2d1IsfG0ssAc7sLUsCcolNXhEAAZuSw&usqp=CAU",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}


var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui]

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibeCartaJogador()
}

function exibeCartaJogador(){
   var divCartaJogador = document.getElementById("carta-jogador")
   var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
   var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
  var opcoesTexto = ""
  var html = "<div id ='opcoes' class='carta-status'>"
   divCartaJogador.style.backgroundImage = `url(${cartaJogador.foto})` //alterando a propriedade, no CSS, da divisão carta-jogador, atribuindo para ela uma imagem de fundo que está sendo buscada da web (via url) no endereço indicado pelo atributo foto do objeto cartaJogador. Detalho ao uso de aspas `` e não de '' na hora de fazer esse tipo de chamada e também no uso de $ para puxar um valor um atributo do js e jogar no CSS/html
  
  //divCartaJogador.innerHTML = nome // se fizer só isso ele vai substituir a moldura pois já existe uma image source nessa div
 
  for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
  divCartaJogador.innerHTML = nome + moldura + html + opcoesTexto + '</div>'
}

function exibeCartaMaquina(){
   var divCartaMaquina = document.getElementById("carta-maquina")
   var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
   var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
  var opcoesTexto = ""
  var html = "<div id ='opcoes' class='carta-status'>"
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.foto})`
  
  for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
  }
  divCartaMaquina.innerHTML = nome + moldura + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var divResultado = document.getElementById("resultado")
    var htmlResultado = ""
    exibeCartaMaquina()
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu!</p>'
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
         htmlResultado = '<p class="resultado-final">Perdeu</p>'
    } else {
         htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
    divResultado.innerHTML = htmlResultado
}