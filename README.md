# JAWABAN Exercise 5 - SQL Syntax

```SQL

create database purwadhika_student;
create database purwadhika_schedule;
create database purwadhika_branch;

show databases like '%purwadhika%';

drop database purwadhika_schedule;

use purwadhika_student;
create table students (
	id int(3) not null auto_increment,
	last_name varchar(100),
	first_name varchar(100) not null,
	address varchar(255),
	city varchar(50),
	primary key(id)
);

alter table students add email varchar(60);

alter table students add column (
	gender varchar(6),
	batch_code varchar(15), 
	phone_number varchar (30),
	alternative_phone_number varchar(30)
);

alter table students drop gender;


use purwadhika_branch;
create table branchs (
	id int(3) not null auto_increment,
	branch_name varchar(50) not null,
	pic varchar(20) not null,
	address varchar(100),
	city varchar(50),
	province varchar(50),
	primary key(id)
)

insert into branchs (branch_name, pic, address, city, province) 
values ('BSD', 'Thomas', 'green office park 9', 'BSD', 'Tangerang');

update branchs set pic = 'Dono' , city ='Serpong' where city = 'BSD'

insert into branchs (branch_name, pic, address, city, province) 
values ('BALI', 'Tono', 'Gianyar', 'Gianyar', 'Bali');

use sakila;
select actor_id, first_name, last_name from actor where last_name = 'davis' order by actor_id desc;

select actor_id, first_name ,last_name from actor where first_name = 'Joe';

select address, district, city_id from address  where  district IN ('California','Alberta','mekka');

select count(*) from actor where last_name = 'wood';
select * from actor where last_name = 'wood';

select customer.customer_id, customer.first_name, sum(amount) as total  
from customer join payment on customer.customer_id = payment.customer_id 
group by customer.customer_id having total > 100 order by total asc ;

insert into actor  (first_name, last_name) values ('JHONNY','DAVIS');

insert into actor (first_name, last_name) values 
('ADAM','DAVIS'),
('JEREMY','DAVIS'), 
('CRAIG', 'DAVIS'), 
('STEVE','DAVIS');

select count(*) from actor where last_name = 'Davis';

delete from actor where first_name = 'JENNIFER';
select * from film_actor where actor_id = 4;

delete from film_actor  where actor_id = 4;

select actor.actor_id, actor.first_name, count(film_id) as film_count 
from actor join film_actor on actor.actor_id = film_actor.actor_id
group by actor.actor_id
order by film_count desc
limit 0,10;

```