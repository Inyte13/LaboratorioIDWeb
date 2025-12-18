import json

equipos = [
  {
    "nombre": "Real Madrid",
    "pais": "España",
    "nivelAtaque": 90,
    "nivelDefensa": 85
  },
  {
    "nombre": "Manchester City",
    "pais": "Inglaterra",
    "nivelAtaque": 92,
    "nivelDefensa": 88
  },
  {
    "nombre": "Bayern Munich",
    "pais": "Alemania",
    "nivelAtaque": 89,
    "nivelDefensa": 84
  }
]

json_equipos = json.dumps(equipos, indent=4)
print(json_equipos)
