class Auto{
  constructor(marca,modelo,year){
    this.marca=marca
    this.modelo=modelo
    this.year=year
  }
  detalles(){
    return `Marca: ${this.marca}\nModelo: ${this.modelo}\nAño: ${this.year}`
  }
}
let auto1=new Auto("Toyota", "4Runner", 2006)
console.log(auto1.detalles())