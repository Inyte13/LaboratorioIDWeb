function esMultiplo(a,b){
  return a%b===0?`${a} es multiplo de ${b}`:`${a} no es multiplo de ${b}`
}
console.log(esMultiplo(10,20))