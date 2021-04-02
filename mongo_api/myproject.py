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


@app.route("/movie/<titleId>",methods=['GET'])
@cross_origin()
def getMovieByID(titleId):

    try:
        mydoc = getMongoDbDetails().getMovie(titleId)
        res =  make_response(mydoc,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 

    return res


@app.route("/search-movie-by-id/<titleId>",methods=['GET'])
@cross_origin()
def getMovieInfoByID(titleId):

    try:
        mydoc = getMongoDbDetails().getMovie(titleId)
        movieInfo = getExternalAPI().getMovieInfoByID(titleId)
        movieInfo["cover_url"] = mydoc["cover_url"]
        movieInfo["full_size_url"] = mydoc["full_size_url"]
        res =  make_response(movieInfo,HTTPStatus.OK)
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
        
        # movieName = None
        # movieGenre = None
        # movieRegion = None
        # if 'movieName' in request.json:
        #     movieName = request.json['movieName']
        #     movieName = str.replace(movieName,'%20',' ')
        # if 'movieGenre' in request.json:
        #     movieGenre = request.json['movieGenre']
        # if 'movieRegion' in request.json:
        #     movieRegion = request.json['movieRegion']

        result,titles = getExternalAPI().getMoviesBasic(request.json)
        imageResult = getMongoDbDetails().getMovies(titles)
        imageResult = list(imageResult)
        result = dumps(imageResult)

        # result = dumps(result)
        res =  make_response(result,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 
    return res


@app.route("/movie/<titleId>/image",methods=['GET'])
@cross_origin()
def getMovieImageByID(titleId):

    try:
        mydoc = getMongoDbDetails().getMovieImage(titleId)
        # img = mydoc['image']
        # decode=img.decode()
        # img_tag = '<img alt="sample" src="data:image/png;base64,{0}">'.format(decode)
        img = mydoc['cover_url']        
        res =  make_response(img,HTTPStatus.OK)
    except Exception as e:
        res = "Could not get the movies - " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 

    return res


@app.route("/movie/<titleId>/external-image",methods=['GET'])
@cross_origin()
def getMovieExternalImageByID(titleId):
    try:
        ia = IMDb()
        movie = ia.get_movie(str.replace(titleId,'tt',''))
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


@app.route("/user/user-movie-recommendation-by-id/<userId>",methods=['GET'])
@cross_origin()
def getUserMovieRecommendationById(userId):
    
    try:
        titles = ".."
        titles = getExternalAPI().getUserMovieRecommendationById(userId)
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


@app.route("/movie/post-comment", methods=['POST'])
@cross_origin()
def setUserMovieComments():
    try:
        if not request.json or not 'titleId' in request.json or not 'userId' in request.json or not 'userComment' in request.json:
            res = "Title ID or User ID or Comment not provided"
            res =  make_response(str(res),HTTPStatus.BAD_REQUEST)
            return res
        titleId = request.json['titleId']
        userId = request.json['userId']
        userComment = request.json['userComment']
        

        mydoc = getMongoDbDetails().setUserMovieComments(titleId,userId,userComment)
        res =  make_response(mydoc,HTTPStatus.OK)

    except Exception as e:
        res = "Could not post user comments " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 
    return res


@app.route("/movie/delete-comment", methods=['POST'])
@cross_origin()
def setRemoveUserMovieComments():
    try:
        if not request.json or not 'titleId' in request.json or not 'comment_seq' in request.json:
            res = "Title ID or Comment Sequence not provided"
            res =  make_response(str(res),HTTPStatus.BAD_REQUEST)
            return res
        titleId = request.json['titleId']
        commentSeq = request.json['comment_seq']
        

        mydoc = getMongoDbDetails().setRemoveUserMovieComments(titleId,commentSeq)
        res =  make_response(mydoc,HTTPStatus.OK)

    except Exception as e:
        res = "Could not delete user comments " + str(e)
        res =  make_response(str(res),HTTPStatus.INTERNAL_SERVER_ERROR) 
    return res


if __name__ == "__main__":
    app.run(host='0.0.0.0')
