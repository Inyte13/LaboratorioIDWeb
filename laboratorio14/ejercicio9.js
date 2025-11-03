let distanciaEntrePuntos=((x1,y1,x2,y2)=>Math.hypot(x1-x2,y1-y2))
let distanciaAlOrigen=((x,y)=>Math.hypot(x,y))
console.log(`Distancia entre los dos puntos: ${distanciaEntrePuntos(5,2,3,9)}\n
Distancia al origen del punto 5,2: ${distanciaAlOrigen(5,2)}\n
Distancia al origen del punto 3,9: ${distanciaAlOrigen(3,9)}`)