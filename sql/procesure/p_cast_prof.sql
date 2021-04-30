CREATE  PROCEDURE `p_cast_prof`()
BEGIN
    declare tot_pos int;
    declare n_id, pmProf varchar(2000);
    declare j int;
    declare prof varchar(255);
   #DECLARE _output TEXT DEFAULT '';
   

    declare cur cursor for select nconst,primaryProfession from polaris.name_basics;


    #set i=0;

    open cur;


    start_loop: loop
        fetch cur into n_id,pmProf;
       		#SET _output = CONCAT(_output, ",", i);
       		select LENGTH (pmProf) - LENGTH (replace(pmProf, ',', ''))+1 into tot_pos;
       		set j=1;
       		WHILE (j<=tot_pos) DO
       			select  SPLIT_ARR(pmProf,",",j) into prof ;
       			insert into polaris.cast_crew_prof(name_id ,prof_nm) VALUES (n_id,prof);
       			set j= j+1;
       		END WHILE;
       			
            #set i=i+1;

    end loop;

    close cur;
   #SELECT _output;

END