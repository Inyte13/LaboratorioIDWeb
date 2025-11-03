let generadorContrasena=()=>{
  let contrasena=""
  for(let i=0;i<6;i++){
    contrasena+=Math.floor((Math.random()*(9))+1)
  }
  return contrasena
}
console.log(generadorContrasena())