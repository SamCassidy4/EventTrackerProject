-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema workoutdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `workoutdb` ;

-- -----------------------------------------------------
-- Schema workoutdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `workoutdb` DEFAULT CHARACTER SET utf8 ;
USE `workoutdb` ;

-- -----------------------------------------------------
-- Table `workout`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `workout` ;

CREATE TABLE IF NOT EXISTS `workout` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `recommended_set` VARCHAR(45) NULL,
  `recommended_rep` VARCHAR(45) NULL,
  `description` TEXT NOT NULL,
  `image_url` VARCHAR(2000) NULL,
  `body_part` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS admin@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'Ball00ns';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'admin'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `workout`
-- -----------------------------------------------------
START TRANSACTION;
USE `workoutdb`;
INSERT INTO `workout` (`id`, `name`, `recommended_set`, `recommended_rep`, `description`, `image_url`, `body_part`) VALUES (1, 'Bench Press', '4-6', '8-12', 'The bench press is a compound exercise. It involves lying on a bench and pressing weight upward using either a barbell or a pair of dumbbells. During a bench press, you lower the weight down to chest level and then press upwards whil extending your arms.', 'https://www.gymguider.com/wp-content/uploads/2017/10/bench-press.jpg', 'Pectoral muscles, shoulders, and arms');
INSERT INTO `workout` (`id`, `name`, `recommended_set`, `recommended_rep`, `description`, `image_url`, `body_part`) VALUES (2, 'Deadlift', '3-6', '6-12', 'The deadlift is a movement in which your hips hinge backward to lower down and pick up a weighted barbell or kettlebell from the floor. You back is flat throughout the movement. Some benefits of performing deadlifts include strengthening and gaining more definition in your upper and lower back, glutes and hamstrings.', 'https://www.shutterstock.com/image-vector/sequence-weightlifter-doing-deadlift-exercise-260nw-1482332555.jpg', 'Upper and lower back, glutes, hamstrings, abdominal muscles, biceps, shoulders, triceps.');
INSERT INTO `workout` (`id`, `name`, `recommended_set`, `recommended_rep`, `description`, `image_url`, `body_part`) VALUES (3, 'Squat', '4-5', '3-5 ', 'A squat is a strength exercise in which the trainee lowers their hips from a standing position and then stands back up. During the descent and knee joints flex while the ankle join dorsiflexes; conversely the hip and knee joints extend and the ankle joint plantarflexes when standing up', 'https://crossfitstein.com/wp-content/uploads/2020/03/back-squat.jpg', 'Glutes, quadriceps (quads), hamstrings, adductor (groin), hip flexors, calves');

COMMIT;

