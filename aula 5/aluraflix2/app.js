/*function adicionarFilme(){ //declaração de uma função. Neste caso a função está ligada ao botão criado em html. As variáveis declaradas na função são validas somente dentro da função
  
  var campoFilme = document.querySelector('#filme')
  //querySelector vai no html e seleciona o que é pedido. O que coloca # é sempre para simbolizar o id do html ou no css (repare que é com '')
  
  //console.log(campoFilme.value) 
  //pega só o valor da variável pois ela veio do html e não é só o valor inputado na tela. Se der somente console.log ele vai buscar todo o valor da linha do input no html
  
  //document.write("<img src =" + campoFilme.value + ">") 
  //não da certo pois dessa forma, sem preparar o CSS e o HTML antes, a imagem vai ocupar a tela inteira

}*/

function adicionarFilme() {
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value
    if(filmeFavorito.endsWith('.jpg')){ //.endsWith serve para verificar o final de uma variável
      listarFilmesNaTela(filmeFavorito)
    }
    else{
      alert("Formato do link inválido")
    }
    campoFilmeFavorito.value = "" //para limpar o campo do link
  }
  
  function listarFilmesNaTela (filme) {
    var listaFilmes = document.querySelector (' #listaFilmes ')
    var elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  }