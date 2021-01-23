create database db_alfonso

USE bqhhyrxyqtbnnvw4jcja;
create table usuarios(  
    id int not null,
    username varchar(80) not null,
    nombre varchar(80) not null,
    apellido varchar(80) not null,
    email varchar(80) not null,
    pass varchar(80) not null,
    ubicacion varchar(50) not null,
    telefono int(20) not null,
    bio varchar(130) not null,
    fotos text not null,
    tipo int not null

);


alter table usuarios add primary key(id);

alter table usuarios modify id int not null auto_increment, auto_increment =2;