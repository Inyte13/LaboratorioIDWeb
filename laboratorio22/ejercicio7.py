from flask import Flask

app = Flask(__name__)

@app.route('/')
def inicio():
  return 'Inicio'

@app.route('/saludo')
def saludo():
  return '¡Hola mundo!'

@app.errorhandler(404)
def not_found(e):
  return '404', 404

if __name__ == '__main__':
  app.run(debug=True)