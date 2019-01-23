DROP DATABASE IF EXISTS tableitSDC;

Create DATABASE tableitSDC;

USE tableitSDC;

CREATE TABLE cuisines (
  id int NOT NULL UNIQUE AUTO_INCREMENT,
  cuisineName varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE restaurants (
  id int NOT NULL UNIQUE AUTO_INCREMENT,
  restaurantName varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE cities (
  id int NOT NULL UNIQUE AUTO_INCREMENT,
  city varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

load data local infile './database/csv/restaurants.csv' into table restaurants fields terminated by ',' lines terminated by '\n';
load data local infile './database/csv/cuisines.csv' into table cuisines fields terminated by ',' lines terminated by '\n';
load data local infile './database/csv/cities.csv' into table cities fields terminated by ',' lines terminated by '\n';