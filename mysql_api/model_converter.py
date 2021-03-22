import json
import collections
import re


class modelConverter():

    def __init__(self):
        self.objects_list = []
        self.info = {}
        self.info_list = []


    def toMovies(self,rows):
        for row in rows:
            d = collections.OrderedDict()
            d["_id"] = row[0]
            d["titleId"] = row[0]
            d["primaryTitle"] = row[1]
            d["orginalTitle"] = row[2]
            d["releaseYear"] = row[3]
            d["runtime"] = int(row[4])
            d["avgRating"] = row[5]
            d["numOfVotes"] = int(row[6])
            d["rating"] = row[7]
            self.objects_list.append(d)
        
        self.json_object = json.dumps(self.objects_list)

        return self.json_object


    def toMoviesName(self,rows):
        for row in rows:
            d = collections.OrderedDict()
            d["_id"] = row[0]
            d["titleId"] = row[0]
            d["primaryTitle"] = row[1]
            self.objects_list.append(d)
        
        self.json_object = json.dumps(self.objects_list)

        return self.json_object


    def toMovieInfo(self,row):
        self.json_object = "dummy"
        try:
            d=collections.OrderedDict()
            d["_id"] = row[0]
            d["titleId"]=row[0]
            d["primaryTitle"] = row[1]
            d["orginalTitle"] = row[2]
            d["releaseYear"] = row[3]
            d["runtime"] = int(row[4])
            d["avgRating"] = row[5]
            d["numOfVotes"] = int(row[6])
            d["IsAdult"] = row[7]
            if row[8]:
                d["Actors"] = re.split(",",row[8])
            if row[9]:
                d["Actress"] = re.split(",",row[9])
            if row[10]:
                d["Director"] = re.split(",",row[10])
            if row[11]:
                d["Writer"] = re.split(",",row[11])
            d["composer"] = row[12]
            if row[13]:
                d["Producer"] = re.split(",",row[13])
            d["Cinematographer"] = row[14]
            d["ProdDesigner"] = row[15]
            d["Editor"] = row[16]

            self.info = d

            self.json_object = json.dumps(self.info)
        except Exception as e:
            res = "Could convert the movie - " + str(e)
            self.json_object = res

        return self.json_object
        

    def toInfoById(self,row):
        d=collections.OrderedDict()
        d["_id"] = row[0]
        d["titleId"]=row[0]
        d["primaryTitle"]=row[1]
        d["orginalTitle"] = row[2]
        d["releaseYear"] = row[3]
        d["runtime"] = int(row[4])
        d["avgRating"] = double(row[5])
        d["numOfVotes"] = int(row[6])
        d["IsAdult"]=row[7]
        tup=re.split(",",row[9])
        d["Actors"]=tup
        tup=re.split(",",row[10])
        d["Actress"]=tup
        d["Director"]=row[11]
        d["Writer"]=row[12]
        d["composer"]=row[13]
        tup=re.split(",",row[14])
        d["Producer"]=tup
        self.info_list.append(d)

        self.json_object = json.dumps(self.info_list)

    def toUserMovieRecommendationById(self,row):
        d=collections.OrderedDict()
        d["_id"] = row[0]
        d["titleId"]=row[0]
        d["primaryTitle"]=row[1]
        d["orginalTitle"] = row[2]
        d["releaseYear"] = row[3]
        d["runtime"] = int(row[4])
        d["avgRating"] = double(row[5])
        d["numOfVotes"] = int(row[6])
        d["IsAdult"]=row[7]
        d["UserId"]=row[8]
        tup=re.split(",",row[9])
        d["Genre"]=tup
        self.info_list.append(d)

