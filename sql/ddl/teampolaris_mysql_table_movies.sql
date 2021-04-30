
-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `title_id` varchar(12) NOT NULL,
  `primary_title` varchar(2000) DEFAULT NULL,
  `original_title` text DEFAULT NULL,
  `release_year` varchar(10) DEFAULT NULL,
  `runtime` varchar(10) DEFAULT NULL,
  `avg_rating` float DEFAULT NULL,
  `num_of_votes` bigint(20) DEFAULT NULL,
  `is_adult` char(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
