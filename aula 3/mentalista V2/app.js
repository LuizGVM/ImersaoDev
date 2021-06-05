function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var numeroSecreto = getRandomIntInclusive(0, 15)
var tentativas = 5
var chances = 0
var pontos = 10

function comparar(){
  
     var chute = parseInt(document.getElementById('entrada').value)
  
     if (chute == numeroSecreto){
        pontos = pontos - (chances*2)
        document.getElementById("resposta").innerHTML="Acertou! Sua pontuação foi " + pontos
     }
  
     else if (chute > numeroSecreto){
             tentativas = tentativas - 1
             chances = chances + 1
             document.getElementById("resposta").innerHTML= "O número que você digitou é muito grande, tente novamente. Você tem " + tentativas + " tentativas restantes"
    }
  
    else if (chute < numeroSecreto){
            tentativas = tentativas - 1
            chances = chances + 1
            document.getElementById("resposta").innerHTML= "O número que você digitou é muito pequeno, tente novamente. Você tem " + tentativas + " tentativas restantes"
    }
  
    if (chances == 5 && tentativas == 0) {
       document.getElementById("resposta").innerHTML= "Numero de tentativas esgotado, você fez 0 pontos. O número secreto era " + numeroSecreto
    } 
}