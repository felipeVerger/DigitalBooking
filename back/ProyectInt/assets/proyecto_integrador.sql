

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';


CREATE DATABASE `proyecto_integrador` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;


-- -----------------------------------------------------
-- Schema proyecto_integrador
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `proyecto_integrador` ;

-- -----------------------------------------------------
-- Schema proyecto_integrador
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `proyecto_integrador` DEFAULT CHARACTER SET utf8mb4 ;
USE `proyecto_integrador` ;


-- proyecto_integrador.categorias definition

CREATE TABLE `categorias` (
  `id` numeric(5) NOT NULL COMMENT 'Category Id',
  `titulo` varchar(36) NOT NULL COMMENT 'Category name',
  `descripcion` varchar(100) NOT NULL COMMENT 'Correspond to category description',
  `imagen` varchar(100) DEFAULT NULL COMMENT 'Correspond to category image representation',
  PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;