import os
os.system("cls")

def espiral(num):
  lista = list(range(1,(num ** 2) + 1))
  matriz = [[0 for _ in range(num)] for _ in range(num)]
  
  for n in range(num):
    matriz[0][n] = n + 1

  for i, n in enumerate(range(num + 1, 2 * num)):
    matriz[i + 1][num - 1] = n

  for i, n in enumerate(reversed(range(num * 2, 3 * num - 1))):
    matriz[num - 1][i] = n

  for i, n in enumerate(range(3 * num - 1, 4 * num - 3)):
    matriz[num - i - 2][0] = n
  
  for fila in matriz:
    print(fila)
while True:
  numero = int(input("Ingrese un número (n >= 3): "))
  if numero < 3:
    print("El número debe ser (n >= 3)")
    continue
  espiral(numero)
  confirmacion = input("Desea repetir (y/n): ")
  if confirmacion.lower() == "n":
    break

