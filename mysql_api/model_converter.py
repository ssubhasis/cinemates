import json
import collections
import re
from imdb import IMDb 


class modelConverter():

    def __init__(self):
        self.objects_list = []
        self.info = {}


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


    def toMoviesBasic(self,rows,getExternalImage=False):
        ia = IMDb()
        for row in rows:
            d = collections.OrderedDict()
            d["_id"] = row[0]
            d["titleId"] = row[0]
            d["primaryTitle"] = row[1]
            d["avgRating"] = row[2]
            d["numOfVotes"] = row[3]
            
            if(getExternalImage):
                try:                    
                    movie = ia.get_movie(str.replace(row[0],'tt',''))
                    cover_url = movie['cover url']
                    full_size_url = movie['full-size cover url']
                except Exception as e:
                    cover_url = 'https://st.depositphotos.com/1654249/2526/i/600/depositphotos_25269433-stock-photo-3d-man-with-red-question.jpg'
                    full_size_url = 'https://st.depositphotos.com/1654249/2526/i/600/depositphotos_25269433-stock-photo-3d-man-with-red-question.jpg'
                d["cover_url"] = cover_url
                d["full_size_url"] = full_size_url

            self.objects_list.append(d)
        
        self.json_object = json.dumps(self.objects_list)

        return self.json_object


    def toActorBasic(self,rows):

        for row in rows:
            d=collections.OrderedDict()
            d["_id"]=row[0]
            d["_name"]=row[1]
            self.objects_list.append(d)

        self.json_object=json.dumps(self.objects_list)

        return self.json_object


    def toMovieInfo(self,row,getExternalImage=False):
        self.json_object = "dummy"
        ia = IMDb()
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

            if(getExternalImage):
                try:                    
                    movie = ia.get_movie(str.replace(row[0],'tt',''))
                    full_size_url = movie['full-size cover url']
                except Exception as e:
                    full_size_url = 'https://st.depositphotos.com/1654249/2526/i/600/depositphotos_25269433-stock-photo-3d-man-with-red-question.jpg'
                d["full_size_url"] = full_size_url

            self.info = d

            self.json_object = json.dumps(self.info)
        except Exception as e:
            res = "Could convert the movie - " + str(e)
            self.json_object = res

        return self.json_object
    

    def toUserInfo(self,row):
        self.json_object = "dummy"
        try:
            d=collections.OrderedDict()
            d["userId"] = row[0]
            d["userName"] = row[1]
            d["userPassword"] = row[2]
            d["userEmail"] = row[3]
            d["userBirthYear"] = row[4]

            self.info = d
            self.json_object = json.dumps(self.info)
        except Exception as e:
            res = "Could convert the user - " + str(e)
            self.json_object = res

        return self.json_object
