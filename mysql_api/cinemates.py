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
from flask import request, abort


sys.path.insert(0, os.path.dirname(__file__))

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/",methods=['GET'])
@cross_origin()
def hello():
    return "<h1 style='color:blue'>Hello There!..</h1>"


@app.route("/health",methods=['GET'])
@cross_origin()
def healthCheck():
    return 'Healthy : Cinemates ....'


@app.route("/about",methods=['GET'])
@cross_origin()
def aboutHandler():
    return 'This is Cinemates...!'


@app.route("/search-movies/<movieName>",methods=['GET'])
@cross_origin()
def getMovies(movieName):
    try:
        movieName = str.replace(movieName,'%20',' ')
        result = getDbDetails().getMovies(movieName)
        # res = dumps(result)
        result = modelConverter().toMoviesName(result)
        res =  make_response(result,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
    return res


@app.route("/highest-voted-top-movies",methods=['GET'])
@cross_origin()
def getHighestVotedTopMovies():
    try:
        result = getDbDetails().getHighestVotedTopMovies()
        result = modelConverter().toMovies(result)
        res =  make_response(result,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
    return res


@app.route("/highest-voted-trending-movies",methods=['GET'])
@cross_origin()
def getHighestVotedTrendingMovies():
    try:
        result = getDbDetails().getHighestVotedTrendingMovies()
        result = modelConverter().toMovies(result)
        res =  make_response(result,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
    return res

<<<<<<< HEAD
<<<<<<< HEAD

@app.route("/search-movie-by-id/<title_id>", methods=['GET'])
@cross_origin()
def getMovieInfoById(title_id):
    try:
        result = getDbDetails().getMovieInfoById(title_id)
        result = modelConverter().toMovieInfo(result)
        res =  make_response(result,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movie - " + str(e)
    return res


@app.route("/modify-user-liking", methods=['POST'])
@cross_origin()
def setUserLiking():

    try:
        if not request.json or not 'titleId' in request.json or not 'userId' in request.json or not 'rating' in request.json:
            abort(400)
        titleId = request.json['titleId']
        userId = request.json['userId']
        rating = request.json['rating']

        db = getDbDetails()
        result = db.setUserLiking(titleId, userId, rating)

        result = db.getMovieInfoById(titleId)
        result = modelConverter().toMovieInfo(result)
        res =  make_response(str(result),HTTPStatus.OK)
    except Exception as e:
        res = "Could not update the movie - " + str(e)
    return res

@app.route("/search-by-id/<title_id>", methods=['GET'])
@cross_origin()
def getInfoById():
    try:
        result = getDbDetails().getInfoById(title_id)
        result = modelConverter().toInfoById(result)
        res =  make_response(result,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
    return res

app.route("/user-login", methods=['POST'])
@cross_origin()
def setUserLogin():

    try:
        if not request.json or not 'userId' in request.json or not 'password' in request.json:
            abort(400)
        userId = request.json['userId']
        password = request.json['password']

        db = getDbDetails()
        result = db.setUserLogin(userId, password)

        if len(result)==0:
            abort(400)
    except Exception as e:
        res = "Could not set user login - " + str(e)

app.route("/user-registration", methods=['POST'])
@cross_origin()
def setUserRegistration():

    try:
        if not request.json or not 'userId' in request.json or not 'password' in request.json:
            abort(400)
        userId = request.json['userId']
        userName = request.json['userName']
        password = request.json['password']
        email = request.json['emailId']
        birthyear=request.json['birthyear']


        db = getDbDetails()
        result = db.setUserRegistration(userId,userName,password,email,birthyear)

    except Exception as e:
        res = "Could not update user registration " + str(e)

@app.route("/user-movie-recommendation-by-id/<title_id>", methods=['GET'])
@cross_origin()
def getInfoById():
    try:
        result = getDbDetails().getUserMovieRecommendationById(title_id)
        result = modelConverter().toUserMovieRecommendationById(result)
        res =  make_response(result,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
    return res

