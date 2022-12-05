
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
	user_id      INT             NOT NULL,  
    birth_date  DATE            NOT NULL,
    first_name  VARCHAR(14)     NOT NULL,
    last_name   VARCHAR(16)     NOT NULL,
    gender      ENUM ('M','F')  NOT NULL,
    PRIMARY KEY (user_id)  
);

-- insert data for usertest
-- test
-- test 2