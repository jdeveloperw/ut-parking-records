-- ---
-- Table 'parking_record'
--
-- ---

CREATE DATABASE athletics_permits;
USE athletics_permits;

DROP TABLE IF EXISTS `parking_record`;

CREATE TABLE `parking_record` (
  `pr_id` INT NOT NULL AUTO_INCREMENT,
  `pr_number_of_permits` INT NOT NULL,
  `pr_has_placard` bit NOT NULL,
  `pr_is_handicapped` bit NOT NULL,
  `pr_is_wheelchair_accessible` bit NOT NULL,
  `pr_is_return` bit NOT NULL,
  `pr_year` YEAR NOT NULL,
  `pr_first_permit_number` INT NOT NULL,
  `pr_last_permit_number` INT NOT NULL,
  `pr_lot_id` INT NOT NULL,
  `pr_type_id` INT NOT NULL,
  `pr_payment_status_id` INT DEFAULT NULL,
  `pr_sport_id` INT NOT NULL,
  `pr_contact_department_id` INT DEFAULT NULL,
  `pr_contact_person_id` INT DEFAULT NULL,
  PRIMARY KEY (`pr_id`)
);

-- ---
-- Table 'person'
--
-- ---

DROP TABLE IF EXISTS `person`;

CREATE TABLE `person` (
  `person_id` INT NOT NULL AUTO_INCREMENT,
  `person_netid` VARCHAR(256) DEFAULT NULL,
  `person_first_name` VARCHAR(256) DEFAULT 'NULL',
  `person_last_name` VARCHAR(256) NOT NULL,
  `person_email` VARCHAR(512) DEFAULT NULL,
  `person_address_id` INT DEFAULT NULL,
  PRIMARY KEY (`person_id`)
);

-- ---
-- Table 'address'
--
-- ---

DROP TABLE IF EXISTS `address`;

CREATE TABLE `address` (
  `address_id` INT NOT NULL AUTO_INCREMENT,
  `address_line_1` VARCHAR(512) DEFAULT NULL,
  `address_line_2` VARCHAR(512) DEFAULT NULL,
  `address_city` VARCHAR(256) DEFAULT NULL,
  `address_zip_code` INT DEFAULT NULL,
  `address_state_id` INT DEFAULT NULL,
  PRIMARY KEY (`address_id`)
);

-- ---
-- Table 'department'
--
-- ---

DROP TABLE IF EXISTS `department`;

CREATE TABLE `department` (
  `department_id` INT NOT NULL AUTO_INCREMENT,
  `department_name` VARCHAR(256) NOT NULL,
  `department_contact_person_id` INT DEFAULT NULL,
  `department_address_id` INT DEFAULT NULL,
  PRIMARY KEY (`department_id`)
);

-- ---
-- Table 'lot'
--
-- ---

DROP TABLE IF EXISTS `lot`;

CREATE TABLE `lot` (
  `lot_id` INT NOT NULL AUTO_INCREMENT,
  `lot_name` VARCHAR(512) NOT NULL,
  PRIMARY KEY (`lot_id`)
);

-- ---
-- Table 'type'
--
-- ---

DROP TABLE IF EXISTS `type`;

CREATE TABLE `type` (
  `type_id` INT NOT NULL AUTO_INCREMENT,
  `type_name` VARCHAR(512) NOT NULL,
  PRIMARY KEY (`type_id`)
);

-- ---
-- Table 'payment_status'
--
-- ---

DROP TABLE IF EXISTS `payment_status`;

CREATE TABLE `payment_status` (
  `payment_status_id` INT NOT NULL AUTO_INCREMENT,
  `payment_status_name` VARCHAR(512) NOT NULL,
  PRIMARY KEY (`payment_status_id`)
);

-- ---
-- Table 'sport'
--
-- ---

DROP TABLE IF EXISTS `sport`;

CREATE TABLE `sport` (
  `sport_id` INT NOT NULL AUTO_INCREMENT,
  `sport_name` VARCHAR(256) NOT NULL,
  PRIMARY KEY (`sport_id`)
);

-- ---
-- Table 'state'
--
-- ---

DROP TABLE IF EXISTS `state`;

CREATE TABLE `state` (
  `state_id` INT NOT NULL AUTO_INCREMENT,
  `state_code` VARCHAR(2) NOT NULL,
  `state_name` VARCHAR(64) NOT NULL,
  PRIMARY KEY (`state_id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `parking_record` ADD FOREIGN KEY (pr_lot_id) REFERENCES `lot` (`lot_id`);
ALTER TABLE `parking_record` ADD FOREIGN KEY (pr_type_id) REFERENCES `type` (`type_id`);
ALTER TABLE `parking_record` ADD FOREIGN KEY (pr_payment_status_id) REFERENCES `payment_status` (`payment_status_id`);
ALTER TABLE `parking_record` ADD FOREIGN KEY (pr_sport_id) REFERENCES `sport` (`sport_id`);
ALTER TABLE `parking_record` ADD FOREIGN KEY (pr_contact_department_id) REFERENCES `department` (`department_id`);
ALTER TABLE `parking_record` ADD FOREIGN KEY (pr_contact_person_id) REFERENCES `person` (`person_id`);
ALTER TABLE `person` ADD FOREIGN KEY (person_address_id) REFERENCES `address` (`address_id`);
ALTER TABLE `address` ADD FOREIGN KEY (address_state_id) REFERENCES `state` (`state_id`);
ALTER TABLE `department` ADD FOREIGN KEY (department_contact_person_id) REFERENCES `person` (`person_id`);
ALTER TABLE `department` ADD FOREIGN KEY (department_address_id) REFERENCES `address` (`address_id`);

