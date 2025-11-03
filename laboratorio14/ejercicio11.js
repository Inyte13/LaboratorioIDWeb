class Producto{
  #nombre
  #precio
  #stock
  constructor(nombre,precio,stock){
    this.#nombre=nombre
    this.precio=precio
    this.stock=stock
  }
  set precio(item){
    if(item>=0){
      this.#precio=item
    }else{
      this.#precio=null
    }
  }
  set stock(item){
    this.#stock=(item>=0?item:null)
  }
  get stock(){
    return this.#stock
  }
  vender(cantidad){
    if(this.#stock>=cantidad){
      this.#stock-=cantidad
    }
  }
}
let producto1=new Producto("Leche", 4.3, 3)
producto1.vender(2)
console.log(producto1.stock)
