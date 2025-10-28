let potencia=(num1,acc=0)=>{
  if(acc===0){
    return 1
  }
  return num1*potencia(num1,acc-1)
}
console.log(potencia(3,4))