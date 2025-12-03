salario_base = 1500
horas_extras = 10
pago_hora_extra = 20
bono = 200
afp = 10
salud = 7

salario_bruto = salario_base + (horas_extras * pago_hora_extra) + bono

descuento_afp = salario_base * (afp / 100)
descuento_salud = salario_base * (salud / 100)
descuentos_totales = descuento_afp + descuento_salud

salario_neto = salario_bruto - descuentos_totales

print("Salario bruto:", salario_bruto)
print("Descuentos totales:", descuentos_totales)
print("Salario neto:", salario_neto)