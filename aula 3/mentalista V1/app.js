//var numeroSecreto = parseInt(Math.random()*10) //função math.random() gera número aleatório entre 0 e 1, sem incluir o 1, e depois multiplica por 10 para ficar no intervalo de 0 a 10

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } //função para gerar um valor inteiro aleatório entre dois números, incluindo ambos
  
  var numeroSecreto = getRandomIntInclusive(0, 10)
  var tentativas = 5
  var chances = 0
  var pontos = 10
  
  while(tentativas > 0){ //faz um loop enquanto a condição entre () for válida
       var chute = parseInt(prompt("Digite um número entre 0 e 10"))
    
       if (chute == numeroSecreto){
          pontos = pontos - (chances*2)
          alert("Acertou! Sua pontuação foi " + pontos)
          //console.log("Acertou!") //para aparecer mensagens no console (canto inferior esquerdo) ao invés de ir para tela
          //break //comando para sair do loop
          tentativas = 0
       }
       else if (chute > numeroSecreto){
               tentativas = tentativas - 1
               chances = chances + 1
               alert("O número que você digitou é muito grande, tente novamente. Você tem " + tentativas + " tentativas restantes")
               //console.log("O número que você digitou é muito grande. Tente novamente")
               
      }
      else if (chute < numeroSecreto){
              tentativas = tentativas - 1
              chances = chances + 1
              alert("O número que você digitou é muito pequeno, tente novamente. Você tem " + tentativas + " tentativas restantes")
              //console.log("O número que você digitou é muito pequeno. Tente novamente")
              
      }
    
      if (chances == 5 && tentativas == 0) {
         alert("Numero de tentativas esgotado, você fez 0 pontos. O número secreto era " + numeroSecreto)
         //console.log("Numero de tentativas esgotado. O número secreto era " + numeroSecreto)
      }
  }