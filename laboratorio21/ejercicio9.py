import time
import random
import threading
import asyncio
import multiprocessing

def consulta_sync(nombre):
    tiempo = random.randint(1, 5)
    print(f"Consulta {nombre} iniciada ({tiempo}s)")
    time.sleep(tiempo)
    print(f"Consulta {nombre} finalizada")

def ejecutar_hilos():
    print("\n--- HILOS ---")
    inicio = time.time()
    hilos = []

    for i in range(3):
        t = threading.Thread(target=consulta_sync, args=(i + 1,))
        hilos.append(t)
        t.start()

    for t in hilos:
        t.join()

    print("Tiempo total (hilos):", round(time.time() - inicio, 2), "s")

async def consulta_async(nombre):
    tiempo = random.randint(1, 5)
    print(f"Consulta {nombre} iniciada ({tiempo}s)")
    await asyncio.sleep(tiempo)
    print(f"Consulta {nombre} finalizada")

async def ejecutar_async():
    print("\n--- ASYNCIO ---")
    inicio = time.time()

    await asyncio.gather(
        consulta_async(1),
        consulta_async(2),
        consulta_async(3)
    )

    print("Tiempo total (async):", round(time.time() - inicio, 2), "s")

def ejecutar_procesos():
    print("\n--- PROCESOS ---")
    inicio = time.time()
    procesos = []

    for i in range(3):
        p = multiprocessing.Process(target=consulta_sync, args=(i + 1,))
        procesos.append(p)
        p.start()

    for p in procesos:
        p.join()

    print("Tiempo total (procesos):", round(time.time() - inicio, 2), "s")

if __name__ == "__main__":
    ejecutar_hilos()
    asyncio.run(ejecutar_async())
    ejecutar_procesos()
