from pymongo import MongoClient


class getMongoDbDetails():

    def __init__(self):
        self.connectionString ="mongodb://user1:pass@127.0.0.1:27017/proj_db"
        self.database ="proj_db"
    
    
    #connect Database
    def __connect__(self,collectionName):
        self.client = MongoClient(self.connectionString)
        self.db = self.client[self.database]
        self.collectionName = collectionName
        self.collection = self.db[self.collectionName]


    def __disconnect__(self):
        self.client.close()


    def getCustomers(self):
        self.__connect__("customers")
        mydoc = self.collection.find({},{ "_id": 0, "name": 1 })
        self.__disconnect__()

        return mydoc


    def getMovie(self,movieId):
        self.__connect__("movies")
        mydoc = self.collection.find_one({"_id": movieId},{ "_id": 0, "image": 0})
        self.__disconnect__()

        return mydoc


    def getMovieImage(self,movieId):
        self.__connect__("movies")
        mydoc = self.collection.find_one({"_id": movieId},{ "_id": 0, "image": 1})
        self.__disconnect__()

        return mydoc


    def getMovies(self,titles):
        self.__connect__("movies")
        mydoc = self.collection.find({"_id": {"$in": titles}}, { "_id": 0, "image": 0})
        self.__disconnect__()

        return mydoc