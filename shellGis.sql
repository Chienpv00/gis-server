
create user 'sqluser'@'%' identified with mysql_native_password by 'password';
GRANT ALL PRIVILEGES ON *.* TO 'sqluser'@'%';
FLUSH PRIVILEGES;

create database gis;
use gis;

-- create table for testing 
create table test (
	test varchar(50)
);


-- tabel user
CREATE TABLE user (
	id MEDIUMINT NOT NULL AUTO_INCREMENT,
	email VARCHAR(50) NOT NULL UNIQUE , 
    password VARCHAR(100) NOT NULL,
    token varchar(50),
    modifiedDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    createdDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)  
);




-- ALTER TABLE user
-- ADD token varchar(50) ;
-- ALTER TABLE user
-- ADD id MEDIUMINT NOT NULL AUTO_INCREMENT;

-- ALTER TABLE user
-- MODIFY COLUMN password varchar(100);

-- drop table user;
-- ALTER TABLE user
-- MODIFY COLUMN token varchar(50);

-- insert data for usertest

-- test
-- test 2