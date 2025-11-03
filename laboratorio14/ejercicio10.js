let arr=[19,20,14,13,11]
let max=Math.max(...arr)
let arrNormalizado=arr.map(item=>item/max)
console.log(arrNormalizado)