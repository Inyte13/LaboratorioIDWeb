import os

base_dir = os.path.dirname(os.path.abspath(__file__))

origen = os.path.join(base_dir, 'principal.txt')
destino = os.path.join(base_dir, 'copia.txt')

with open(origen, 'r', encoding='utf-8') as f_origen:
    contenido = f_origen.read()

with open(destino, 'w', encoding='utf-8') as f_destino:
    f_destino.write(contenido)

origen_2 = os.path.join(base_dir, 'principal.bin')
destino_2 = os.path.join(base_dir, 'copia.bin')

with open(origen_2, 'rb') as f_origen:
    contenido = f_origen.read()

with open(destino_2, 'wb') as f_destino:
    f_destino.write(contenido)
