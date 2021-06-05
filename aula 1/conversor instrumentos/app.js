//var valorEmDolarTexto = prompt("Qual valor em $ deseja converter para R$?")
//var valorEmDolarNumero = parseFloat(valorEmDolarTexto) //converte string para float
//var valorEmReal = valorEmDolarNumero*5.38
//var valorDecimal = valorEmReal.toFixed(2) //fixa o numero de casas decimais do resultado
//alert(valorDecimal)
 
//var valorEmDolar = parseFloat(prompt("Qual valor em $ deseja converter para R$?"))
//var valorEmReal = valorEmDolar*5.38
//var valorFixado = valorEmReal.toFixed(2)
//alert(valorFixado)

var nivelTexto = document.getElementById('nivel')
//var nivelTexto = prompt("Digite o nivel que deseja converter")
//var nivelNumero = parseFloat(nivelTexto)
//var nivelFixado = nivelNumero.toFixed(4)
//var correnteNumero = 4 + (nivelFixado*16)/100 
//var correnteFixada = correnteNumero.toFixed(4)
//alert(correnteFixada)

var correnteTexto = document.getElementById('corrente')
//var correnteTexto = prompt("Digite a corrente que deseja converter")
//var correnteNumero = parseFloat(correnteTexto)
//var correnteFixada = correnteNumero.toFixed(4)
//var nivelNumero = (correnteFixada - 4)*100/16
//var nivelFixado = nivelNumero.toFixed(4)
//alert(nivelFixado)


function converte_corrente(){
nivelTexto.value = Number((correnteTexto.value - 4)*100/16)
}
function converte_nivel(){
correnteTexto.value = Number(4+ (nivelTexto.value*16)/100)
}

