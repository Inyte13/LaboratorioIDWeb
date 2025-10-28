function filtarArr(arr,callback){
  let arrFiltrado=[]
  for(let item of arr){
    if(callback(item)){
      arrFiltrado.push(item)
    }
  }
  return arrFiltrado
}
function esUno(num){
  return num===1
}
console.log(filtarArr([3,1,4,3,1,1,4,5,3,5],esUno))