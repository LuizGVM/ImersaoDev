function adicionarFilme() {
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value
    if(verificar(filmeFavorito)){
      listarFilmesNaTela(filmeFavorito)
    }
    campoFilmeFavorito.value = ""
  }
  
  function adicionarTrailer() {
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value
    var index = filmeFavorito.indexOf("?v=")+3
    var codigo = filmeFavorito.substring(index)
    player (codigo)
    campoFilmeFavorito.value = ""
  }
  
  function listarFilmesNaTela (filme) {
    var listaFilmes = document.querySelector (' #listaFilmes ')
    var elementoFilme = "<img src=" + filme + ">"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
  }
  
  function player (filme){
    var linkYoutube = "https://www.youtube.com/embed/"+filme
    var trailerNaTela = document.querySelector('#trailer')
    var idFilme = "<iframe id='frameTrailer' width='500' height='300' src='" + linkYoutube +"' ></iframe>"
    trailerNaTela.innerHTML = idFilme
  }
  
  function verificar (link){
    if(link.endsWith('.jpg')){ 
      return 1
    }
    else{
      alert("Formato do link inválido")
    }
  }