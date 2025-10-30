function combinarCatalogos(tienda1, tienda2){
  let union={}
  for(let key of new Set([...Object.keys(tienda1),...Object.keys(tienda2)])){
    union[key]=Math.max(tienda1[key]||0,tienda2[key]||0).toFixed(2)
  }
  return union
}
let tiendaA={"laptop":3500,"mouse":100.35,"teclado":250.9}
let tiendaB={"mouse":95.2,"monitor":720.457,"teclado":260.1}
console.log(combinarCatalogos(tiendaA,tiendaB))