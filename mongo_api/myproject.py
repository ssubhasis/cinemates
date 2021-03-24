from flask import Flask
from db import getMongoDbDetails
from get_external_api import getExternalAPI
from bson.json_util import dumps
from flask_cors import CORS,cross_origin
from flask import make_response, jsonify
from http import HTTPStatus
from imdb import IMDb
from flask import request, abort


app = Flask(__name__)
# cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route("/")
@cross_origin()
def hello():
    return "<h1 style='color:blue'>Hello There!..</h1>"


@app.route("/getCusts")
@cross_origin()
def getCusts():
    try:
        mydoc = getMongoDbDetails().getCustomers()

        mydocList = list(mydoc)
        json_data = dumps(mydocList)
        res =  make_response(json_data,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 

    return res


@app.route("/movie/<movieId>",methods=['GET'])
@cross_origin()
def getMovieByID(movieId):

    try:
        mydoc = getMongoDbDetails().getMovie(movieId)
        res =  make_response(mydoc,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 

    return res


@app.route("/movie/<movieId>/image",methods=['GET'])
@cross_origin()
def getMovieImageByID(movieId):

    try:
        mydoc = getMongoDbDetails().getMovieImage(movieId)
        img = mydoc['image']
        decode=img.decode()
        img_tag = '<img alt="sample" src="data:image/png;base64,{0}">'.format(decode)
        res =  make_response(img_tag,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 

    return res


@app.route("/movie/<movieId>/external-image",methods=['GET'])
@cross_origin()
def getMovieExternalImageByID(movieId):
    try:
        ia = IMDb()
        movie = ia.get_movie(str.replace(movieId,'tt',''))
        res = movie['full-size cover url']
    except Exception as e:
        res = "Could not get the movies cover url - " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 

    return res


@app.route("/movies/highestrated",methods=['GET'])
@cross_origin()
def getHighestRatedMovies():
    
    try:
        titles = getExternalAPI().getHighestVotedTopMovies()
        mydoc = getMongoDbDetails().getMovies(titles)

        mydocList = list(mydoc)
        json_data = dumps(mydocList)
        res =  make_response(json_data,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 

    return res


@app.route("/movies/trending",methods=['GET'])
@cross_origin()
def getTrendingMovies():
    
    try:
        titles = ".."
        titles = getExternalAPI().getTrendingMovies()
        mydoc = getMongoDbDetails().getMovies(titles)

        mydocList = list(mydoc)
        json_data = dumps(mydocList)
        res =  make_response(json_data,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e) + str(titles)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 

    return res


@app.route("/user/user-movie-recommendation-by-id/<user_id>",methods=['GET'])
@cross_origin()
def getUserMovieRecommendationById(user_id):
    
    try:
        titles = ".."
        titles = getExternalAPI().getUserMovieRecommendationById(user_id)
        mydoc = getMongoDbDetails().getMovies(titles)

        mydocList = list(mydoc)
        json_data = dumps(mydocList)
        res =  make_response(json_data,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e) + str(titles)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 

    return res


@app.route("/person/<nameId>/external-image",methods=['GET'])
@cross_origin()
def getPersonsExternalImageByID(nameId):
    try:
        ia = IMDb()
        person = ia.get_person(str.replace(nameId,'nm',''))
        res = person['full-size headshot']
    except Exception as e:
        res = "Could not get the movies cover url - " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 

    return res

if __name__ == "__main__":
    app.run(host='0.0.0.0')
