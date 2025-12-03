while True :
  in_mensual = float(input("Ingresa tu sueldo mensual: "))

  in_anual = in_mensual * 14
  impuesto1 = 0
  impuesto2 = 0
  impuesto3 = 0
  impuesto4 = 0
  if 20_000 < in_anual:
    parte1 = 20_000
    parte2 = min(30_000, in_anual - parte1)
    impuesto2 = parte2 * 10 / 100
    if 50_000 < in_anual:
      parte3 = min(50_000, in_anual - parte1 - parte2)
      impuesto3 = parte3 * 20 / 100
      if 100_000 < in_anual:
        parte4 = in_anual - parte1 - parte2 - parte3
        impuesto4 = parte4 * 30 / 100
  impuesto_total = impuesto1 + impuesto2 + impuesto3 + impuesto4
  print(f"Impuesto tramo 1: {impuesto1}")
  print(f"Impuesto tramo 2: {impuesto2}")
  print(f"Impuesto tramo 3: {impuesto3}")
  print(f"Impuesto tramo 4: {impuesto4}")
  print(f"Total impuesto: {impuesto_total}")
  print(f"Tasa efectiva real: {impuesto_total / in_anual * 100}%")

  confirmacion = input("¿Desea repetir? (y/n): ")
  if confirmacion.lower() == "n":
    break           




