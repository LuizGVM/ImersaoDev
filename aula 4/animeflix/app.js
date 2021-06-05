var valido = 0

var opcaoValidada

var opcoes = []

var listaImagemAnimes = []

var listaNomeAnimes = []

while (valido == 0){
  var quantidade = parseInt(prompt("Quantos opções de anime gostaria de mostrar na tela? Escolha até 10 animes"))
  
  if (quantidade < 0 || quantidade > 10){
    alert("Número invalido de opções. Escolha novamente")
    valido = 0
  }
  else {
    valido = 1
  }
}

alert("Escolha os animes para assistir")

listaImagemAnimes.push("https://1.bp.blogspot.com/-w5fOOQU8jaI/X07qnzPEHyI/AAAAAAAABkw/H3LyGeGcPwgXo8BjxZmHhd_4FCVYQU_agCLcBGAsYHQ/s320/467.PNG")

listaImagemAnimes.push("https://1.bp.blogspot.com/-33n5OY6infw/XVCQIaP3NXI/AAAAAAAAAGo/vxVpdUwIN3EMyVSQilNpLM_gY6gqdZIzgCLcBGAs/s320/erere.jpg")

listaImagemAnimes.push("https://3.bp.blogspot.com/-H5KXV0KPsGQ/WX0sUoeaxXI/AAAAAAAAAXs/WfcWnKYPaiMmNKinpGjBSO6rFaFxoI5PACLcBGAs/s320/yuy.jpg")

listaImagemAnimes.push("https://1.bp.blogspot.com/-CJi3s_ME2uA/XvlIQm0sVqI/AAAAAAAABd0/1xvVF79CWbY6iDoJtTsPasKgPLpbsEqvQCLcBGAsYHQ/s320/767.jpg")

listaImagemAnimes.push("https://1.bp.blogspot.com/-y5Z0yerTcUU/X1QWr9zu6iI/AAAAAAAABns/gqk43WV45EUcOGyw_-F3jkhAmMBxTRqcwCLcBGAsYHQ/s320/678.jpg")

listaImagemAnimes.push("https://1.bp.blogspot.com/-7WGrIYcNlQM/YD1z9q2M25I/AAAAAAAACg8/z8rni4t6tocQTuK6_vc4xICvkq8R1UlywCLcBGAsYHQ/s320/65767.jpg")

listaImagemAnimes.push("https://1.bp.blogspot.com/-bqe0UVlnC6I/Xw-b2fvJr4I/AAAAAAAABho/UhzZKvsKuO82WbbYmyQNW7o7SJY8eNbwACLcBGAsYHQ/s1600/1593884753497-image-thumbnail.jpg")

listaImagemAnimes.push("https://1.bp.blogspot.com/-nGmgM9XX-uc/YD7F6vmFA4I/AAAAAAAAChk/BhC1_eqR_RIyX6a-W89rpWWna0ytA41owCLcBGAsYHQ/s320/8786.jpg")

listaImagemAnimes.push("https://1.bp.blogspot.com/-NOKI7lCWYVM/X-zqIjxxc2I/AAAAAAAACOU/MaM5znCEM6c9zd2I9eBtdqxV2Yp5-LA3wCLcBGAsYHQ/s320/54546.jpg")

listaImagemAnimes.push("https://1.bp.blogspot.com/-tw2kkfY8iUQ/Xebv3wCca_I/AAAAAAAAApI/Q65NV5NhKYAIbgf9eFaq7JOkJyxp6H8TgCLcBGAsYHQ/s320/err343.jpg")

listaNomeAnimes.push("One Piece")

listaNomeAnimes.push("Fate Zero")

listaNomeAnimes.push("FMAB")

listaNomeAnimes.push("Naruto")

listaNomeAnimes.push("Bleach")

listaNomeAnimes.push("DBZ")

listaNomeAnimes.push("Re:Zero")

listaNomeAnimes.push("Steins;Gate")

listaNomeAnimes.push("Promised Neverland")

listaNomeAnimes.push("Slime")

for (var i = 0; i < quantidade; i++){
  var escolhas = parseInt(prompt("Escolha, um de cada vez, os animes para assistir: 0 - One Piece, 1 - Fate Zero, 2 - FMAB, 3 - Naruto, 4 - Bleach, 5 - DBZ, 6 - Re:Zero, 7 - Steins;Gate, 8 - The Promised Neverland, 9 - Slime"))
  
  if(i < 1){
   opcoes.push(escolhas) 
  }
  else{
     opcaoValidada = 1 
     for (var ii = i; ii > 0; ii --){
       if (escolhas == opcoes[ii-1]){
         alert("Esta opção já foi escolhida. Por favor, selecione outro anime")
         opcaoValidada = 0       
       }       
      }
      if(opcaoValidada == 1){
        opcoes.push(escolhas)
      }
      else{
        i = i - 1
      }
  }
} 

for (var iii = 0; iii < opcoes.length; iii++){

  document.write("<div id='imagem'>")
  document.write("<img src=" + listaImagemAnimes[opcoes[iii]] + ">")
  
  document.write("<div id='nome'>")
  document.write("<p>" + listaNomeAnimes[opcoes[iii]] + "</p>")
  
  document.write("</div>")
  document.write("</div>")
}
