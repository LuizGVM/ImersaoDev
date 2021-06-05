//var primeiroValor = parseInt(prompt("Escreva o primeiro valor da operação:")) //já faz a transformação em inteiro direto

//var segundoValor = parseInt(prompt("Escreve o segundo valor da operação:"))

//var resultado = primeiroValor/segundoValor

//document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>") //escreve o resultado em um local definido, neste caso no formato da operação

var primeiroValor = parseInt(prompt("Escreva o primeiro valor da operação:"))

var segundoValor = parseInt(prompt("Escreve o segundo valor da operação:"))

alert("Qual operação deseja realizar?")

var operacao = parseInt(prompt("Digite: 1 para divisão; 2 para multiplicação; 3 para subtração; 4 para soma e 5 para potências"))

/*if(operacao == 1){
  var resultado = primeiroValor/segundoValor
  
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
}

if(operacao == 2){
  var resultado = primeiroValor*segundoValor
  
  document.write("<h2>" + primeiroValor + " X " + segundoValor + " = " + resultado + "</h2>")
}

if(operacao == 3){
  var resultado = primeiroValor-segundoValor
  
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
}

if(operacao == 4){
  var resultado = primeiroValor+segundoValor
  
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
}*/

if (operacao == 1){
  var resultado = primeiroValor/segundoValor
  
  document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
} 

else if (operacao == 2){
  var resultado = primeiroValor*segundoValor
  
  document.write("<h2>" + primeiroValor + " X " + segundoValor + " = " + resultado + "</h2>")
}

else if (operacao == 3){
  var resultado = primeiroValor-segundoValor
  
  document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
}

else if (operacao == 4){
  var resultado = primeiroValor+segundoValor
  
  document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
}

else if (operacao == 5){
  var resultado = primeiroValor**segundoValor
  
  document.write("<h2>" + primeiroValor + " ^ " + segundoValor + " = " + resultado + "</h2>")
}

else {
  alert("O valor digitado não é uma operação valida!")
  document.write("<h2>???</h2>")
     }