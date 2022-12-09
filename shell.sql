
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
	email VARCHAR(50) NOT NULL ,  
    password VARCHAR(50) NOT NULL,
    modifiedDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    createdDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (email)  
);
ALTER TABLE user
ADD token varchar(50) ;

ALTER TABLE user
MODIFY COLUMN password varchar(100);

-- ALTER TABLE user
-- MODIFY COLUMN token varchar(50);

-- insert data for usertest

-- test
-- test 2