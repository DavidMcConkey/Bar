"""SQLAlchemy models for BarMate"""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Cocktails(db.Model):
    """Type of cocktails along with it's descriptors"""

    __tablename__ = "cocktails"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    iba = db.Column(db.Boolean)
    name = db.Column(db.String(50),unique=True)
    colors = db.Column(db.String(30),nullable=False)
    glass = db.Column(db.String,nullable=False)
    category = db.Column(db.String,nullable=False)
    ingredients = db.Column(db.String,nullable=False)
    garnish = db.Column(db.String,nullable=False)
    preparation = db.Column(db.String,nullable=False)

class Ingredients (db.Model):
    """Type of ingredients for cocktail
       ABV stands for alcohol by volume"""

    __tablename__ = "ingredients"
    id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    name = db.Column(db.String(50),unique = True,nullable=False)
    abv = db.Column(db.Integer,nullable=False)
    taste = db.Column(db.String(50))


def connect_db(app):
    """conncects this db to flask app"""
    db.app = app
    db.init_app(app)
    db.create_all()