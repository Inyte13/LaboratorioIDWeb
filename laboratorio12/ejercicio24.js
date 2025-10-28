function crearSecuencia(inicio,razon){
  let actual=inicio
  return function(){
    let x0=actual
    actual+=razon
    return x0
  }
}
const secuencia=crearSecuencia(2,3)
console.log(secuencia())
console.log(secuencia())
console.log(secuencia())