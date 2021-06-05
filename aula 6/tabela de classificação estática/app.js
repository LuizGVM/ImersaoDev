var Paulo = { //declaração de um objeto e de seus atributos (ou propriedades) em JS. Repare no uso da vírgula para separar os atributos e de ":" para dar um valor ao atributo 
    Nome: "Paulo",
    Vitorias: 2,
    Empates: 5,
    Derrotas: 1,
    Pontos: 0
  }
  
  var Rafa = {
    Nome: "Rafa",
    Vitorias: 1,
    Empates: 5,
    Derrotas: 2,
    Pontos: 0
  }
  
  function calculaPontos(jogador) {
    var pontuacao = jogador.Vitorias*3 + jogador.Empates*1
    return pontuacao
  }
  
  Paulo.Pontos = calculaPontos(Paulo) //possível chamar a função e atribuir ela diretamente a um atributo
  Rafa.Pontos = calculaPontos(Rafa)
  
  //console.log(calculaPontos(Rafa))
  //console.log(Rafa)
  //console.log(Paulo.Vitorias) // forma de acessar somente um atributo do objeto