class OperadorNoValidoError(Exception):
  def __init__(self, operador):
    super().__init__(f"Operador no válido: {operador}")

operadores = "+-*/"

operacion = "10 / 2"
try:    
  num1_str, operador, num2_str = operacion.split()

  if operador in operadores:
    num1 = float(num1_str)
    num2 = float(num2_str)
    if operador == "+":
      resultado = num1 + num2
    elif operador == "-":
      resultado = num1 - num2
    elif operador == "*":
      resultado = num1 * num2
    elif operador == "/":
      if num2 != 0:
        resultado = num1 / num2

except ValueError:
  resultado = "Error: Entrada inválida. Asegúrese de ingresar una operación en el formato 'número operador número'."
except OperadorNoValidoError as e:
  resultado = f"Error: {e}"

print("Resultado:", resultado)
  
