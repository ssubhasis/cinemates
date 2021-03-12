import json
import collections


class modelConverter():

    def __init__(self):
        self.objects_list = []


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