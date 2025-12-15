from abc import ABC, abstractmethod
import math
class Figura:
  @abstractmethod
  def area(self):
    pass
  
  @abstractmethod
  def perimetro(self):
    pass

class Rectangulo(Figura):
  def __init__(self, ancho, alto):
    self.ancho = ancho
    self.alto = alto

  def area(self):
    return self.ancho * self.alto

  def perimetro(self):
    return 2 * (self.ancho + self.alto)
  
class Triangulo(Figura):
  def __init__(self, base, altura):
    self.base = base
    self.altura = altura

  def area(self):
    return (self.base * self.altura) / 2

  def perimetro(self):
    hipotenusa = math.sqrt((self.base ** 2) + (self.altura ** 2))
    return self.base + self.altura + hipotenusa
  
class Circulo(Figura):
  def __init__(self, radio):
    self.radio = radio

  def area(self):
    return math.pi * (self.radio ** 2)

  def perimetro(self):
    return 2 * math.pi * self.radio
  
r = Rectangulo(4, 5)
t = Triangulo(3, 4)
c = Circulo(4)

print("Rectángulo - Área:", r.area(), "Perímetro:", r.perimetro())
print("Triángulo - Área:", t.area(), "Perímetro:", t.perimetro())
print("Círculo - Área:", c.area(), "Perímetro:", c.perimetro())