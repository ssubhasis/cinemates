
-- --------------------------------------------------------

--
-- Table structure for table `known_for`
--

CREATE TABLE `known_for` (
  `title_id` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name_id` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
    PRIMARY KEY (`title_id`,`name_id`),
  KEY `known_for_FK` (`name_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
