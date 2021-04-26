
-- --------------------------------------------------------

--
-- Table structure for table `user_liking`
--

CREATE TABLE `user_liking` (
  `user_id` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_id` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_rating` float DEFAULT NULL,
  `liking` tinyint(4) NOT NULL DEFAULT 0,
    PRIMARY KEY (`user_id`,`title_id`),
  KEY `user_liking_FK` (`title_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
