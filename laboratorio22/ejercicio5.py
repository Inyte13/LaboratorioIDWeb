from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
  return """
  <html>
    <body>
      <h1>Servidor activo</h1>
    </body>
  </html>
  """

@app.route('/saludo')
def saludo():
  return jsonify({'msg': 'Hola'})

if __name__ == '__main__':
  app.run(debug=True)