CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	type varchar(400) NOT NULL,
	ate BOOLEAN DEFAULT false, 
	PRIMARY KEY (id)
);

INSERT INTO burgers (type , ate) VALUES ("Veggie burger with American cheese", true); 
INSERT INTO burgers (type , ate) VALUES ("Veggie burger with avocado", true); 
INSERT INTO burgers (type , ate) VALUES ("Blackbean burger with soy cheese"); 
INSERT INTO burgers (type , ate) VALUES ("Grilled Cheese"); 
INSERT INTO burgers (type , ate) VALUES ("Tofu hotdog", true); 


Select * from burgers