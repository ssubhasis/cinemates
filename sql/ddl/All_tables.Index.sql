
--
-- Indexes for dumped tables
--

--
-- Indexes for table `cast_crew_name`
--
ALTER TABLE `cast_crew_name`
  ADD PRIMARY KEY (`name_id`);

--
-- Indexes for table `cast_crew_prof`
--
ALTER TABLE `cast_crew_prof`
  ADD PRIMARY KEY (`name_id`,`prof_nm`),
  ADD KEY `cast_crew_prof_name_id_idx` (`name_id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `known_for`
--
ALTER TABLE `known_for`
  ADD PRIMARY KEY (`title_id`,`name_id`),
  ADD KEY `known_for_FK` (`name_id`) USING BTREE,
  ADD KEY `mv_id` (`title_id`) USING BTREE,
  ADD KEY `nm_id` (`name_id`) USING BTREE;

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`title_id`) USING HASH;

--
-- Indexes for table `movie_compact_genere`
--
ALTER TABLE `movie_compact_genere`
  ADD PRIMARY KEY (`title_id`);

--
-- Indexes for table `movie_genere`
--
ALTER TABLE `movie_genere`
  ADD PRIMARY KEY (`title_id`,`genere_name`),
  ADD KEY `title_id` (`title_id`) USING HASH;

--
-- Indexes for table `movie_language`
--
ALTER TABLE `movie_language`
  ADD PRIMARY KEY (`title_id`,`ordrng`);

--
-- Indexes for table `review_comments`
--
ALTER TABLE `review_comments`
  ADD PRIMARY KEY (`title_id`,`cid`,`user_id`),
  ADD KEY `cid` (`cid`) USING BTREE,
  ADD KEY `user_id` (`user_id`) USING BTREE;

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`title_id`,`catagoty`,`name_id`),
  ADD KEY `role_FK_1` (`name_id`) USING BTREE,
  ADD KEY `mv_id` (`title_id`) USING BTREE,
  ADD KEY `crew_id` (`name_id`) USING BTREE;

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `user_liking`
--
ALTER TABLE `user_liking`
  ADD PRIMARY KEY (`user_id`,`title_id`),
  ADD KEY `user_liking_FK` (`title_id`) USING BTREE;
