var cartaPaulo = {
    nome: "Seiya de Pegasos",
    atributos:{
      ataque: 80, 
      defesa: 60,
      magia: 90
    }           
  }
  
  var cartaRafa = {
    nome: "Bulbasaur",
    atributos:{
      ataque: 70, 
      defesa: 65,
      magia: 85
    }
  }
  
  var cartaGui = {
    nome: "Lorde Darth Vader",
    atributos:{
      ataque: 88, 
      defesa: 62,
      magia: 90
    }
  }
  
  
  
  var baralho = [cartaPaulo, cartaRafa, cartaGui]
  var cartaMaquina
  var cartaJogador
  
  
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function exibirOpcoes(){
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos){ // cria variável temporária "atributo" e a cada loop ela vai receber o valor de um dos atributos do objeto cartaJogador
      opcoesTexto += "<input type ='radio' name = 'atributo' value = '" + atributo + "'>" + atributo
      opcoes.innerHTML = opcoesTexto
    }
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
    document.getElementById('btnSortear').disabled = true //desabilitar um botão no html
    exibirOpcoes()
    document.getElementById('btnJogar').disabled = false  //habilitar um botão no html
    console.log(cartaJogador)
  }
  
  function obterAtributo(){
    var radioAtributo = document.getElementsByName('atributo') //buscar um elemento pelo nome
    var aviso = "Por favor selecione um atributo e jogue novamente"
    var marcado = 0
    for (var i = 0; i < radioAtributo.length; i++){
      if (radioAtributo[i].checked){ //.checked verifica se o botão está selecionado
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
    console.log(cartaMaquina)
    if (valorAtributoSelecionado == "Por favor selecione um atributo e jogue novamente"){
      alert (valorAtributoSelecionado)
    }
    else if (cartaJogador.atributos[valorAtributoSelecionado] > cartaMaquina.atributos[valorAtributoSelecionado]){ //forma de pegar a propriedade de um objeto que tenha uma variavel. Se já soubessemos qual o atributo selecionado, poderia colocar cartaJogador.atributos.magia/ataque/defesa
      alert("Você venceu! A sua carta, " + cartaJogador.nome + ", era melhor do que a carta da máquina, " + cartaMaquina.nome)
    } 
    else if(cartaJogador.atributos[valorAtributoSelecionado] < cartaMaquina.atributos[valorAtributoSelecionado]){
      alert("Você perdeu. A sua carta, " + cartaJogador.nome + ", era pior do que a carta da máquina, " + cartaMaquina.nome)
    }
    else {
      alert("Foi empate. A sua carta, " + cartaJogador.nome + ", e a carta da máquina, " + cartaMaquina.nome + "tinham o mesmo valor de atributo")
    }
  }