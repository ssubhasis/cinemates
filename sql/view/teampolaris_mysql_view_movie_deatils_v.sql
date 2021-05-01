-- --------------------------------------------------------
--
-- Structure for view `movie_deatils_v`
--
DROP TABLE IF EXISTS `movie_deatils_v`;

CREATE ALGORITHM = UNDEFINED DEFINER = `root` @`localhost` SQL SECURITY DEFINER VIEW `movie_deatils_v` AS
select
    `m`.`title_id` AS `title_id`,
    `m`.`primary_title` AS `primary_title`,
    `m`.`original_title` AS `original_title`,
    `m`.`release_year` AS `release_year`,
    `m`.`runtime` AS `runtime`,
    `m`.`avg_rating` AS `avg_rating`,
    `m`.`num_of_votes` AS `num_of_votes`,
    `m`.`is_adult` AS `is_adult`,
    group_concat(
        case
            when `r`.`catagoty` = 'actor' then `c`.`name`
            else NULL
        end separator ','
    ) AS `Actors`,
    group_concat(
        case
            when `r`.`catagoty` = 'actress' then `c`.`name`
            else NULL
        end separator ','
    ) AS `Actress`,
    group_concat(
        case
            when `r`.`catagoty` = 'director' then `c`.`name`
            else NULL
        end separator ','
    ) AS `Director`,
    group_concat(
        case
            when `r`.`catagoty` = 'writer' then `c`.`name`
            else NULL
        end separator ','
    ) AS `Writer`,
    group_concat(
        case
            when `r`.`catagoty` = 'composer' then `c`.`name`
            else NULL
        end separator ','
    ) AS `Composer`,
    group_concat(
        case
            when `r`.`catagoty` = 'producer' then `c`.`name`
            else NULL
        end separator ','
    ) AS `Producer`,
    group_concat(
        case
            when `r`.`catagoty` = 'cinematographer' then `c`.`name`
            else NULL
        end separator ','
    ) AS `Cinematographer`,
    group_concat(
        case
            when `r`.`catagoty` = 'production_designer' then `c`.`name`
            else NULL
        end separator ','
    ) AS `Prod_Designer`,
    group_concat(
        case
            when `r`.`catagoty` = 'editor' then `c`.`name`
            else NULL
        end separator ','
    ) AS `Editor`
from
    (
        (
            `movies` `m`
            join `role` `r` on(`m`.`title_id` = `r`.`title_id`)
        )
        join `cast_crew_name` `c` on(`r`.`name_id` = `c`.`name_id`)
    )
group by
    `m`.`title_id`;