var jogadores = []

function adicionarJogador () {
  var player = {
    Nome: prompt("Qual o nome do novo jogador?"),
    Foto: "<img src=" + prompt("Adicione uma foto deste jogador") + ">",
    Vitorias: 0,
    Empates: 0,
    Derrotas: 0,
    Pontos: 0
  }
  jogadores.push(player)
  exibeJogadorNaTela(jogadores)
}

function calculaPontos(jogador) {
  var pontuacao = jogador.Vitorias*3 + jogador.Empates*1 - jogador.Derrotas*1
  return pontuacao
}

function exibeJogadorNaTela(players){
  var html = ""
  var tabela = document.getElementById("tabelaJogadores")
  for (var i = 0; i < players.length; i++){
    html += "<tr><td>" + players[i].Nome + "</td>" //+= é para somar ao valor já existente na variável
    html += "<td>" + players[i].Foto + "</td>"
    html += "<td>" + players[i].Vitorias + "</td>"
    html += "<td>" + players[i].Empates + "</td>"
    html += "<td>" + players[i].Derrotas + "</td>"
    html += "<td>" + players[i].Pontos + "</td>"
    html += "<td><button onClick = 'adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick = 'adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick = 'adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  tabela.innerHTML = html  
}

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.Vitorias++
  jogador.Pontos = calculaPontos(jogador)
  exibeJogadorNaTela(jogadores)
}

function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.Empates++
  jogador.Pontos = calculaPontos(jogador)
  exibeJogadorNaTela(jogadores)
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.Derrotas++
  jogador.Pontos = calculaPontos(jogador)
  exibeJogadorNaTela(jogadores)
}

function limparTabela(){
  jogadores = []
  exibeJogadorNaTela(jogadores)
}