// Contador de números pares e impares. Pide 10 números y muestra cuántos fueron pares y cuántos impares
let nums=[]
for(let i=0;i<10;i++){
  nums[i]=parseInt(prompt(`Ingresa el número ${i+1}: `))
}
function pares(arr){
  let arr2=[]
  for(let num of arr){
    if(num%2===0){
      arr2.push(num)
    }
  }
  return arr2.length
}
function impares(arr){
  let arr2=[]
  for(let num of arr){
    if(num%2!==0){
      arr2.push(num)
    }
  }
  return arr2.length
}
console.log(`Números pares: ${pares(nums)}\n
Números impares: ${impares(nums)}`)