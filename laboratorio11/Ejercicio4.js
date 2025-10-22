// Tabla de multiplicar. El usuario ingresa un número y se muestra su tabla del 1 al 12. Programa iterativo
let num=parseInt(prompt("Ingrese un número: "))
for(let i=1;i<=12;i++){
  console.log(`${num}*${i}=${num*i}`)
}