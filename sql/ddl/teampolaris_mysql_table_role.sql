
-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `title_id` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_in_title` int(11) DEFAULT NULL,
  `catagoty` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `job` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `movie_characters` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name_id` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`title_id`,`catagoty`,`name_id`),
  KEY `role_FK_1` (`name_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
