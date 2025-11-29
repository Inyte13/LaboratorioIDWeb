import { sumar, restar } from './sumaResta.js'
import multiplicar, { dividir } from './multiplicacionDivision.js'
console.log('Suma:', sumar(3, 4))
console.log('Resta:', restar(3, 5))
console.log('Multiplicar:', multiplicar(4, 10))
try {
  console.log('Dividir:', dividir(1, 0))
} catch (e) {
  console.log(e)
}