function acumulador(valorInicial=0){
  function sumar(num){
    return valorInicial+=num
  }
  return{sumar}
}
let acumulador1=acumulador(49)
console.log(acumulador1.sumar(2))