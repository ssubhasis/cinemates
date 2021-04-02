import requests
import json
from bson.objectid import ObjectId
import base64

class getExternalAPI():

    def __init__(self):
        self.HighestVotedTopMoviesUrl = "https://teampolaris.web.illinois.edu/highest-voted-top-movies"
        self.HighestVotedTrendingMoviesUrl = "https://teampolaris.web.illinois.edu/highest-voted-trending-movies"
        self.UserMovieRecommendationById = "http://teampolaris.web.illinois.edu/user-movie-recommendation-by-id"
        self.MovieInfoById = "https://teampolaris.web.illinois.edu/search-movie-by-id"
        self.SearchMovies = "https://teampolaris.web.illinois.edu/search-movies"


    def getHighestVotedTopMovies(self):
        self.response = requests.get(self.HighestVotedTopMoviesUrl)
        self.titles = []
        for row in self.response.json():
            movie_id = row["titleId"]
            self.titles.append(movie_id)

        return self.titles


    def getTrendingMovies(self):
        self.response = requests.get(self.HighestVotedTrendingMoviesUrl)
        self.titles = []
        for row in self.response.json():
            movie_id = row["titleId"]
            self.titles.append(movie_id)

        return self.titles
    

    def getUserMovieRecommendationById(self, userId):
        self.response = requests.get(self.UserMovieRecommendationById+"/"+userId)
        self.titles = []
        for row in self.response.json():
            movie_id = row["titleId"]
            self.titles.append(movie_id)

        return self.titles


    def getMovieInfoByID(self, titleId):
        self.response = requests.get(self.MovieInfoById+"/"+titleId)

        return self.response.json()
    

    def getMoviesBasic(self,requestJson):
        self.response = requests.post(self.SearchMovies,  json = requestJson)
        self.titles = []
        # print(self.response.text)
        for row in self.response.json():
            movie_id = row["titleId"]
            self.titles.append(movie_id)
        return self.response.json(),self.titles

# requestJson = {"movieName":"The R","movieGenre":"Action","movieRegion":"US"}
# # requestJson = json.dumps(requestJson)
# print(requestJson)
# getExternalAPI().getMoviesBasic(requestJson)