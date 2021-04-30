CREATE PROCEDURE `p_handle_user_rating_new`(IN movieId varchar(12),
IN userId varchar(12), 
IN rating float ,
IN liking_inp int )
BEGIN
    declare cnt int;
    declare prev_rating float;
   	declare usr_lk int;
   
	select count(1) into cnt from user_liking where user_id= userID and title_id = movieID;
 
 	if cnt = 0 then
 		insert into user_liking values(userID,movieID,rating,liking_inp);
 	
 		if rating is not null then 
 	 
 			update movies 
 			set num_of_votes = num_of_votes +1,
 				avg_rating = ((avg_rating*num_of_votes )+ rating) / (num_of_votes +1)
 			where title_id = movieID;
 		end if;
	
 	else 
 	
 		select COALESCE(liking ,null,0) ,user_rating into usr_lk,prev_rating from user_liking 
 		where user_id= userID and title_id = movieID;

 	
 		if rating is not null then 
	
	 		if rating = 0  then  
	 		
	 			update user_liking 
	 			set user_rating = 0 
	 			where user_id= userID and title_id = movieID;
	 		
	 			update movies 
	 			set num_of_votes = num_of_votes - 1,
	 				avg_rating = ((avg_rating*num_of_votes )- prev_rating) / (num_of_votes-1)
	 			where title_id = movieID;
				
			
	 		else 
	 			
	 			
	 			update user_liking
	 			set user_rating = rating 
	 			where user_id =user_id 
	 			and title_id = movieID;
	 			
	 			update movies 
	 			set avg_rating = (((avg_rating*num_of_votes )- prev_rating)+ rating) / num_of_votes
	 			where title_id = movieID;
	
			
				
	 		end if;
	
 		else if  liking_inp <> usr_lk then
 			update user_liking 
 			set liking  = liking_inp
 			where user_id= userID and title_id = movieID;
 		
 		end if;
 	
 	end if;
		
 	end if;
END