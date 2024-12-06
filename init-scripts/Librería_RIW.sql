-- MySQL dump 10.13  Distrib 8.0.40, for Linux (x86_64)
--
-- Host: localhost    Database: Librería_RIW
-- ------------------------------------------------------
-- Server version	8.0.40-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Autor`
--

DROP TABLE IF EXISTS `Autor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Autor` (
  `id_autor` int NOT NULL,
  `nombre` varchar(35) NOT NULL,
  `pais_origen` varchar(35) DEFAULT NULL,
  PRIMARY KEY (`id_autor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Autor`
--

LOCK TABLES `Autor` WRITE;
/*!40000 ALTER TABLE `Autor` DISABLE KEYS */;
INSERT INTO `Autor` VALUES (1,'James Clear','USA'),(2,'Isabel Allende','Chile'),(3,'Brian Tracy','Canadá'),(4,'Jacobo Grinberg','México'),(5,'George Orwell','India'),(6,'Joana Marcus','España'),(7,'Meg Cabot','USA'),(8,'Jazmín Riera','Argentina'),(9,'Gabriel García Márquez','Colombia'),(10,'Haruki Murakami','Japón'),(11,'J.K. Rowling','Reino Unido'),(12,'Paulo Coelho','Brasil'),(13,'Stephen King','USA'),(14,'Jane Austen','Reino Unido'),(15,'Franz Kafka','República Checa'),(16,'Agatha Christie','Reino Unido'),(17,'Leo Tolstoy','Rusia'),(18,'Mark Manson','USA');
/*!40000 ALTER TABLE `Autor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Cliente`
--

DROP TABLE IF EXISTS `Cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Cliente` (
  `id_cliente` int NOT NULL,
  `id_membresia` int DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `email` varchar(300) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `direccion` varchar(150) DEFAULT NULL,
  `comuna` varchar(50) DEFAULT NULL,
  `fecha_registro` date DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  PRIMARY KEY (`id_cliente`),
  KEY `id_membresia` (`id_membresia`),
  CONSTRAINT `Cliente_ibfk_1` FOREIGN KEY (`id_membresia`) REFERENCES `Membresia` (`id_membresia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cliente`
--

LOCK TABLES `Cliente` WRITE;
/*!40000 ALTER TABLE `Cliente` DISABLE KEYS */;
INSERT INTO `Cliente` VALUES (1,4,'Jonathan Flores','jonathan@udp.cl','933333333','Av Exito 333','Santiago','2023-01-15',NULL),(2,4,'Juan Flores','juan@udp.cl','936936999','Av Arturo Prat 1970','Iquique','2022-08-13',NULL),(3,3,'Victor Reyes','victor@udp.cl','987654321','Av Providencia 1234','Providencia','2023-03-21',NULL),(4,3,'Felipe Gutierrez','felipe@udp.cl','912345678','Av Los Leones 567','Las Condes','2024-01-15',NULL),(5,1,'Camila Soto','camila@udp.cl','976543210','Calle Larga 890','Puente Alto','2023-05-19',NULL),(6,2,'Francisca Lagos','francisca@udp.cl','965432109','Av La Florida 1111','La Florida','2022-09-10',NULL),(7,1,'Pedro Morales','pedro@udp.cl','943216789','Pasaje Central 101','San Bernardo','2023-07-23',NULL),(8,1,'Antonia Rojas','antonia@udp.cl','932167845','Av Grecia 2222','Ñuñoa','2024-02-11',NULL),(9,3,'Javier López','javier@udp.cl','919283746','Av Alameda 2000','Estación Central','2023-08-05',NULL),(10,1,'Isabel Fuentes','isabel@udp.cl','987345621','Calle Larga 300','Quilicura','2023-12-01',NULL),(11,1,'Cristian Castillo','cristian@udp.cl','967894321','Av Bellavista 500','Rancagua','2022-11-14',NULL),(12,1,'Sofía Carrasco','sofia@udp.cl','956789432','Calle Comercio 100','Valparaíso','2024-04-07',NULL);
/*!40000 ALTER TABLE `Cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Devolucion`
--

DROP TABLE IF EXISTS `Devolucion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Devolucion` (
  `id_cliente` int NOT NULL,
  `titulo_libro` varchar(50) NOT NULL,
  `fecha_devolucion` date DEFAULT NULL,
  `motivo` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id_cliente`,`titulo_libro`),
  KEY `titulo_libro` (`titulo_libro`),
  CONSTRAINT `Devolucion_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente` (`id_cliente`),
  CONSTRAINT `Devolucion_ibfk_2` FOREIGN KEY (`titulo_libro`) REFERENCES `Libro` (`titulo_libro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Devolucion`
--

LOCK TABLES `Devolucion` WRITE;
/*!40000 ALTER TABLE `Devolucion` DISABLE KEYS */;
INSERT INTO `Devolucion` VALUES (1,'Atomic Habits','2023-01-17','Daño en el producto'),(3,'Si lo crees lo creas','2024-03-05','Producto incorrecto'),(4,'1984','2024-01-25','Falta de páginas'),(5,'Cien años de soledad','2024-05-22','Daño en la portada'),(7,'Harry Potter y la piedra filosofal','2024-09-13','No cumplió expectativas'),(9,'Kafka en la orilla','2024-11-10','Faltaban páginas'),(10,'El viento conoce mi nombre','2024-12-05','Daño en el producto');
/*!40000 ALTER TABLE `Devolucion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Editorial`
--

DROP TABLE IF EXISTS `Editorial`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Editorial` (
  `id_editorial` int NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `direccion` varchar(150) DEFAULT NULL,
  `pais_origen` varchar(35) DEFAULT NULL,
  PRIMARY KEY (`id_editorial`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Editorial`
--

LOCK TABLES `Editorial` WRITE;
/*!40000 ALTER TABLE `Editorial` DISABLE KEYS */;
INSERT INTO `Editorial` VALUES (1,'Paidós','Av. Diagonal, 662, Barcelona','España'),(2,'Plaza & Janés','Travessera de Gràcia, 47. Barcelona','España'),(3,'Grijalbo','Av. Grijalbo, 333, Barcelona','España'),(4,'Penguin Random House Grupo Editorial',' Grutas S/N, Bahía grutas, Bosque de Chapultepec I Secc, Miguel Hidalgo, 11580 Ciudad de México','México'),(5,'Editorial Trillas','Calle Dr. José María Vertiz 687, Colonia Narvarte Poniente, Alcaldía Benito Juárez, C.P. 03020, Ciudad de México','México'),(6,'Secker & Warburg','14 Carlisle Street, Londres, W1D 3BW','Reino Unido'),(7,'Penguin Random House Grupo Editorial','Calle de Almagro, 36, 28010 Madrid','España'),(8,'Montena','Calle de Almagro, 36, 28010 Madrid','España'),(9,'HarperTrophy','195 Broadway, New York, NY 10007','USA'),(10,'Editorial Planeta','Av. Santa Fe 1970, C1123AAJ, Buenos Aires','Argentina'),(11,'Alfaguara','Calle del Conde de Aranda, 12, Madrid','España'),(12,'Tusquets Editores','Calle Provença, 197, Barcelona','España'),(13,'Kodansha','2-12-21 Otowa, Bunkyo City, Tokio','Japón'),(14,'Bloomsbury Publishing','50 Bedford Square, Londres','Reino Unido'),(15,'Companhia das Letras','Av. Brigadeiro Faria Lima, 3064, São Paulo','Brasil'),(16,'Scribner','1230 Avenue of the Americas, New York','USA'),(17,'Vintage Books','20 Vauxhall Bridge Rd, Londres','Reino Unido'),(18,'HarperCollins','195 Broadway, New York, NY 10007','USA'),(19,'Penguin Classics','80 Strand, Londres','Reino Unido'),(20,'Editorial Debolsillo','Calle de Almagro, 36, Madrid','España');
/*!40000 ALTER TABLE `Editorial` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Empleado`
--

DROP TABLE IF EXISTS `Empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Empleado` (
  `id_empleado` int NOT NULL,
  `id_sucursal` int DEFAULT NULL,
  `nombre` varchar(35) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `cargo` varchar(50) DEFAULT NULL,
  `sueldo` int DEFAULT NULL,
  `fecha_contratacion` date DEFAULT NULL,
  PRIMARY KEY (`id_empleado`),
  KEY `id_sucursal` (`id_sucursal`),
  CONSTRAINT `Empleado_ibfk_1` FOREIGN KEY (`id_sucursal`) REFERENCES `Sucursal` (`id_sucursal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Empleado`
--

LOCK TABLES `Empleado` WRITE;
/*!40000 ALTER TABLE `Empleado` DISABLE KEYS */;
INSERT INTO `Empleado` VALUES (1,1,'María González','+56998765432','maria.gonzalez@libreriariw.com','Gerente',1200000,'2022-01-15'),(2,1,'Carlos Pérez','+56912349876','carlos.perez@libreriariw.com','Vendedor',750000,'2023-03-10'),(3,1,'Ana López','+56987651234','ana.lopez@libreriariw.com','Vendedor',750000,'2023-05-20'),(4,1,'Juan Torres','+56911223344','juan.torres@libreriariw.com','Cajero',650000,'2022-06-25'),(5,1,'Sofía Rojas','+56999887766','sofia.rojas@libreriariw.com','Cajero',650000,'2021-12-01'),(6,1,'Felipe Vega','+56977665544','felipe.vega@libreriariw.com','Administrador',950000,'2021-08-15'),(7,1,'Javiera Castro','+56966554433','javiera.castro@libreriariw.com','Inventario',800000,'2023-02-18'),(8,1,'Diego Morales','+56955443322','diego.morales@libreriariw.com','Inventario',800000,'2023-09-10'),(9,1,'Camila Fuentes','+56944332211','camila.fuentes@libreriariw.com','Limpieza',500000,'2023-07-01'),(10,1,'Luis Ramírez','+56933221100','luis.ramirez@libreriariw.com','Seguridad',600000,'2022-04-15');
/*!40000 ALTER TABLE `Empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Envio`
--

DROP TABLE IF EXISTS `Envio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Envio` (
  `id_cliente` int NOT NULL,
  `id_sucursal` int NOT NULL,
  `titulo_libro` varchar(50) NOT NULL,
  `direccion` varchar(150) DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  `fecha_enviado` date DEFAULT NULL,
  `fecha_entregado` date DEFAULT NULL,
  PRIMARY KEY (`id_cliente`,`id_sucursal`,`titulo_libro`),
  KEY `id_sucursal` (`id_sucursal`),
  KEY `titulo_libro` (`titulo_libro`),
  CONSTRAINT `Envio_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente` (`id_cliente`),
  CONSTRAINT `Envio_ibfk_2` FOREIGN KEY (`id_sucursal`) REFERENCES `Sucursal` (`id_sucursal`),
  CONSTRAINT `Envio_ibfk_3` FOREIGN KEY (`titulo_libro`) REFERENCES `Libro` (`titulo_libro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Envio`
--

LOCK TABLES `Envio` WRITE;
/*!40000 ALTER TABLE `Envio` DISABLE KEYS */;
INSERT INTO `Envio` VALUES (1,1,'Si lo crees lo creas','Av Exito 333',1,'2024-02-10','2024-02-17'),(1,3,'Si lo crees lo creas','Av Exito 333',2,'2024-06-05','2024-06-12'),(2,1,'Atomic Habits','Av Arturo Prat 1970',3,'2022-08-14','2022-08-21'),(3,1,'Cien años de soledad','Av Providencia 1234',1,'2023-03-23','2023-03-30'),(3,1,'Guerra y paz','Av Providencia 1234',1,'2024-06-10','2024-06-17'),(3,3,'Kafka en la orilla','Av Providencia 1234',1,'2024-05-15','2024-05-22'),(4,1,'El cerebro consciente','Av Los Leones 567',1,'2024-01-16','2024-01-23'),(4,2,'El viento conoce mi nombre','Av Los Leones 567',1,'2024-10-05','2024-10-12'),(5,1,'1984','Calle Larga 890',2,'2023-05-21','2023-05-28'),(5,2,'Harry Potter y la piedra filosofal','Calle Larga 890',1,'2024-07-10','2024-07-17'),(6,1,'Kafka en la orilla','Av La Florida 1111',4,'2022-09-12','2022-09-19'),(6,3,'1984','Av La Florida 1111',1,'2024-03-05','2024-03-12'),(7,1,'Harry Potter y la piedra filosofal','Pasaje Central 101',2,'2023-07-25','2023-08-01'),(7,3,'Las reglas del boxeador','Pasaje Central 101',3,'2024-04-10','2024-04-17'),(8,1,'Antes de diciembre','Av Grecia 2222',3,'2024-03-15','2024-03-22'),(8,2,'Cien años de soledad','Av Grecia 2222',3,'2024-09-20','2024-09-27'),(8,3,'El diario de una princesa','Av Grecia 2222',2,'2024-02-25','2024-03-03'),(9,1,'Las reglas del boxeador','Av Alameda 2000',1,'2024-05-20','2024-05-27'),(9,2,'Atomic Habits','Av Alameda 2000',2,'2024-11-15','2024-11-22'),(10,1,'El diario de una princesa','Calle Larga 300',2,'2024-04-05','2024-04-12'),(10,2,'Antes de diciembre','Calle Larga 300',2,'2024-08-15','2024-08-22');
/*!40000 ALTER TABLE `Envio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Escribe`
--

DROP TABLE IF EXISTS `Escribe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Escribe` (
  `id_autor` int NOT NULL,
  `titulo_libro` varchar(50) NOT NULL,
  `fecha_escrito` date DEFAULT NULL,
  PRIMARY KEY (`id_autor`,`titulo_libro`),
  KEY `titulo_libro` (`titulo_libro`),
  CONSTRAINT `Escribe_ibfk_1` FOREIGN KEY (`id_autor`) REFERENCES `Autor` (`id_autor`),
  CONSTRAINT `Escribe_ibfk_2` FOREIGN KEY (`titulo_libro`) REFERENCES `Libro` (`titulo_libro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Escribe`
--

LOCK TABLES `Escribe` WRITE;
/*!40000 ALTER TABLE `Escribe` DISABLE KEYS */;
INSERT INTO `Escribe` VALUES (1,'Atomic Habits','2018-10-16'),(2,'El viento conoce mi nombre','2023-06-01'),(3,'Si lo crees lo creas','2016-04-07'),(4,'El cerebro consciente','1979-06-30'),(4,'La Creación de la Experiencia','1991-10-01'),(4,'La teoría sintérgica','1991-03-23'),(5,'1984','1948-05-08'),(6,'Antes de diciembre','2019-11-11'),(7,'El diario de una princesa','1998-12-15'),(8,'Las reglas del boxeador','2013-02-26'),(9,'Cien años de soledad','1965-08-01'),(10,'Kafka en la orilla','2001-03-15'),(11,'Harry Potter y la piedra filosofal','1995-09-25'),(12,'El Alquimista','1987-02-10'),(13,'It','1984-11-22'),(14,'Orgullo y prejuicio','1811-12-20'),(15,'La metamorfosis','1912-10-01'),(16,'Diez negritos','1938-05-30'),(17,'Guerra y paz','1865-03-01'),(18,'El sutil arte de que te importe un caraj*','2015-09-01');
/*!40000 ALTER TABLE `Escribe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Inventario`
--

DROP TABLE IF EXISTS `Inventario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Inventario` (
  `id_sucursal` int NOT NULL,
  `titulo_libro` varchar(50) NOT NULL,
  `stock` int DEFAULT NULL,
  `precio` int DEFAULT NULL,
  PRIMARY KEY (`id_sucursal`,`titulo_libro`),
  KEY `titulo_libro` (`titulo_libro`),
  CONSTRAINT `Inventario_ibfk_1` FOREIGN KEY (`id_sucursal`) REFERENCES `Sucursal` (`id_sucursal`),
  CONSTRAINT `Inventario_ibfk_2` FOREIGN KEY (`titulo_libro`) REFERENCES `Libro` (`titulo_libro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Inventario`
--

LOCK TABLES `Inventario` WRITE;
/*!40000 ALTER TABLE `Inventario` DISABLE KEYS */;
INSERT INTO `Inventario` VALUES (1,'1984',19,20000),(1,'Antes de diciembre',15,35000),(1,'Atomic Habits',45,15000),(1,'Cien años de soledad',25,18000),(1,'Diez negritos',22,14000),(1,'El Alquimista',18,12000),(1,'El cerebro consciente',8,28000),(1,'El diario de una princesa',7,28000),(1,'El sutil arte de que te importe un caraj*',30,13000),(1,'El viento conoce mi nombre',10,18000),(1,'Guerra y paz',8,30000),(1,'Harry Potter y la piedra filosofal',30,15000),(1,'It',10,28000),(1,'Kafka en la orilla',12,22000),(1,'La Creación de la Experiencia',6,24000),(1,'La metamorfosis',15,8000),(1,'La teoría sintérgica',22,26000),(1,'Las reglas del boxeador',12,20000),(1,'Orgullo y prejuicio',20,16000),(1,'Si lo crees lo creas',33,10000),(2,'1984',12,20000),(2,'Antes de diciembre',10,35000),(2,'Atomic Habits',20,15000),(2,'Cien años de soledad',18,18000),(2,'Diez negritos',15,14000),(2,'El Alquimista',12,12000),(2,'El cerebro consciente',5,28000),(2,'El diario de una princesa',6,28000),(2,'El sutil arte de que te importe un caraj*',20,13000),(2,'El viento conoce mi nombre',15,18000),(2,'Guerra y paz',5,30000),(2,'Harry Potter y la piedra filosofal',25,15000),(2,'It',8,28000),(2,'Kafka en la orilla',10,22000),(2,'La creación de la experiencia',8,24000),(2,'La metamorfosis',10,8000),(2,'La teoría sintérgica',10,26000),(2,'Las reglas del boxeador',8,20000),(2,'Orgullo y prejuicio',15,16000),(2,'Si lo crees lo creas',20,10000),(3,'1984',15,20000),(3,'Antes de diciembre',12,35000),(3,'Atomic Habits',25,15000),(3,'Cien años de soledad',20,18000),(3,'Diez negritos',18,14000),(3,'El Alquimista',15,12000),(3,'El cerebro consciente',6,28000),(3,'El diario de una princesa',8,28000),(3,'El sutil arte de que te importe un caraj*',25,13000),(3,'El viento conoce mi nombre',20,18000),(3,'Guerra y paz',6,30000),(3,'Harry Potter y la piedra filosofal',28,15000),(3,'It',10,28000),(3,'Kafka en la orilla',12,22000),(3,'La creación de la experiencia',10,24000),(3,'La metamorfosis',12,8000),(3,'La teoría sintérgica',12,26000),(3,'Las reglas del boxeador',10,20000),(3,'Orgullo y prejuicio',18,16000),(3,'Si lo crees lo creas',30,10000);
/*!40000 ALTER TABLE `Inventario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Libro`
--

DROP TABLE IF EXISTS `Libro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Libro` (
  `titulo_libro` varchar(50) NOT NULL,
  `numero_paginas` int DEFAULT NULL,
  `genero` varchar(35) DEFAULT NULL,
  `categoria` varchar(35) DEFAULT NULL,
  `ano_publicacion` int DEFAULT NULL,
  `id_editorial` int DEFAULT NULL,
  PRIMARY KEY (`titulo_libro`),
  KEY `id_editorial` (`id_editorial`),
  CONSTRAINT `Libro_ibfk_1` FOREIGN KEY (`id_editorial`) REFERENCES `Editorial` (`id_editorial`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Libro`
--

LOCK TABLES `Libro` WRITE;
/*!40000 ALTER TABLE `Libro` DISABLE KEYS */;
INSERT INTO `Libro` VALUES ('1984',328,'Ficción distópica','Novela',1949,6),('Antes de diciembre',496,'Romance juvenil','Novela',2021,8),('Atomic Habits',320,'Desarrollo personal','Psicología aplicada',2018,1),('Cien años de soledad',417,'Ficción','Novela',1967,11),('Diez negritos',272,'Misterio','Novela',1939,18),('El Alquimista',208,'Ficción','Novela',1988,15),('El cerebro consciente',163,'Ciencia','Psicofisiología de la conciencia',1979,5),('El diario de una princesa',240,'Novela juvenil','Ficción contemporánea',2000,9),('El sutil arte de que te importe un caraj*',224,'Autoayuda','Desarrollo personal',2016,20),('El viento conoce mi nombre',368,'Ficción','Novela histórica',2023,2),('Guerra y paz',1225,'Ficción histórica','Novela',1869,19),('Harry Potter y la piedra filosofal',309,'Fantasía','Novela juvenil',1997,14),('It',1138,'Terror','Novela',1986,16),('Kafka en la orilla',505,'Ficción contemporánea','Novela',2002,13),('La creación de la experiencia',320,'Ciencia','Neurociencia',2024,7),('La metamorfosis',74,'Ficción','Novela corta',1915,15),('La teoría sintérgica',136,'Ciencia','Neurociencia',2024,4),('Las reglas del boxeador',704,'Romance juvenil','Novela',2016,10),('Orgullo y prejuicio',432,'Romance','Novela',1813,17),('Si lo crees lo creas',264,'Autoayuda','Desarrollo personal',2019,3);
/*!40000 ALTER TABLE `Libro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Membresia`
--

DROP TABLE IF EXISTS `Membresia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Membresia` (
  `id_membresia` int NOT NULL,
  `tipo` varchar(20) DEFAULT NULL,
  `costo_mensual` int DEFAULT NULL,
  `beneficios` varchar(120) DEFAULT NULL,
  PRIMARY KEY (`id_membresia`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Membresia`
--

LOCK TABLES `Membresia` WRITE;
/*!40000 ALTER TABLE `Membresia` DISABLE KEYS */;
INSERT INTO `Membresia` VALUES (1,'Estandar',0,'Descuentos por más de 5 libros comprados, descuentos semanales.'),(2,'Estudiante',1500,'Descuentos en libros de estudios, ofertas especiales.'),(3,'Premium',5000,'Descuentos en libros de interés, ofertas especiales, descuentos semanales.'),(4,'Membresía familiar',10000,'Descuento del 20% por por más de 3 libros comprados, descuentos en libros de interes, ofertas especiales.');
/*!40000 ALTER TABLE `Membresia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Pedido`
--

DROP TABLE IF EXISTS `Pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Pedido` (
  `id_pedido` int NOT NULL AUTO_INCREMENT,
  `id_cliente` int DEFAULT NULL,
  `titulo_libro` varchar(50) DEFAULT NULL,
  `fecha_compra` date DEFAULT NULL,
  PRIMARY KEY (`id_pedido`),
  KEY `id_cliente` (`id_cliente`),
  KEY `titulo_libro` (`titulo_libro`),
  CONSTRAINT `Pedido_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `Cliente` (`id_cliente`),
  CONSTRAINT `Pedido_ibfk_2` FOREIGN KEY (`titulo_libro`) REFERENCES `Libro` (`titulo_libro`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pedido`
--

LOCK TABLES `Pedido` WRITE;
/*!40000 ALTER TABLE `Pedido` DISABLE KEYS */;
INSERT INTO `Pedido` VALUES (24,2,'Si lo crees lo creas','2024-10-29'),(25,3,'1984','2023-03-22'),(26,5,'Cien años de soledad','2023-05-20'),(27,6,'Harry Potter y la piedra filosofal','2022-09-11'),(28,9,'Atomic Habits','2024-12-20'),(29,10,'Atomic Habits','2024-11-27'),(30,8,'Atomic Habits','2024-11-15'),(31,4,'Si lo crees lo creas','2024-12-29'),(32,3,'1984','2023-03-22'),(33,5,'Cien años de soledad','2023-05-20'),(34,7,'Harry Potter y la piedra filosofal','2022-09-11'),(35,1,'El viento conoce mi nombre','2024-01-15'),(36,3,'Si lo crees lo creas','2024-02-05'),(37,4,'La teoría sintérgica','2024-03-10'),(38,5,'El cerebro consciente','2024-04-22'),(39,6,'1984','2024-05-14'),(40,7,'La Creación de la Experiencia','2024-06-18'),(41,8,'Antes de diciembre','2024-07-21'),(42,9,'El diario de una princesa','2024-08-25'),(43,10,'Las reglas del boxeador','2024-09-15'),(44,1,'Cien años de soledad','2024-10-10'),(45,3,'Kafka en la orilla','2024-11-05'),(46,4,'Harry Potter y la piedra filosofal','2024-12-01'),(47,5,'El Alquimista','2024-01-20'),(48,6,'It','2024-02-11'),(49,7,'Orgullo y prejuicio','2024-03-25'),(50,8,'La metamorfosis','2024-04-30'),(51,9,'Diez negritos','2024-05-15'),(52,10,'Guerra y paz','2024-06-10'),(53,1,'El sutil arte de que te importe un caraj*','2024-07-20'),(54,3,'Atomic Habits','2024-08-22'),(55,4,'El viento conoce mi nombre','2024-09-30'),(56,5,'Si lo crees lo creas','2024-10-25'),(57,6,'La teoría sintérgica','2024-11-18'),(58,7,'El cerebro consciente','2024-12-03'),(59,8,'1984','2024-01-12'),(60,9,'La Creación de la Experiencia','2024-02-14'),(61,10,'Antes de diciembre','2024-03-09'),(62,1,'El diario de una princesa','2024-04-18'),(63,3,'Las reglas del boxeador','2024-05-23'),(64,4,'Cien años de soledad','2024-06-29'),(65,5,'Kafka en la orilla','2024-07-11'),(66,6,'Harry Potter y la piedra filosofal','2024-08-17'),(67,7,'El Alquimista','2024-09-15'),(68,8,'It','2024-10-13'),(69,9,'Orgullo y prejuicio','2024-11-21'),(70,10,'La metamorfosis','2024-12-02'),(71,1,'Diez negritos','2024-01-18'),(72,3,'Guerra y paz','2024-02-09'),(73,4,'El sutil arte de que te importe un caraj*','2024-03-14');
/*!40000 ALTER TABLE `Pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Proveedor`
--

DROP TABLE IF EXISTS `Proveedor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Proveedor` (
  `id_proveedor` int NOT NULL,
  `nombre` varchar(35) DEFAULT NULL,
  `direccion` varchar(150) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `email` varchar(150) DEFAULT NULL,
  `pais` varchar(35) DEFAULT NULL,
  PRIMARY KEY (`id_proveedor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Proveedor`
--

LOCK TABLES `Proveedor` WRITE;
/*!40000 ALTER TABLE `Proveedor` DISABLE KEYS */;
INSERT INTO `Proveedor` VALUES (1,'Importaciones Chile','Av. Libertador 1234, Santiago','+56912345678','importaciones@proveedorchile.com','Chile'),(2,'Editorial Andes','Calle Los Andes 567, Valparaíso','+56987654321','contacto@editorialandes.cl','Chile'),(3,'Exportaciones USA','123 Main St, New York','+12125551234','exportaciones@proveedorus.com','USA'),(4,'Proveedores México','Av. Reforma 456, Ciudad de México','+525512345678','info@proveedormex.com','México'),(5,'Editorial Buenos Aires','Calle Corrientes 789, Buenos Aires','+541112345678','ventas@editorialba.com','Argentina'),(6,'Editorial España','Gran Vía 123, Madrid','+341234567890','contacto@editorialesp.com','España');
/*!40000 ALTER TABLE `Proveedor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sucursal`
--

DROP TABLE IF EXISTS `Sucursal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sucursal` (
  `id_sucursal` int NOT NULL,
  `nombre` varchar(35) DEFAULT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  `horario` varchar(35) DEFAULT NULL,
  PRIMARY KEY (`id_sucursal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sucursal`
--

LOCK TABLES `Sucursal` WRITE;
/*!40000 ALTER TABLE `Sucursal` DISABLE KEYS */;
INSERT INTO `Sucursal` VALUES (1,'RIW Santiago','123456789','Lunes a Viernes 9:00-20:00'),(2,'RIW Providencia','987654321','Lunes a Sábado 10:00-21:00'),(3,'RIW Mall Plaza Sur','912345678','Lunes a Domingo 10:00-22:00');
/*!40000 ALTER TABLE `Sucursal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Suministra`
--

DROP TABLE IF EXISTS `Suministra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Suministra` (
  `id_proveedor` int NOT NULL,
  `titulo_libro` varchar(50) NOT NULL,
  `fecha_suministro` date DEFAULT NULL,
  PRIMARY KEY (`id_proveedor`,`titulo_libro`),
  KEY `titulo_libro` (`titulo_libro`),
  CONSTRAINT `Suministra_ibfk_1` FOREIGN KEY (`id_proveedor`) REFERENCES `Proveedor` (`id_proveedor`),
  CONSTRAINT `Suministra_ibfk_2` FOREIGN KEY (`titulo_libro`) REFERENCES `Libro` (`titulo_libro`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Suministra`
--

LOCK TABLES `Suministra` WRITE;
/*!40000 ALTER TABLE `Suministra` DISABLE KEYS */;
INSERT INTO `Suministra` VALUES (1,'Antes de diciembre','2024-11-20'),(1,'Atomic Habits','2024-11-01'),(1,'El viento conoce mi nombre','2024-12-01'),(1,'Guerra y paz','2023-05-05'),(1,'Harry Potter y la piedra filosofal','2023-11-10'),(1,'La Creación de la Experiencia','2024-05-15'),(2,'Antes de diciembre','2024-04-10'),(2,'El Alquimista','2023-10-05'),(2,'El sutil arte de que te importe un caraj*','2023-04-25'),(2,'El viento conoce mi nombre','2024-10-20'),(2,'Kafka en la orilla','2024-10-15'),(2,'La Creación de la Experiencia','2024-09-25'),(3,'Atomic Habits','2024-08-30'),(3,'El diario de una princesa','2024-03-05'),(3,'Guerra y paz','2024-07-15'),(3,'Harry Potter y la piedra filosofal','2024-06-10'),(3,'It','2023-09-25'),(3,'Si lo crees lo creas','2024-09-15'),(4,'1984','2024-04-18'),(4,'Cien años de soledad','2024-05-05'),(4,'Diez negritos','2024-03-25'),(4,'La teoría sintérgica','2024-08-10'),(4,'Las reglas del boxeador','2024-02-25'),(4,'Orgullo y prejuicio','2023-08-20'),(5,'Cien años de soledad','2024-01-20'),(5,'El cerebro consciente','2024-07-05'),(5,'It','2024-02-15'),(5,'La metamorfosis','2023-07-15'),(5,'Si lo crees lo creas','2024-01-30'),(6,'1984','2024-06-25'),(6,'Diez negritos','2023-06-10'),(6,'El diario de una princesa','2023-12-20'),(6,'El sutil arte de que te importe un caraj*','2023-11-10'),(6,'Kafka en la orilla','2023-12-15'),(6,'La teoría sintérgica','2023-10-05');
/*!40000 ALTER TABLE `Suministra` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-05 15:01:42
