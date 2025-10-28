function descargarArchivo(url,callback){
  console.log("Descargando")
  callback(url)
}
let callback=(url)=>{console.log(`Descarga completa de ${url}`)}
descargarArchivo("https://127.0.0",callback)
