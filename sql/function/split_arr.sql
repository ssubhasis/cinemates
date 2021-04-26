CREATE  FUNCTION `SPLIT_ARR`(
  x VARCHAR(255),
  delim VARCHAR(12),
  pos INT
) RETURNS varchar(255) CHARSET utf8mb4
RETURN REPLACE(SUBSTRING(SUBSTRING_INDEX(x, delim, pos),
       CHAR_LENGTH(SUBSTRING_INDEX(x, delim, pos -1)) + 1),
       delim, '')