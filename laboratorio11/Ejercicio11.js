// Un supermercado desea una app que simule un carrito de compras muy simple
// El usuario puede agregar productos uno por uno, indicando sólo su precio, hasta que decida no continuar
// Al terminar, mostrar:
  // El total parcial a pagar
  // Si el total supera 100, mostrar el mensaje "Tiene un descuento del 10%" y aplicar el descuento
  // Si el total está entre 50 y 100, mostrar "Gana un cupón de 5%" y aplicar el descuento
  // Si el total es menor que 50, mostrar "No aplica descuento"
  // Finalmente, mostrar el total final a pagar
let input
let total=0
do{
  input=parseInt(prompt(`Ingrese la opción que desea:\t
    (1) Agregar producto\n
    (2) Salir`))
  switch(input){
    case 1:
      let precio=parseInt(prompt("Ingrese el precio del producto: "))
      if(precio<0){
        alert("No se puede insertar precios negativos")
        break
      }
      total+=precio
      break
    case 2:
      alert("Gracias por usar nuestro servicio")
      break
    default:
      alert("Debe ser un número válido")    
  }
}while(input!==2)
let descuento
let str
alert(`El monto actual es de S/.${total}`)
if(total<50){
  descuento=0
  str="No se aplica descuento"
}else if(total<100){
  descuento=0.05
  str="Gana un cupon de 5%"
}else{
  descuento=0.10
  str="Gana un cupon de 10%"
}
total*=(1-descuento)
alert(`${str}, el monto actual es de S/.${total.toFixed(2)}`)