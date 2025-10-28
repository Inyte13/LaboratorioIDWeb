function procesarTexto(str){
  let arr=str.split(" ")
  let limpiarEspacios=(arr)=>{return arr.join("")}
  let contarPalabras=(arr)=>{return arr.length}
  return `${limpiarEspacios(arr)}, ${contarPalabras(arr)}`
}
console.log(procesarTexto("Hola mundo"))