function crearContador(valorInicial=0){
  let i=valorInicial
  let incrementar=()=>{return i+1}
  let resetear=()=>{return i=valorInicial}
  return {incrementar, resetear}
}
let contador=crearContador(5)
console.log(contador.incrementar())
console.log(contador.resetear())
