import requests
import json
from bson.objectid import ObjectId
import urllib.request

class getExternalAPI():

    def __init__(self):
        self.MovieInfo = "http://18.206.168.148:5000/movie"


    def getMovieInfoById(self, titleId):
        # print(self.MovieInfo+"/"+titleId)
        self.response = requests.get(self.MovieInfo+"/"+titleId)
        # print(self.response.json())
        
        return self.response.json()

# getExternalAPI().getMovieInfoById("tt0468569")