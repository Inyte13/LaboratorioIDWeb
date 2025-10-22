// Números primos en rango. Pide un número y muestra todos los primos entre 1 y dicho número. Programa iterativo
let limite=parseInt(prompt("Ingrese el límite para los números primos: "))
let primos=[]
for(let i=1;i<limite;i++){
  let divisores=[]
  for(let j=2;j<=i;j++){
    if(i%j===0){
      divisores.push(j)
    }
  }
  if(divisores.length===1){
    primos.push(i)
  }
}
console.log(primos)