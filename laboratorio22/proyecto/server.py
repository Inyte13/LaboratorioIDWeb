from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field
import os
from fastapi.responses import FileResponse

app = FastAPI()
app.mount('/static', StaticFiles(directory='static'), name='static')

class Equipo(BaseModel):
  id: int
  nombre: str
  ciudad: str
  nivelAtaque: int
  nivelDefensa: int

class EquipoCreate(BaseModel):
  nombre: str
  ciudad: str
  nivelAtaque: int = Field(..., ge=1, le=10)
  nivelDefensa: int = Field(..., ge=1, le=10)

equipos: list[Equipo] = [
  Equipo(id=3, nombre="Melgar", ciudad="Arequipa", nivelAtaque=5, nivelDefensa=4),
  Equipo(id=2, nombre="Barcelona", ciudad="Barcelona", nivelAtaque=9, nivelDefensa=8),
  Equipo(id=1, nombre="Real Madrid", ciudad="Madrid", nivelAtaque=10, nivelDefensa=9),
]

@app.get('/')
def root():
  base_dir = os.path.dirname(os.path.abspath(__file__))
  return FileResponse(os.path.join(base_dir, "static", "index.html"))

@app.get('/equipos')
def listar_equipos():
  return equipos

@app.get('/equipos/{id}')
def consultar_equipo(id: int):
  for equipo in equipos:
    if equipo.id == id:
      return equipo
  raise HTTPException(status_code=404, detail='Equipo no encontrado')

@app.post('/equipos')
def registrar_equipo(equipo: EquipoCreate):
  nuevo_id = equipos[-1].id + 1 if equipos else 1
  nuevo_equipo = Equipo(
    id=nuevo_id,
    nombre=equipo.nombre,
    ciudad=equipo.ciudad,
    nivelAtaque=equipo.nivelAtaque,
    nivelDefensa=equipo.nivelDefensa
  )
  equipos.append(nuevo_equipo)
  return equipos