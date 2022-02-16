alert ("vamos a jugar, adivinaremos tu edad y tu numero de la suerte para esta semana, para jugar completa las siguientes preguntas")

let entrada = prompt("Elije un numero que te guste entre el 2 y 10")
let año = prompt("ingresa el año en que naciste")
while(entrada <=100){
  let resultado = entrada * 2 
  let multi = resultado + 5 
  let final = multi * 50
  let parseado = parseInt(final)
  alert("Según mis calculos tu numero de la suerte esta semana sera el" + " " + parseado)
  
   
  let pregunta = prompt("ya celebraste tu cumpleaños?")
  if(pregunta == "si"){
   
    let Sicumple = parseado + 1772;
    let resultadoSi = Sicumple - año;
    let finalSi = resultadoSi.toString().slice(1)
    alert("Tu edad es" + " " + finalSi)

   
  }else{
   let Nocumple =  parseado + 1771;
   let resultadoNo = Nocumple - año;
   let finalNo = resultadoNo.toString().slice(1)
   alert("Tu edad es" + " " + finalNo)
  }

  alert("Gracias por jugar")
  break;
}