CREATE  PROCEDURE `p_movie_gen`()
BEGIN
    declare tot_pos int;
    declare t_id, genr varchar(2000);
    declare j int;
    declare gen varchar(255);
   #DECLARE _output TEXT DEFAULT '';
   

    declare cur cursor for select tconst,genres from title_basic where startYear >1999
	and titleType ='movie' ;

    #set i=0;

    open cur;


    start_loop: loop
        fetch cur into t_id,genr;
       		#SET _output = CONCAT(_output, ",", i);
       		select LENGTH (genr) - LENGTH (replace(genr, ',', ''))+1 into tot_pos;
       		set j=1;
       		WHILE (j<=tot_pos) DO
       			select  SPLIT_ARR(genr,",",j) into gen ;
       			insert into movie_genere(title_id ,genere_name) VALUES (t_id,gen);
       			set j= j+1;
       		END WHILE;
       			
            #set i=i+1;

    end loop;

    close cur;
   #SELECT _output;

END