// Cajero automático. El usuario ingresa un monto a retirar. El programa debe indicar cuántos billetes de 100, 50, 20 y 10 se
// entregan. (Debe ser la menor cantidad de billetes). Programa iterativo
let monto=parseInt(prompt("Ingrese un monto: "))
let billetes=[100,50,20,10]
let nBilletes=[]
for(let bille of billetes){
  let cantidad=Math.floor(monto/bille)
  nBilletes.push(cantidad)
  monto=monto%bille
}
for(let i=0;i<billetes.length;i++){
  console.log(`${nBilletes[i]} billetes de S/.${billetes[i]}`)
}