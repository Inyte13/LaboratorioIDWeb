function mostrarDatos(nombre,edad,...hobbies){
  let str=hobbies.reduce((acc,item)=>{
    return `${acc}, ${item}`
  })
  return `Nombre: ${nombre}, Edad: ${edad}, Hobbies: ${str}`
}
console.log(mostrarDatos("Oriana", 21, "Bailar", "Cantar", "Jugar", "Dibujar"))