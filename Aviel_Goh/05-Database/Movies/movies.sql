CREATE DATABASE movies_omdb;
\c movies_omdb

CREATE TABLE movies
(
  id SERIAL4 PRIMARY KEY,
  imdbid VARCHAR(500) NOT NULL,
  title VARCHAR(500) NOT NULL,
  year VARCHAR(200),
  rated VARCHAR(200),
  runtime VARCHAR(200),
  genre VARCHAR(1000),
  released VARCHAR(500),
  imdbrating VARCHAR(200),
  plot VARCHAR(50000),
  director VARCHAR(500),
  writer VARCHAR(500),
  actors VARCHAR(2000),
  poster VARCHAR(10000)
);
