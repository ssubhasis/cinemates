import os
import sys
import pprint
from db_call import getDbDetails
from model_converter import modelConverter
from bson.json_util import dumps
from flask import Flask
from flask_cors import CORS,cross_origin
from flask import make_response, jsonify
from http import HTTPStatus


sys.path.insert(0, os.path.dirname(__file__))

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/")
@cross_origin()
def hello():
    return "<h1 style='color:blue'>Hello There!..</h1>"


@app.route("/health")
@cross_origin()
def healthCheck():
    return 'Healthy : Cinemates ....'


@app.route("/about")
@cross_origin()
def aboutHandler():
    return 'This is Cinemates...!'


@app.route("/movies")
@cross_origin()
def getMovies():
    try:
        result = getDbDetails().getMovies()
        # res = dumps(result)
        result = modelConverter().toMovies(result)
        res =  make_response(result,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
    return res


@app.route("/highest-voted-top-movies")
@cross_origin()
def getHighestVotedTopMovies():
    try:
        result = getDbDetails().getHighestVotedTopMovies()
        result = modelConverter().toMovies(result)
        res =  make_response(result,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
    return res