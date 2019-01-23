drop database if exists tableitsdc;

create database tableitsdc;

\c tableitsdc;

DROP TABLE restaurants, cities, cuisines;

CREATE TABLE restaurants (
  id serial,
  restaurantName varchar(255),
  PRIMARY KEY(id)
);

CREATE TABLE cities (
  id serial,
  cities varchar(255),
  PRIMARY KEY(id)
);

CREATE TABLE cuisines (
  id serial,
  cuisineName varchar(255),
  PRIMARY KEY(id)
);

\COPY restaurants (id, restaurantName)FROM '/Users/daniellin215/Desktop/searchBarSDC/database/csv/restaurants.csv' DELIMITER ',' csv;
\COPY cities (id, cities) FROM '/Users/daniellin215/Desktop/searchBarSDC/database/csv/cities.csv' DELIMITER ',' csv;
\COPY cuisines (id, cuisineName) FROM '/Users/daniellin215/Desktop/searchBarSDC/database/csv/cuisines.csv' DELIMITER ',' csv;

