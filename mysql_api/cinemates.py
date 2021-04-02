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


@app.route("/movies",methods=['GET'])
@cross_origin()
def getAllMoviesBasic():
    try:
        result = getDbDetails().getAllMoviesBasic()
        # res = dumps(result)
        result = modelConverter().toMoviesBasic(result)
        res =  make_response(result,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 
    return res


@app.route("/search-movies/<movieName>",methods=['GET'])
@cross_origin()
def getMoviesBasicByName(movieName):
    try:
        movieName = str.replace(movieName,'%20',' ')
        result = getDbDetails().getMoviesBasicByName(movieName)
        # res = dumps(result)
        result = modelConverter().toMoviesBasic(result)
        res =  make_response(result,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 
    return res


@app.route("/search-movies",methods=['POST'])
@cross_origin()
def getMoviesBasic():
    try:
        if not request.json:
            abort(400)
        
        movieName = None
        movieGenre = None
        movieRegion = None
        if 'movieName' in request.json:
            movieName = request.json['movieName']
            movieName = str.replace(movieName,'%20',' ')
        if 'movieGenre' in request.json:
            movieGenre = request.json['movieGenre']
        if 'movieRegion' in request.json:
            movieRegion = request.json['movieRegion']

        result = getDbDetails().getMoviesBasic(movieName,movieGenre,movieRegion)
        # res = dumps(result)
        result = modelConverter().toMoviesBasic(result)
        res =  make_response(result,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 
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
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 
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
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 
    return res


@app.route("/search-movie-by-id/<title_id>", methods=['GET'])
@cross_origin()
def getMovieInfoById(title_id):
    try:
        result = getDbDetails().getMovieInfoById(title_id)
        result = modelConverter().toMovieInfo(result,False)
        res =  make_response(result,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movie - " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 
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
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 
    return res


@app.route("/user-movie-recommendation-by-id/<user_id>", methods=['GET'])
@cross_origin()
def getUserMovieRecommendationById(user_id):
    try:
        result = getDbDetails().getUserMovieRecommendationById(user_id)
        result = modelConverter().toMoviesBasic(result, False)            
        res =  make_response(result,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 
    return res


@app.route("/user-details/<user_id>", methods=['GET'])
@cross_origin()
def getUserDetails(user_id):
    try:
        result = getDbDetails().getUserDetails(user_id)
        result = modelConverter().toUserInfo(result)
        res =  make_response(result,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the user - " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 
    return res


#SIVA APIS
@app.route("/user-login", methods=['POST'])
@cross_origin()
def setUserLogin():

    try:
        if not request.json or not 'userId' in request.json or not 'password' in request.json:
            res = "User ID or Password not provided"
            res =  make_response(str(res),HTTPStatus.BAD_REQUEST)
            return res
        userId = request.json['userId']
        password = request.json['password']

        db = getDbDetails()
        # result = db.getUserLogin(userId, password)
        result = db.getUserDetails(userId)

        if not result or password != result[2]:
            res = "User ID or Password does not match"
            res =  make_response(str(res),HTTPStatus.UNAUTHORIZED)
            return res

        result = modelConverter().toUserInfo(result)
        res =  make_response(result,HTTPStatus.OK)
    except Exception as e:
        res = "Could not login user - " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR)        

    return res


@app.route("/user-registration", methods=['POST'])
@cross_origin()
def setUserRegistration():

    try:
        if not request.json or not 'userName' in request.json or not 'password' in request.json or not 'userId' in request.json:
            res = "User name or Password or User ID not provided"
            res =  make_response(str(res),HTTPStatus.BAD_REQUEST)
            return res
        userId = request.json['userId']
        userName = request.json['userName']
        password = request.json['password']
        email = request.json['emailId']
        birthyear=request.json['birthyear']

        db = getDbDetails()
        result = db.getUserDetails(userId)

        if result:
            res = "User already exists"
            res =  make_response(str(res),HTTPStatus.BAD_REQUEST)
            return res

        res = db.setUserRegistration(userId,userName,password,email,birthyear)
        
        result = db.getUserDetails(userId)
        result = modelConverter().toUserInfo(result)

        res =  make_response(result,HTTPStatus.OK)
    except Exception as e:
        res = "Could not update user registration " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 
    return res

@app.route("/search-actors/<actors>",methods=['GET'])
@cross_origin()
def getActorNamesBasicByName(actors):
    try:
        actorName = str.replace(actors,'%20',' ')
        result = getDbDetails().getActorBasicByName(actorName)
        # res = dumps(result)
        result = modelConverter().toActorBasic(result)
        res =  make_response(result,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 
    return res

#END SIVA API

# getHighestVotedTopMovies()