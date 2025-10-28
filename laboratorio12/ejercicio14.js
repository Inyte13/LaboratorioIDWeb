let operacionesMatematicas=(a,b)=>{
  let sumar=()=>{return a+b}
  let restar=()=>{return a-b}
  let multiplicar=()=>{return a*b}
  let dividir=()=>{ return b!==0?a/b:"No se puede divir entre 0"}
  return `${sumar()}, ${restar()}, ${multiplicar()}, ${dividir()}`
}
console.log(operacionesMatematicas(8,4))