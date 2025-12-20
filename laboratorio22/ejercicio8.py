from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class Libro(BaseModel):
  id: int
  titulo: str
  autor: str
  anio: int

libros: list[Libro] = [
  Libro(id=1, titulo="1984", autor="George Orwell", anio=1949)
]

@app.get('/libros')
def get_libros() -> list[Libro]:
  return libros

@app.get('/libros/{id}')
def consultar_libro(id: int) -> Libro:
  for libro in libros:
    if id == libro.id:
      return libro
  raise HTTPException(status_code=404, detail='Libro no encontrado')

@app.post('/libros')
def registrar_libro(libro: Libro):
  libros.append(libro)
  return libros
