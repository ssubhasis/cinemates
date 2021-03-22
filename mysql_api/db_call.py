import mysql.connector

class getDbDetails():

    def __init__(self):
        self.user ="teampolaris_user"
        self.password = "3NExPczF64!PT9M"
        self.host= "localhost"
        self.port =3306
        self.database ="teampolaris_mysql"

    #connect Database
    def __connect__(self):

        self.connection = mysql.connector.connect(user = self.user,
                password =self.password,
                host= self.host,
                port = self.port,
                database = self .database)

        self.cursor = self.connection.cursor()


    def __disconnect__(self):

        self.connection.close()


    def getMovies(self,movieName):

        self.__connect__()
        query = "select title_id ,primary_title from movies where primary_title like '" + movieName + "%' limit 20;"""

        self.cursor.execute(query)
        result = self.cursor.fetchall()

        self.cursor.close()
        self.__disconnect__()

        return result


    def getHighestVotedTopMovies(self):

        self.__connect__()
        query = """select   title_id ,primary_title ,original_title ,release_year
                            ,case runtime when '' then 0 when null  then 0 ELSE runtime end as runtime ,avg_rating
                            ,case num_of_votes when '' then 0 when null then 0 ELSE num_of_votes end as num_of_votes ,is_adult 
                    from movies m order by m.num_of_votes desc , avg_rating desc limit 20;"""

        self.cursor.execute(query)
        result = self.cursor.fetchall()

        self.cursor.close()
        self.__disconnect__()

        return result


    def getHighestVotedTrendingMovies(self):

        self.__connect__()
        query = """select   title_id ,primary_title ,original_title ,release_year
                            ,case runtime when '' then 0 when null  then 0 ELSE runtime end as runtime ,avg_rating
                            ,case num_of_votes when '' then 0 when null then 0 ELSE num_of_votes end as num_of_votes ,is_adult 
                    from movies m 
                    where release_year = '2020'
                    order by m.num_of_votes desc , avg_rating desc limit 20;"""

        self.cursor.execute(query)
        result = self.cursor.fetchall()

        self.cursor.close()
        self.__disconnect__()

        return result


    def getMoviesWithID(self,titleID):

        self.__connect__()
        query = "select * from movies where title_id ='%s';" %titleID

        self.cursor.execute(query)
        result = self.cursor.fetchall()

        self.cursor.close()
        self.__disconnect__()

        return result


    def getMoviesWithNM(self,titleNM):

        self.__connect__()
        query = "SELECT * FROM movies where primary_title ='%s';" %titleNM 
        print("In db_call")
        self.cursor.execute(query)
        result = self.cursor.fetchall()

        self.cursor.close()
        self.__disconnect__()

        return result
   
    def getMoviesByActor(self,titleNM):

        self.__connect__()
        query = "SELECT * FROM name_basics  where primaryName ='%s';" %titleNM
        print("In db_call")
        self.cursor.execute(query)
        result = self.cursor.fetchall()
        
        self.cursor.close()
        self.__disconnect__()

        return result

    def getInfoById(self,titleID):

        self.__connect__()
        query = "select * from movie_deatils_v a where a.title_id ='%s';" %titleID

        self.cursor.execute(query)
        result = self.cursor.fetchall()

        self.cursor.close()
        self.__disconnect__()

        return result


    def getMovieInfoById(self,titleID):

        self.__connect__()
        query = "select * from movie_deatils_v a where a.title_id ='%s';" %titleID

        self.cursor.execute(query)
        result = self.cursor.fetchone()

        self.cursor.close()
        self.__disconnect__()

        return result
    

    def setUserLiking(self, titleId, userId, rating):

        self.__connect__()

        args = [titleId, userId, rating]
        result = self.cursor.callproc('p_handle_user_rating', args)
        self.connection.commit()

        self.cursor.close()
        self.__disconnect__()

        return result

    def setUserLogin(self,userId,password):
        self.__connect__()
        query ="select * from users a where a.user_name ='%s' AND a.user_pwd='%s';" %usedId,%password

        self.cursor.execute(query)
        result=self.cursor.fetchone()

        self.cursor.close()
        self.__disconnect__()

        return result

# getDbDetails().getHighestVotedTrendingMovies()

