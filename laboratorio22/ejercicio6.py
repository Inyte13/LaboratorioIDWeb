from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/sumar', methods=['POST'])
def sumar():
  data = request.get_json()
  
  a = data.get('a')
  b = data.get('b')

  return jsonify({
    'resultado': a + b
  })

if __name__ == "__main__":
  app.run(debug=True)