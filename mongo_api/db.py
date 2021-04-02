from pymongo import MongoClient
from datetime import datetime
# import collections
# import json


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


    def getMovie(self,titleId):
        self.__connect__("movies")
        mydoc = self.collection.find_one({"_id": titleId},{ "_id": 0, "image": 0})
        self.__disconnect__()

        return mydoc


    def getMovieImage(self,titleId):
        self.__connect__("movies")
        # mydoc = self.collection.find_one({"_id": titleId},{ "_id": 0, "image": 1})
        mydoc = self.collection.find_one({"_id": titleId},{ "_id": 0, "cover_url": 1})
        self.__disconnect__()

        return mydoc


    def getMovies(self,titles):
        self.__connect__("movies")
        mydoc = self.collection.find({"_id": {"$in": titles}}, { "_id": 0, "image": 0, "user_comments": 0})
        self.__disconnect__()

        return mydoc
    

    def setUserMovieComments(self,titleId,userId,userComment):
        self.__connect__("movies")
        userComments = self.collection.find_one({"_id": titleId},{ "_id": 0, "user_comments": 1})
        userComments = userComments.get("user_comments")
        if not userComments:
            userComments = []
        
        comment = {}
        now = datetime.now()
        comment["user_id"] = userId
        comment["user_comment"] = userComment
        comment["comment_time"] = now.strftime("%Y-%m-%d %H:%M:%S")
        comment["comment_seq"] = len(userComments)+1

        userComments.append(comment)

        mydoc = self.collection.update_one({'_id': titleId},{'$set': { 'user_comments': userComments }})
        mydoc =  self.collection.find_one({"_id": titleId},{ "_id": 0, "image": 0})

        self.__disconnect__()

        return mydoc
    

    def setRemoveUserMovieComments(self,titleId,commentSeq):
        self.__connect__("movies")
        # userComments = self.collection.find_one({"_id": titleId},{ "_id": 0, "user_comments": 1})
        # userComments = userComments.get("user_comments")
        # userComments = userComments.pop(commentSeq)

        # mydoc = self.collection.update_one({'_id': titleId},{'$set': { 'user_comments': userComments }})
        self.collection.update({"_id": titleId}, {"$pull": {"user_comments" : {"comment_seq": commentSeq }}})
        mydoc =  self.collection.find_one({"_id": titleId},{ "_id": 0, "image": 0})

        self.__disconnect__()

        return mydoc


# getMongoDbDetails().setUserMovieComments("tt0120737",'ui00001',"I love the movie")