let map=new Map([["Leche", 18],["Manzana",22.5],["Platano",19.1]])
let total=[...map.values()].reduce((acc,item)=>acc+=item,0)
console.log(total)