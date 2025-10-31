function gestionarEmpleados(arr){
  let map=new Map()
  arr.forEach(objeto=>{
    if(!map.has(objeto.area)){
      map.set(objeto.area,{empleados:[],promedio:0})
    }
    let areaMap=map.get(objeto.area)
    areaMap.empleados.push(objeto.nombre)
    areaMap.promedio+=objeto.salario
  })
  map.forEach((valor) => {
    valor.promedio/=valor.empleados.length
  })  
  return map
}
const listaEmpleados=[
  {id: 1, nombre:"Juan", area: "Ventas", salario: 2400},
  {id: 2, nombre:"Marta", area: "Ventas", salario: 2600},
  {id: 3, nombre:"Luis", area: "TI", salario: 4000},
  {id: 4, nombre:"Ana", area: "Recursos Humanos", salario: 3000}
]
console.log(gestionarEmpleados(listaEmpleados))