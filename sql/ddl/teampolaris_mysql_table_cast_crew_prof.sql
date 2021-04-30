
-- --------------------------------------------------------

--
-- Table structure for table `cast_crew_prof`
--

CREATE TABLE `cast_crew_prof` (
  `name_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `prof_nm` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`name_id`,`prof_nm`),
  CONSTRAINT `cast_crew_prof_FK` FOREIGN KEY (`name_id`) REFERENCES `cast_crew_name` (`name_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
