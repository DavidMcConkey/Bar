import os
from flask import Flask, request,jsonify
from models import connect_db
from seed import seed
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL','postgresql:///barmate')
app.config['SECRET_KEY']=os.environ.get("SECRET_KEY","secretsecretsecret")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

with app.app_context():
    connect_db(app)
    seed()

@app.route('/data', methods=["POST"])
def get_data():
    data = request.get_json()
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)

