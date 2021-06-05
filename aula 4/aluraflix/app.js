/*var animes = ["One Piece", "Re:Zero", "Steins Gate"] //declaração de um array com valores pré-definidos

var animes2 = [] //declaração de um array vazio, para os elementos serem adicionados durante o código

var animes3 = []

animes2.push("One Piece") //comando para inserir elemento(s) dentro do array. Vai inserindo na ordem em que o comando é feito 
animes2.push("Re:Zero")
animes2.push("Steins Gate")

animes3.push("FMAB", "DBZ", "Fate")

var tamanho = animes.length //comando para se descobrir o tamanho do array (quantos elementos existem nele)

var escolha = animes3[2] //forma de se escolher um elemento específico do array. Lembrando que a contagem dos elementos começa do 0

for (var i = 0; i <= animes.length - 1; i++){ //outra forma de fazer loop. Primeiro campo indica a condição inicial (que indica o número de interações), o segundo a condição de passagem (enquanto for para realizar o loop) e o terceiro mostra o ação tomada na variável ao final de cada loop (i-- e i++ são formas compactas de escrever i = i - 1 e i = i + 1, respectivamente). Lembrando que a variável i só existe dentro do loop e para separar os campos tem que ser com ;

console.log(animes[i])
}*/

var listaImagemFilmes = []

listaImagemFilmes.push("https://m.media-amazon.com/images/M/MV5BOGFjYWNkMTMtMTg1ZC00Y2I4LTg0ZTYtN2ZlMzI4MGQwNzg4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg")
listaImagemFilmes.push("https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg")
listaImagemFilmes.push("https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg")

for (var i = 0; i < listaImagemFilmes.length; i++){
  document.write("<img src =" + listaImagemFilmes[i] + ">") //img src é para indicar que o que vem a seguir é o caminho para uma imagem (img = image e src = source)
}