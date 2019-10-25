DROP DATABASE If EXISTS PetalPushers;
CREATE DATABASE PetalPushers;

USE PetalPushers;
CREATE TABLE `PetalPusher`.`purchase_order` (
  `order_id` VARCHAR(40) NOT NULL,
  `order_detail` VARCHAR(45) NULL,
  `balance` DECIMAL(10,2) NULL,
  `_id` INT NULL,
  PRIMARY KEY (`order_id`),
  UNIQUE INDEX `idpurchase_order_UNIQUE` (`order_id` ASC) VISIBLE);

  INSERT INTO `purchase_order` (`order_id`, `balance`) VALUES 
  ('connieB@lms.com','50.00'), ( '1@1.com', '0.00'), ('fishbaugh@pizza.com', '29.99'), ('crawford@digIt.com','+50.00'), ('danceMolly@me.com',  '36.00'), ( 'Tomich@iwp.com','88.29'), ('flem@favored.com',  '120.00');