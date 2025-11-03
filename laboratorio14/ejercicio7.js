let gradosARadianes=(grados=>grados*(Math.PI/180))
let radianesAGrados=(radianes=>radianes*(180/Math.PI))
let angulo=gradosARadianes(45)
console.log(`Angulo: ${angulo}\n
  Seno: ${Math.sin(angulo)}\n
  Coseno: ${Math.cos(angulo)}`)