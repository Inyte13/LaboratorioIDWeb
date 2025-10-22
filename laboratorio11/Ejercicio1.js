// Calcular promedio con validación. Pide 5 notas y calcula el promedio, asegurándote de que estén entre 0 y 20
let nums=[]
for(let i=0;i<5;i++){
  let num
  do{
    num=parseInt(prompt(`Ingresa la nota ${i+1}: `))
  }while(!validacion(num))
  nums[i]=num
}
function validacion(num){
  return 0<=num&&num<=20
}
function promedio(arr){
  let suma=0
  for(let num of arr){
    suma+=num
  }
  return suma/arr.length
}
console.log(`El promedio es ${promedio(nums)}`)
