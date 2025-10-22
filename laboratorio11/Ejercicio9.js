// Verificación de número Armstrong. Programa iterativo
// Un número de n dígitos es Armstrong si la suma de sus dígitos elevados a n da el mismo número
// Ejemplo: 153 → 1³ + 5³ + 3³ = 153.
let num=prompt("Ingrese un número: ")
let count=0
for(let c of num){
  count+=c**num.length
}
count==num?console.log("Es un número Armstrong"):console.log("No es un número de Armstrong")
