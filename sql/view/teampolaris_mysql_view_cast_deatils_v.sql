
-- --------------------------------------------------------

--
-- Structure for view `cast_deatils_v`
--
DROP TABLE IF EXISTS `cast_deatils_v`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `cast_deatils_v`  AS  select `ccn`.`name_id` AS `name_id`,`ccn`.`name` AS `name`,`ccn`.`birth_year` AS `birth_year`,`ccn`.`death_year` AS `death_year`,group_concat(`m`.`primary_title` separator ',') AS `known_for_movie` from ((`cast_crew_name` `ccn` join `known_for` `kf` on(`ccn`.`name_id` = `kf`.`name_id`)) join `movies` `m` on(`kf`.`title_id` = `m`.`title_id`)) group by `ccn`.`name_id` ;
