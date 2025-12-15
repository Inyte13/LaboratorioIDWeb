class libro:
  def __init__(self, titulo, autor, fecha_publicacion, esta_disponible):
    self.titulo = titulo
    self.autor = autor
    self.fecha_publicacion = fecha_publicacion
    self.esta_disponible = esta_disponible

  def __str__ (self):
    disponibilidad = "Disponible" if self.esta_disponible else "No disponible"
    return f"Título: {self.titulo}, Autor: {self.autor}, Fecha de Publicación: {self.fecha_publicacion}, Estado: {disponibilidad}"
  
  def prestar(self):
    if self.esta_disponible:
      self.esta_disponible = False
      print(f"El libro '{self.titulo}' ha sido prestado.")
    else:
      print(f"El libro '{self.titulo}' no está disponible para préstamo.")

class libro_digital(libro):
  def __init__(self, titulo, autor, fecha_publicacion, formato, tamaño_mb):
    super().__init__(titulo, autor, fecha_publicacion, True)
    self.formato = formato
    self.tamaño_mb = tamaño_mb

  def prestar(self):
    print("Los libros digitales no se pueden prestar.")
  
  def __str__ (self):
    return f"{super().__str__()}, Formato: {self.formato}, Tamaño: {self.tamaño_mb}MB"
class biblioteca:
  def __init__(self):
    self.libros = []
  
  def agregar_libro(self, libro):
    self.libros.append(libro)

  def listar_libros(self):
    for libro in self.libros:
      print(libro)

  def buscar_por_autor(self, autor):
    resultados = [libro for libro in self.libros if libro.autor == autor]
    for libro in resultados:
      print(libro)
  
  def buscar_por_titulo(self, titulo):
    resultados = [libro for libro in self.libros if libro.titulo == titulo]
    return resultados
  
  def prestar_libro(self, titulo):
    resultados = self.buscar_por_titulo(titulo)
    if resultados:
      resultados[0].prestar()
    else:
      print("No se encontró el libro.")
  
  
libro1 = libro("Libro1", "Autor1", 2025, True)
libro2 = libro("Libro2", "Autor2", 2023, False)
libro3 = libro("Libro3", "Autor3", 2028, True)
libro4 = libro_digital("Libro4", "Autor1", 2025, "PDF", 20)
libro5 = libro_digital("Libro5", "Autor2", 2024, "EPUB", 15)
b = biblioteca()
b.agregar_libro(libro1)
b.agregar_libro(libro2)
b.agregar_libro(libro3)
b.agregar_libro(libro4)
b.agregar_libro(libro5)
b.prestar_libro("Libro1")
b.prestar_libro("Libro4")
b.prestar_libro("Libro4")
b.prestar_libro("Libro4")
b.prestar_libro("Libro4")
b.prestar_libro("Libro4")
b.prestar_libro("Libro2")
b.buscar_por_autor("Autor2")

