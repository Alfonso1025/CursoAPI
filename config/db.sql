create database db_alfonso

USE db_alfonso
create table usuarios{
    id int not null,
    username varchar(80) not null
}

alter table usuarios add primary key(id);

alter table usuarios modify id int not null auto_increment, auto_increment =2