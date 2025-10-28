let componerTransformaciones=(f1,f2)=>{return (str)=>{return f2(f1(str))}}
let convertirAMayusculas=(str)=>{return str.toUpperCase()}
let anadirExclamacion=(str)=>{return str+"!"}
let transformar=componerTransformaciones(convertirAMayusculas,anadirExclamacion)
console.log(transformar("hola"))