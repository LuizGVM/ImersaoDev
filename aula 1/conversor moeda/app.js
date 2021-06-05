//var valorEmDolarTexto = prompt("Qual valor em $ deseja converter para R$?")
//var valorEmDolarNumero = parseFloat(valorEmDolarTexto) //converte string para float
//var valorEmReal = valorEmDolarNumero*5.38
//var valorDecimal = valorEmReal.toFixed(2) //fixa o numero de casas decimais do resultado
//alert(valorDecimal)
 
var valorEmDolar = parseFloat(prompt("Qual valor em $ deseja converter para R$?"))
var valorEmReal = valorEmDolar*5.38
var valorFixado = valorEmReal.toFixed(2)
alert(valorFixado)