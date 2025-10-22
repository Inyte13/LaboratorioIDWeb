// Solicita edad y muestra:
// “Niño” si < 12
// “Adolescente” si entre 12 y 17
// “Adulto” si entre 18 y 59
// “Adulto mayor” si ≥ 60
let edad=parseInt(prompt("Ingrese su edad: "))
let condicion
if(edad>=60){
  condicion="Adulto mayor"
}else if(edad>=18){
  condicion="Adulto"
}else if(edad>=12){
  condicion="Adolescente"
}else if(edad>=0){
  condicion="Niño"
}else{
  console.log("Ingrese una edad válida")
  return 
}
console.log(`Su condición es de ${condicion}`)