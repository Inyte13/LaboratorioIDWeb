function media(...numeros){
  let suma=numeros.reduce((suma, num)=>suma+num,0)
  return suma/numeros.length
}
console.log(media(1,4,56,3,3,3))