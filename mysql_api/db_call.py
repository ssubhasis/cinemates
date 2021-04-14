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


    def getMoviesBasicByName(self,movieName):

        self.__connect__()
        query = "select title_id ,primary_title, avg_rating, num_of_votes from movies where primary_title like '" + movieName + "%' limit 20;"

        self.cursor.execute(query)
        result = self.cursor.fetchall()

        self.cursor.close()
        self.__disconnect__()

        return result


    def getMoviesBasic(self,movieName,movieGenre,movieRegion,movieRating):

        self.__connect__()
        query = """ select  m.title_id ,m.primary_title, m.avg_rating, m.num_of_votes
                    from movies m, movie_genere mg, movie_language ml
                    where
                    m.title_id= mg.title_id
                    and m.title_id = ml.title_id """
        if movieName:
            query = query + " and m.primary_title like '%"+movieName+"%' "
        if movieGenre:
            query = query + " and mg.genere_name = '"+movieGenre+"'"
        if movieRating:
            query = query + " and m.avg_rating >= "+str(movieRating)+""
        if not movieRegion:
            movieRegion = 'US'
        query = query + " and ml.region = '"+movieRegion+"'"

        query = query + """ group by m.title_id ,m.primary_title, m.avg_rating, m.num_of_votes
                    order by m.num_of_votes desc , avg_rating desc
                    limit 20 """

        self.cursor.execute(query)
        result = self.cursor.fetchall()

        self.cursor.close()
        self.__disconnect__()

        return result


    def getAllMoviesBasic(self):

        self.__connect__()
        query = "select title_id ,primary_title, avg_rating, num_of_votes from movies ;"

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
    
    
    # def getMoviesWithNM(self,titleNM):

    #     self.__connect__()
    #     query = "SELECT * FROM movies where primary_title ='%s';" %titleNM 
    #     print("In db_call")
    #     self.cursor.execute(query)
    #     result = self.cursor.fetchall()

    #     self.cursor.close()
    #     self.__disconnect__()

    #     return result
   
    # def getMoviesByActor(self,titleNM):

    #     self.__connect__()
    #     query = "SELECT * FROM name_basics  where primaryName ='%s';" %titleNM
    #     print("In db_call")
    #     self.cursor.execute(query)
    #     result = self.cursor.fetchall()
        
    #     self.cursor.close()
    #     self.__disconnect__()

    #     return result


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
    

    def getUserMovieRecommendationById(self,userID):

        self.__connect__()
        query = """select u.title_id, u.primary_title, u.avg_rating, u.num_of_votes 
                    from user_movie_recommend_v u 
                    where u.user_id ='%s' 
                    order by u.num_of_votes desc , u.avg_rating desc limit 20;""" %userID

        self.cursor.execute(query)
        result = self.cursor.fetchall()

        self.cursor.close()
        self.__disconnect__()

        return result 


#SIVA API
    def setUserRegistration(self,userId,userName,password,email,birthyear):
        self.__connect__()
        
        query="INSERT INTO users(user_Id,user_name,user_pwd,user_email,birth_year) VALUES (%s, %s,%s,%s,%s)"
        userVal=(userId,userName,password,email,birthyear)
        result=self.cursor.execute(query,userVal)

        self.connection.commit()
        self.cursor.close()
        self.__disconnect__()

        return result


    # def getUserLogin(self,userId,password):

    #     self.__connect__()
    #     query ="select * from users a where a.user_id ='%s' and user_pwd = '%s';" %(userId,password)

    #     self.cursor.execute(query)
    #     result = self.cursor.fetchone()

    #     self.cursor.close()
    #     self.__disconnect__()

    #     return result

    def getActorBasicByName(self,actorName):

        self.__connect__()
        query = "select name_id, name from cast_crew_name where name like '%" + actorName + "%' limit 20;"

        self.cursor.execute(query)
        result = self.cursor.fetchall()

        self.cursor.close()
        self.__disconnect__()

        return result

    def getChartInfoBasicByActor(self,nameId):
        self.__connect__()
        query = "SELECT release_year, avg_rating, num_of_votes FROM role,movies  WHERE movies.title_id=role.title_id and role.name_id ='%s';" %nameId

        self.cursor.execute(query)
        result = self.cursor.fetchall()

        self.cursor.close()
        self.__disconnect__()

        return result
    
#END SIVA API


    def getUserDetails(self,userId):

        self.__connect__()
        query ="select * from users a where a.user_id ='%s' ;" %userId

        self.cursor.execute(query)
        result = self.cursor.fetchone()

        self.cursor.close()
        self.__disconnect__()

        return result 
    

    def getActorInfoById(self,nameId):

        self.__connect__()
        query = """ select ccn.name_id, ccn.name, ccn.birth_year, ccn.death_year, v_ccf.professions
                    from cast_crew_name ccn,
                    (select ccf.name_id, GROUP_CONCAT(ccf.prof_nm) as professions
                    from cast_crew_prof ccf
                    where name_id='"""+nameId+"""'
                    group by ccf.name_id) v_ccf
                    where ccn.name_id = '"""+nameId+"""'
                    and ccn.name_id = v_ccf.name_id;"""

        self.cursor.execute(query)
        result1 = self.cursor.fetchone()

        query = """select kf.name_id, m.title_id, m.primary_title
                    from known_for kf, movies m
                    where kf.name_id='"""+nameId+"""'
                    and kf.title_id=m.title_id;"""

        self.cursor.execute(query)
        result2 = self.cursor.fetchall()

        query = """ select r.catagoty as catagory, r.job, r.movie_characters, 
                    m.primary_title, r.title_id
                from role r,  movies m
                where name_id='"""+nameId+"""'
                and r.title_id=m.title_id; """
        
        self.cursor.execute(query)
        result3 = self.cursor.fetchall()

        self.cursor.close()
        self.__disconnect__()

        return result1,result2,result3

# getDbDetails().getUserMovieRecommendationById('ui00001')
# getDbDetails().getActorInfoById('nm0000138')

