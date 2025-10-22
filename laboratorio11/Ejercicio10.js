// Menú con múltiples opciones. Crea un menú tipo consola con las siguientes opciones:
// Calcular estadísticas de N notas
  // Promedio
  // Valor máximo
  // Valor mínimo
  // Cantidad de pares e impares
  // Cuántos están por encima del promedio
// Contar números pares e impares en un rango
// Generar una tabla de multiplicar
// Salir
// Debe repetirse hasta que el usuario elija la opción “Salir”.
let input
do{
  input=parseInt(prompt(`Ingrese un número (1-4)\t
    (1) Calcular estadísticas de N notas\t
    (2) Contar números pares por encima del promedio\t
    (3) Generar una tabla de multiplicar\t
    (4) Salir`))
  switch(input){
    case 1:
      let input2=parseInt(prompt(`Elija la estadística que desea consultar\t
        (1) Promedio\t
        (2) Valor mínimo\t
        (3) Cantidad de pares e impares\t
        (4) Cuántos están por encima del promedio`))
        switch(input2){
          case 1:
            alert("Se calculó el promedio")
            break
          case 2:
            alert("Se calcuó el valor mínimo")
            break
          case 3:
            alert("Se calculó la cantidad de pares e impares")
            break
          case 4:
            alert("Se calculó cuantos están por encima del promedio ")
            break
          default:
            alert("Ingrese un número válido")
        }
      break
    case 2:
      alert("Contando números pares...")
      break
    case 3:
      alert("Generando una tabla de multiplicar...")
      break
    case 4:
      alert("Gracias por usar nuestros servicios")
      break
    default:
      alert("Ingrese un número válido")
  }
}while(input!==4)