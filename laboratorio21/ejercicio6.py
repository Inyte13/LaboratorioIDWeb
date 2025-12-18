from geometria import Rectangulo, Triangulo, Circulo

r = Rectangulo(4, 5)
t = Triangulo(3, 4)
c = Circulo(4)

print("Rectángulo - Área:", r.area(), "Perímetro:", r.perimetro())
print("Triángulo - Área:", t.area(), "Perímetro:", t.perimetro())
print("Círculo - Área:", c.area(), "Perímetro:", c.perimetro())