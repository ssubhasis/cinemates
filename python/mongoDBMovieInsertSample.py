
from pymongo import MongoClient
from bson.objectid import ObjectId

client = MongoClient('mongodb://user1:pass@127.0.0.1:27017/proj_db')
mydb = client["proj_db"]
mycol = mydb["movies"]


mylist = [
	{
		"_id": "tt0112502",
		"titleId": "tt0112502",
		"primaryTitle": "Bigfoot",
		"orginalTitle": "Bigfoot",
		"releaseYear": 2017,
		"runtime": 0,
		"director": "Mc Jones",
		"avgRating": 4.5,
		"numOfVotes": 33,
		"rating": "PG-13",
		"genreName": ["Horror","Thriller"],
		"languages": ["english"],
		"cast": [
                {
                    "nameId": "nm6883878",
                    "name": "Mc Jones"
                }, {
                    "nameId": "nm6883879",
                    "name": "Unknown"
                }
            ]
	},
	{
		"_id": "tt0120737",
		"titleId": "tt0120737",
		"primaryTitle": "The Lord of the Rings: The Fellowship of the Ring",
		"orginalTitle": "The Lord of the Rings: The Fellowship of the Ring",
		"releaseYear": 2001,
		"runtime": 178,
		"director": "Peter Jackson",
		"avgRating": 8.8,
		"numOfVotes": 1666586,
		"rating": "PG-13",
		"genreName": ["Action","Adventure","Drama"],
		"languages": ["english","hindi"],
		"cast": [
                {
                    "nameId": "nm6883878",
                    "name": "Mc Jones"
                }, {
                    "nameId": "nm6883879",
                    "name": "Unknown"
                }
            ]
	}
]

x = mycol.insert_many(mylist)
print(x)

id = "tt0120737"
y = mycol.find_one({"_id": id},{ "_id": 0})
print(y)