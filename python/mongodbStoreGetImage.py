import requests
import json
from pymongo import MongoClient
from bson.objectid import ObjectId
import base64


response = requests.get("https://teampolaris.web.illinois.edu/highest-voted-top-movies")
response = requests.get("https://teampolaris.web.illinois.edu/highest-voted-trending-movies")

print(response)
response.json()

client = MongoClient('mongodb://user1:pass@127.0.0.1:27017/proj_db')
mydb = client["proj_db"]
mycol = mydb["movies"]


def get_image(image):
    image = '/home/ec2-user/movie_images/'+image
    with open(image, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read())
    # print(encoded_string)
    return encoded_string


# mylist = []

for row in response.json():
    print(row["_id"])
    movie_id = row["titleId"]+".jpg"
    image = get_image(movie_id)
    row["image"] = image
    # mylist.append(row)
    
    mycol.update_one(
    {'_id': row['_id']},
    {'$set': row}, 
    upsert=True)

# mylist = json.dumps(mylist[0])


# x = mycol.insert_many(mylist)
# print(x)


# def insert_image(image):
#     with open(image, "rb") as image_file:
#         encoded_string = base64.b64encode(image_file.read())
#     print encoded_string
#     abc=db.database_name.insert({"image":encoded_string})


# def retrieve_image(request):
#     data = db.database_name.find()
#     data1 = json.loads(dumps(data))
#     img = data1[0]
#     img1 = img['image']
#     decode=img1.decode()
#     img_tag = '<img alt="sample" src="data:image/png;base64,{0}">'.format(decode)
#     return HttpResponse(img_tag)

