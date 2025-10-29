function tieneDuplicados(arr){
  return new Set(arr).size!==arr.length
}
console.log(tieneDuplicados([32,43,2,432,2,2]))