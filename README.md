# cinemates

## Application page

https://teampolaris.web.illinois.edu/index


## get movie details from MongoDB for top movies

http://18.206.168.148:5000/movie/`<titleId`>

http://18.206.168.148:5000/movie/tt0120737


## get movie image from MongoDB for top movies (small pic)

http://18.206.168.148:5000/movie/`<titleId`>/image

http://18.206.168.148:5000/movie/tt0120737/image


## get movie image url from external (full size images)

http://18.206.168.148:5000/movie/`<titleId`>/external-image

http://18.206.168.148:5000/movie/tt0120737/external-image


## get highest rated movies details from MongoDB

http://18.206.168.148:5000/movies/highestrated


## get highest rated trending movies details from MongoDB

http://18.206.168.148:5000/movies/trending


## get Movie names from MySQL

https://teampolaris.web.illinois.edu/search-movies/`<movie name`>

https://teampolaris.web.illinois.edu/search-movies/The%20Rev


## get movie details from MySQL

https://teampolaris.web.illinois.edu/search-movie-by-id/`<titleId`>

https://teampolaris.web.illinois.edu/search-movie-by-id/tt0468569


## get all movies basic from MySQL (internal)

https://teampolaris.web.illinois.edu/search-movie-by-id/movies



## get highest rated movies name from MySQL (internal)

https://teampolaris.web.illinois.edu/highest-voted-top-movies


## get highest rated trending movies name from MySQL (internal)

https://teampolaris.web.illinois.edu/highest-voted-trending-movies


## get Persons image url from external (full size images)

http://18.206.168.148:5000/person/`<nconst`>/external-image

http://18.206.168.148:5000/person/nm0001392/external-image


## post/set User Liking in MySQL

https://teampolaris.web.illinois.edu/modify-user-liking

Request Body:

{"titleId":"tt0035423",
"userId":"ui00001",
"rating":4}


## post api - get user loging in MySQL

https://teampolaris.web.illinois.edu/user-login

Request Body:

{"userId":"ui015113",
"password":"01134234"}


## get user details from MySQL

https://teampolaris.web.illinois.edu/user-details/ui00001


## post api - register user in MySQL

https://teampolaris.web.illinois.edu/user-registration

Request Body:

{"userId":"ui015117",
"userName":"SubhasisS",
"password":"12345",
"emailId":"abcs@gmail.com",
"birthyear":"1991"
}


## get users movie recomendation by user id from MySQL

http://teampolaris.web.illinois.edu/user-movie-recommendation-by-id/`<user id>`

http://teampolaris.web.illinois.edu/user-movie-recommendation-by-id/ui00001

