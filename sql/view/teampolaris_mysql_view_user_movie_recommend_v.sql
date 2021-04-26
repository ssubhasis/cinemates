
-- --------------------------------------------------------

--
-- Structure for view `user_movie_recommend_v`
--
DROP TABLE IF EXISTS `user_movie_recommend_v`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `user_movie_recommend_v`  AS  select `m2`.`title_id` AS `title_id`,`m2`.`primary_title` AS `primary_title`,`m2`.`original_title` AS `original_title`,`m2`.`release_year` AS `release_year`,`m2`.`runtime` AS `runtime`,`m2`.`avg_rating` AS `avg_rating`,`m2`.`num_of_votes` AS `num_of_votes`,`m2`.`is_adult` AS `is_adult`,`tmp`.`user_id` AS `user_id`,`tmp`.`gen_nm` AS `gen_nm` from ((`movies` `m2` join `movie_compact_genere` `mg2` on(`m2`.`title_id` = `mg2`.`title_id`)) join (select distinct `mg`.`gen_nm` AS `gen_nm`,`ul`.`user_id` AS `user_id` from (`movie_compact_genere` `mg` join `user_liking` `ul` on(`mg`.`title_id` = `ul`.`title_id`))) `tmp` on(`mg2`.`gen_nm` = `tmp`.`gen_nm`)) where !(`mg2`.`title_id` in (select `ul2`.`title_id` from `user_liking` `ul2` where `ul2`.`user_id` = `tmp`.`user_id`)) ;
