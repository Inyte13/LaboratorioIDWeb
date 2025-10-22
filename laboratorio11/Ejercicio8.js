// Crea un menú con opciones:
// Calcular área del círculo
// Calcular área del rectángulo
// Salir
// El programa debe repetir hasta que el usuario elija salir
let input
do{
  input=parseInt(prompt(`Ingrese un número (1-3):\n
    (1) Calcular área del círculo\n
    (2) Calcular área del rectángulo\n
    (3) Salir`))
  switch(input){
    case 1:
      alert("Calculando el área del círculo")
      break
    case 2:
      alert("Calculando el área del rectángulo")
      break
    case 3:
      alert("Gracias por usar nuestros servicios")
      break
    default:
      alert("Ingrese un número válido")
  }
}while(input!==3)