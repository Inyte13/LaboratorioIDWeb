function invertirMap(map){
  return new Map([...map].map(([key,value])=>[value,key]))
}
console.log(invertirMap([["Perú", "Lima"],["Chile", "Santiago"]]))