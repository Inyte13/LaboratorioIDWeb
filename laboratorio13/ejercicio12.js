function contarLetras(str){
  let count={}
  str=str.toLowerCase()
  for(let c of str){
    count[c]=(count[c]===undefined?0:count[c])+1
  }
  return count
}
console.log(contarLetras("SDlskdjfkSDKJFliuewnvl"))