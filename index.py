from flask import Flask, jsonify, request
from flask_cors import CORS
import uuid

# initialize our Flask application
app = Flask(__name__)
CORS(app)

@app.route("/", methods=["POST"])
def setName():
    data = request.get_json()

    with open(str(uuid.uuid4()), 'w') as arquivo:
        arquivo.write(str(data))
        
    print("KN PEGUEI OTARIO")
    print("KN PEGUEI OTARIO")
    print("KN PEGUEI OTARIO")
    print("KN PEGUEI OTARIO")
    print("KN PEGUEI OTARIO")
    print("KN PEGUEI OTARIO")
    print(data)
    return data

        
if __name__=='__main__':
    app.run(debug=True)
