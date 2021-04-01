import requests
import json
from bson.objectid import ObjectId
import base64

class getExternalAPI():

    def __init__(self):
        self.HighestVotedTopMoviesUrl = "https://teampolaris.web.illinois.edu/highest-voted-top-movies"
        self.HighestVotedTrendingMoviesUrl = "https://teampolaris.web.illinois.edu/highest-voted-trending-movies"
        self.UserMovieRecommendationById = "http://teampolaris.web.illinois.edu/user-movie-recommendation-by-id"


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