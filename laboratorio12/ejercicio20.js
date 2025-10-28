function ejecutarOperacion(fn,num1,num2){
  return fn(num1,num2)
}
let sumar=(x,y)=>{return x+y}
let multiplicar=(x,y)=>{return x*y}
console.log(ejecutarOperacion(sumar,4,6))
console.log(ejecutarOperacion(multiplicar,4,6))
