function comparar (){
    var nome = document.getElementById('entrada').value.toLowerCase()
    if (nome == "ichigo"){
       document.getElementById("resposta").innerHTML="PARABÉNS!!!"
    }
    else {
         document.getElementById("resposta").innerHTML="Resposta Errada"
    }
}