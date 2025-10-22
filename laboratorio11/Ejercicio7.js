// Suma todos los números desde 1 hasta N, pero omite los múltiplos de 5. Programa iterativo
let limite=parseInt(prompt("Ingrese el límite de la suma"))
let count=0
for(let i=0;i<limite;i++){
  if(i%5===0){
    continue
  }
  count+=i
}
console.log(`La suma es ${count}`)