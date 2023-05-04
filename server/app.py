import os
from flask import Flask, redirect
from models import db,Cocktails,Ingredients,connect_db

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL','postgresql:///barmate')
app.config['SECRET_KEY']=os.environ.get("SECRET_KEY","secretsecretsecret")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

with app.app_context():
    connect_db()

