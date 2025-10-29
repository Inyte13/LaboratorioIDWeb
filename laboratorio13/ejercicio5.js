function reordenarPalabras(str){
  return str
  .split(" ")
  .map(item=>item.toUpperCase())
  .sort()
}
console.log(reordenarPalabras("sol luna estrella planeta"))