let calcularDescuento=function(precio,porcentaje){
  return (100-porcentaje)/100*precio
}
console.log(calcularDescuento(100,80))