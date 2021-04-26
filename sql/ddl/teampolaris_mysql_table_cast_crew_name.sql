
-- --------------------------------------------------------

--
-- Table structure for table `cast_crew_name`
--

CREATE TABLE `cast_crew_name` (
  `name_id` varchar(12) NOT NULL,
  `name` varchar(100) NOT NULL,
  `birth_year` varchar(5) DEFAULT NULL,
  `death_year` varchar(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
