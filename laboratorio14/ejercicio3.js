let num=parseFloat(prompt("Escriba un número: "))
let redondeoAbajo=Math.floor(num)
let redondeoArriba=Math.ceil(num)
let redondeoNormal=Math.round(num)
console.log(`\tRedondeo hacia abajo: ${redondeoAbajo}\n
  \tRedondeo hacia arriba: ${redondeoArriba}\n
  \tRedondeo normal: ${redondeoNormal}`)
