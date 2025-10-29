function contarPalabras(str){
  let arr=str.toLowerCase().split(" ")
  let map=new Map()
  arr.forEach(item=>{
    map.set(item,(map.get(item)===undefined?0:map.get(item))+1)
  })
  return map
}
console.log(contarPalabras("sol luna sol sol estrella luna"))