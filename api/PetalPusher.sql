DROP DATABASE If EXISTS PetalPusher;
CREATE DATABASE PetalPusher;

USE PetalPusher;
create table orders (id int auto_increment, order_id varchar(255), paymentId varchar(255), bouquet varchar(255), PRIMARY KEY (id));

create table payments (id int auto_increment, order_id varchar(255), first_name varchar(255), last_name varchar(255), address varchar(255), apart varchar(255), city varchar(255), state varchar(255), zip_code int(11), phone varchar(255), e_mail varchar(255), shipping_address varchar(255), shipping_apart varchar(255), shipping_city varchar(255), shipping_state varchar(255), shipping_zip_code int(11),  bankTransfer varchar(255),checkPay varchar(255), payPal varchar(255), pickUp varchar(255), primary key(id));



create table admin (id int auto_increment, admin_id varchar(255), password varchar(255), , primary key(id));
INSERT INTO admin (admin_id, password)
VALUES ('997226', 'petals');


-- CREATE TABLE `PetalPusher`.`purchase_order` (
--   `order_id` VARCHAR(40) NOT NULL,
--   `order_detail` VARCHAR(45) NULL,
--   `balance` DECIMAL(10,2) NULL,
--   `_id` INT NULL,
--   PRIMARY KEY (`order_id`),
--   UNIQUE INDEX `idpurchase_order_UNIQUE` (`order_id` ASC) VISIBLE);

--   INSERT INTO `purchase_order` (`order_id`, `balance`) VALUES 
--   ('connieB@lms.com','50.00'), ( '1@1.com', '0.00'), ('fishbaugh@pizza.com', '29.99'), ('crawford@digIt.com','+50.00'), ('danceMolly@me.com',  '36.00'), ( 'Tomich@iwp.com','88.29'), ('flem@favored.com',  '120.00');