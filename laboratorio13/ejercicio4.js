function filtrarYTransformar(arr){
  let newArr=arr.filter(item=>item>=0)
  newArr=newArr.map(item=>item**2)
  return newArr
}
console.log(filtrarYTransformar([3,5,2,-2,5,3,-19,20]))