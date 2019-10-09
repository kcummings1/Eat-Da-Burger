DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id int(11) AUTO_INCREMENT NOT NULL,
burg_name VARCHAR(50) NOT NULL,
devoured BOOLEAN NOT NULL,
date timestamp,
PRIMARY KEY (id)
);

SELECT * FROM burgers;

