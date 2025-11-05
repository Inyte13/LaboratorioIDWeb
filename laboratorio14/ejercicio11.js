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
    let value=Number(item)
    value=value>=0?value:0
    this.#precio=value.toFixed(2)
  }
  set stock(item){
    this.#stock=item>=0?item:null
  }
  get precio(){
    return `S/.${this.#precio}`
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
producto1.precio="12.4392"
console.log(producto1.precio)
