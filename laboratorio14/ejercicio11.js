class Producto{
  #nombre
  #precio
  #stock
  set precio(item){
    this.#precio=item>=0?item:null
  }
  set stock(item){
    this.#stock=item>=0?item:null
  }
  vender(Cantidad){
  }
}