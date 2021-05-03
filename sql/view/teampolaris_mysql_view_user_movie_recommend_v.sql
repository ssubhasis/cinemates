-- --------------------------------------------------------
--
-- Structure for view `user_movie_recommend_v`
--
DROP TABLE IF EXISTS `user_movie_recommend_v`;

CREATE ALGORITHM = UNDEFINED DEFINER = `root` @`localhost` SQL SECURITY DEFINER VIEW `user_movie_recommend_v` AS
SELECT
    `m2`.`title_id` AS `title_id`,
    `m2`.`primary_title` AS `primary_title`,
    `m2`.`original_title` AS `original_title`,
    `m2`.`release_year` AS `release_year`,
    `m2`.`runtime` AS `runtime`,
    `m2`.`avg_rating` AS `avg_rating`,
    `m2`.`num_of_votes` AS `num_of_votes`,
    `m2`.`is_adult` AS `is_adult`,
    `tmp`.`user_id` AS `user_id`,
    `tmp`.`gen_nm` AS `gen_nm`
FROM
    (
        (
            `movies` `m2`
        JOIN `movie_compact_genere` `mg2` ON
            (`m2`.`title_id` = `mg2`.`title_id`)
        )
    JOIN(
        SELECT DISTINCT
            `mg`.`gen_nm` AS `gen_nm`,
            `ul`.`user_id` AS `user_id`
        FROM
            (
                `movie_compact_genere` `mg`
            JOIN `user_liking` `ul` ON
                (`mg`.`title_id` = `ul`.`title_id`)
            )
        WHERE
            `ul`.`user_rating` > 5
    ) `tmp`
ON
    (`mg2`.`gen_nm` = `tmp`.`gen_nm`)
    )
WHERE
    !(
        `mg2`.`title_id` IN(
        SELECT
            `ul2`.`title_id`
        FROM
            `user_liking` `ul2`
        WHERE
            `ul2`.`user_id` = `tmp`.`user_id`
    )
    );