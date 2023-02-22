use bootcamp;

create database IT_Training;
use IT_Training;
create table Student(passportNumber int primary key auto_increment, studentName varchar(10) not null,
studentAge int not null default 18);
create table Course(courseID int(10) primary key not null, courseName ENUM('HTML', 'CSS', 'JavaScript', 'Database', 'Python'),
studentPassport int, foreign key (studentPassport) references Student (passportNumber)); 
drop table Course;
create table Course(courseID int primary key not null, courseName ENUM('HTML', 'CSS', 'JavaScript', 'Database', 'Python'),
studentPassport int, foreign key (studentPassport) references Student (passportNumber)); 
insert into Student(studentName, studentAge) values ('Brenda', 19),('Bill',20), ('Chris', 18), 
('James', 21), ('Mona', 20), ('Julie', 18);
insert into Student(studentName, studentAge) values ('Samantha', 22),('Junior',21), ('Oscar', 19), 
('Sheila', 19);
select * from Student;
insert into Course(courseID, courseName, studentPassport) values (1,'HTML', 4 ),(2,'CSS', 1), (3,'JavaScript', 2), 
(4,'Database', 5), (5,'Python', 3);
select * from Course;
show databases;
