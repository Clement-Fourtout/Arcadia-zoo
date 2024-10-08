-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for Win64 (AMD64)
--
-- Host: s554ongw9quh1xjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com  
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Horaires`
--

DROP TABLE IF EXISTS `Horaires`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Horaires` (
  `id` int NOT NULL AUTO_INCREMENT,
  `jour` varchar(255) NOT NULL,
  `heures` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Horaires`
--

LOCK TABLES `Horaires` WRITE;
/*!40000 ALTER TABLE `Horaires` DISABLE KEYS */;
INSERT INTO `Horaires` VALUES (1,'Lundi','09:00 - 18:30'),(2,'Mardi','09:00 - 18:30'),(3,'Mercredi','09:00 - 18:30'),(4,'Jeudi','09:00 - 18:30'),(5,'Vendredi','09:00 - 18:30'),(6,'Samedi','09:00 - 18:30'),(7,'Dimanche','09:00 - 18:30');
/*!40000 ALTER TABLE `Horaires` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `animals`
--

DROP TABLE IF EXISTS `animals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `animals` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `species` varchar(255) NOT NULL,
  `age` int DEFAULT NULL,
  `habitat_id` int DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `increment` int DEFAULT '0',
  `description` text,
  PRIMARY KEY (`id`),
  KEY `habitat_id` (`habitat_id`),
  CONSTRAINT `animals_ibfk_1` FOREIGN KEY (`habitat_id`) REFERENCES `habitats` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animals`
--

LOCK TABLES `animals` WRITE;
/*!40000 ALTER TABLE `animals` DISABLE KEYS */;
INSERT INTO `animals` VALUES (56,'Lion d\'Afrique','Panthera Leo Leo',12,2,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721313803544-Lion.jpg',0,'Mammif├¿re pouvant dormir jusqu\'├á 20 heures par jour, consacre le reste de son temps ├á la d├®fense de son territoire.Il est le plus grand carnivore d\'Afrique et le deuxi├¿me plus grand f├®lid├® apr├¿s le tigre.Il est surnomm├® le Roi des animaux du fait de son imposant charisme et de sa crini├¿re qui rappelle le soleil.'),(57,'Le Paresseux','Bradypus variegatus',7,4,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721250664698-Le%20paresseux.jpg',0,'Le paresseux fait partie des plus anciens mammif├¿res terrestre dot├® d\'un sourire ├®ternel ! Sa t├¬te est capable de tourner ├á 90┬░ ├®tant un atout strat├®gique pour rep├®rer le danger quand on vit dans les arbres. Il passe entre 14 et 16 heures par jour ├á se reposer. Mesurant de 45cm ├á 75cm pour un poids de 4kg nous retrouvons deux esp├¿ces ├á deux griffes ou trois griffes.'),(58,'L\'Alligator d\'Am├®rique','Alligator mississippiensis',28,3,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721250755936-Alligator.jpg',0,'L\'Alligator d\'Am├®rique est un grand crocodilien mesurant entre 2,5m et 4,5m pour un poids allant de 90kg ├á 230kg. Il est r├®put├® pour la force de sa machoire ├®quivalent ├á 13 200 Newton (1,3 tonnes/cm2) le hissant ├á la 2nd place de la plus puissante morsure du r├¿gne animal.'),(60,'La Hy├¿ne Tachet├®e','Crocuta crocuta',8,2,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721406237442-Hyene.jpg',0,'L\'un des plus grands carnivores d\'Afrique aussi connue pour son cri ressemblant ├á un ricanement, la hy├¿ne vie principalement en meute.'),(61,'Le Chacal','Canis mesomelas',5,2,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721406291984-Chacal.jpg',0,'Le chacal, ou ici le chacal dor├®, est un mammif├¿re pouvant peser 6 Kg ├á 15Kg est de l\'ordre des carnivores. Il est la proie de f├®lins, hy├¿nes, rapaces et pythons.'),(62,'Le Fennec','Vulpes zerda',6,2,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721406568656-Fennec.jpg',0,'On le surnomme le Renard de Poche, du fait de sa toute petite taille allant de 20Cm ├á 40Cm pour un poids moyen de 1.7Kg. Lorsqu\'il forme un couple les Fennec sont unis pour la vie.'),(63,'Le Tigre de Sumatra','Panthera tigris sumatrae',12,2,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721406686048-Tigre.jpg',0,'Nous pouvons retrouver 6 sous-esp├¿ces de tigres. Ce dernier se diff├®rencie avec ses favoris blancs sur ses joues. \r\nIl est ├®galement le plus petit de tous les tigres vivants malgr├® un poids d├®passant les 120Kg en moyenne.'),(64,'L\'Hippopotame','Hippopotamus amphibius',28,2,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721406767542-Hippopotame.jpg',0,'L\'hippopotame amphibie fait parti des plus grands ├¬tres vivants d\'Afrique mesurant de 2,70m ├á 4,50m de long pour 1,50m de hauteur mais surtout un poids de 2,2 tonnes de moyenne.'),(65,'La Girafe','Giraffa camelopardalis',11,2,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721406817151-girafe.jpg',0,'Le plus grand animal terrestre de notre plan├¿te ! Jusqu\'├á 6 m├¿tres de haut elle fait partie des esp├¿ces menac├®es d\'extinction due ├á une mortalit├® ├®lev├®e des jeunes chass├®s par les lions et autres f├®lins.'),(66,'L\'El├®phant d\'Afrique','Loxodonta africana',42,2,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721406874520-Elephant.jpg',0,'L\'├ël├®phant d\'Afrique peut peser plus de 7 tonnes et mesurer jusqu\'├á 4 m├¿tres de hauteur. Il est le mammif├¿re terrestre le plus imposant sur terre et fait malheureusement parti des esp├¿ces en voie de disparition ├á cause du braconnage.'),(67,'Le Babouin','Papio hamadryas',12,2,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721406934853-Babouin.jpg',0,'Le Babouin fait parti de l\'ordre des primates, pesant 10 ├á 50kg, il est le singe le plus rependu en Afrique par sa vaste zone de r├®partition g├®ographique et ses populations nombreuses. Ils sont non territoriaux et vivent en troupes de 10 ├á plus de 100 individus avec un m├óle dominant ├á la t├¬te !'),(68,'L\'Antilope','Aepyceros melampus',9,2,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721407031652-Antilope.jpg',0,'L\'antilope d\'Afrique ou plus commun├®ment appel├® Impala. Mesurant 80cm ├á 92cm et pesant jusqu\'├á 75kg se distingue gr├óce ├á ses hautes cornes annel├®es en forme de S. Sa vitesse de pointe est de 80Km/h !'),(69,'Les Suricates','Suricata suricatta',4,2,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721407104761-Suricate.jpg',0,'Cette esp├¿ce est la plus petite au sein de la famille des Herpestidae(mangouste). Mesurant 24cm ├á 30cm elle poss├¿de de grand yeux entour├®s de noir pour ne pas ├¬tre aveugl├® par le soleil et garder son statut de sentinelle du d├®sert.'),(70,'Le Ca├»man ├á lunettes','Caiman crocodilus',23,3,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721407744080-Caiman.jpg',0,'Le ca├»man ├á lunettes est l\'un des plus petits crocodilien, ses paupi├¿res rid├®es avec notamment une cr├¬te osseuse entre ses yeux lui a valu son nom. Il mesure entre 1,1m et 1.8m en moyenne pour un poids n\'exc├®dant pas les 50kg.'),(71,'Le Crocodile du Nil','Crocodylus niloticus',41,3,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721407789914-Crocodile.jpg',0,'Le Crocodile du Nil est le crocodilien et l\'animal terrestre poss├®dant le record de puissance de la m├óchoire de 22000 Newtons(2,2tonnes/cm2).Il mesure en moyenne 5m de long pour un poids variant entre 400kg et 1000kg. Il peut atteindre 30km/h ├á la nage conter 15km/h sur terre'),(72,'La Couleuvre ├á Collier','Natrix natrix',13,3,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721407859308-Couleuvre-collier.jpg',0,'La couleuvre ├á collier est une esp├¿ce de serpent non venimeux semi-aquatique appartenant ├á la classe des reptiles. Mesurant de 65cm ├á 1,50m pour un poids d\'en moyenne 200g elle peut rester en apn├®e 30 minutes'),(73,'L\'Anaconda Vert','Eunectes murinus',11,3,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721407926007-Anaconda-vert.jpg',0,'Extr├¬mement ├á l\'aise dans l\'eau, l\'Anaconda est le roi des fleuves et marais de la jungle amazonienne. Il p├¿se au maximum 250kg la nommant serpent le plus lourd du monde ! Sa taille b├®ante de 10m ├á 12m et sa m├óchoire se d├®saxant, il peut donc ais├®ment avaler des proies plus grosses que lui avec un peu de patience.'),(74,'Le Buffle d\'Afrique','Syncerus caffer',8,3,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721407995440-Buffle-d%27afrique.jpg',0,'Le buffle d\'Afrique ├®galement appel├® grand buffle noir des savanes est un grand mammif├¿re herbivore appartenant ├á la famille des bovid├®s. Il tient ses origines du buffle d\'Asie. Mesurant entre 2,50m et 3,40m; il p├¿se de 300 ├á 500kg pour une femelle et 700 ├á 900kg pour un m├óle.'),(75,'Le Faucon P├¿lerin','Falco peregrinus',6,3,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721408043453-Faucon-p%C3%83%C2%A8lerin.jpg',0,'Les Falconid├®s sont une famille de rapaces diurnes de taille petite ├á moyenne(50cm pour une envergure de 100 ├á 115cm) et un poids d\'1kg de moyenne. Ce sont de lointains cousins des perroquets avec lesquels ils ont un commun un bec crochu.'),(76,'Le Flamant Rose','Phoenicopterus roseus',12,3,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721408114941-Flamant-rose.jpg',0,'Le flamant rose est un ├®chassier migrateur de grande taille: il mesure 125 ├á 145 cm de long et environ 1,10 m ├á 1,50 m de hauteur. Il p├¿se de 2 ├á 4 kg et son envergure est de 140 ├á 165 cm.'),(77,'Le Raton Laveur','Procyon lotor',4,3,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721408175129-Raton-laveur.jpg',0,'Le raton laveur est un mammif├¿re originaire d\'Am├®rique du Nord, il tire son nom du fait qu\'il nettoie m├®ticuleusement sa nourriture ou qu\'il la trempe dans l\'eau avant de la manger. Il mesure en moyenne 80cm pour un poids entre 6kg et 8kg mais jusqu\'├á 28kg en Automne !'),(78,'La Salamandre Tigr├®e','Ambystoma tigrinum',12,3,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721408224330-Salamandre-tigr%C3%83%C2%A9e.jpg',0,'La Salamandre tigr├®e est un urod├¿le(un ordre d\'amphibiens qui gardent une queue ├á l\'├®tat adulte), c\'est une assez grosse Salamandre mesurant de 17 ├á 33 cm avec un queue faisant 40 ├á 50% de sa longueur totale pour un poids de 125g de moyenne.'),(79,'La rainette de White','Litoria caerulea',12,3,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721408265170-Rainette-white.jpg',0,'Cette esp├¿ce nomm├® la Rainette g├®ante est un animal amphibie relativement trapu et mesurant g├®n├®ralement entre 5 et 12 cm une fois l\'├óge adulte atteint, et pouvant aller jusqu\'├á 15 cm.'),(80,'Le Bec-en-Sabot du Nil','Balaeniceps rex',28,3,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721408348028-Bec-a-sabot-du-nil.jpg',0,'Avec ses petits yeux ronds et son air vaguement ironique quand il vous observe fixement, totalement immobile, ce grand oiseau ├®chassier, marche d├®licatement dans la v├®g├®tation aquatique avec son dr├┤le de bec pench├® pour saisir les poissons et amphibiens. \r\nIl mesure 1m ├á 1,50m et p├¿se de 4,5kg ├á 6,5kg.'),(81,'L\'Empereur d\'Amazonie','Saguinus imperator',5,4,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721409100407-Empereur%20d%27amazonie.jpg',0,'Le tamarin empereur est un petit primate au faci├¿s particulier, largement reconnaissable ├á son imposante moustache blanche semblable ├á celle de l\'empereur allemand Guillaume II qui lui value son appellation. Il p├¿se de 300g ├á 500 pour une taille de 23cm a 25cm et une queue de 40cm.'),(82,'Le Jaguar','Panthera onca',8,4,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721409164258-Jaguar.jpg',0,'Troisi├¿me plus grand f├®lin au monde, le jaguar fascine tant par sa beaut├® que par sa puissance. Il est aussi ├á l\'aise dans l\'eau que sur la terre ferme. Sa corpulence imposante lui permet de s\'attaquer ├á des proies qui font parfois le double de sa taille, il est d├®nomm├® \"celui qui tue en un bond\". Cette esp├¿ce est quasi menac├®e de disparition. Mesurant jusqu\'├á 1,85m pour un maximum de 150kg. Vitesse 80km/h !'),(83,'La Panth├¿re Noire','Panthera pardus',16,4,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721409257334-Panth%C3%83%C2%A8re%20noire.jpg',0,'Contrairement ├á ce que l\'on croit, la panth├¿re n\'est pas une esp├¿ce en tant que telle. L\'animal est noir en raison d\'une anomalie de coloration due ├á la m├®lanine. Cet animal est rare car il ne repr├®sente qu\'un tr├¿s faible pourcentage des naissance chez les l├®opards et les jaguars. Cependant la population d\'Asie du Sud-Est et de l\'Inde compte 11% de la population de panth├¿res noires. Elle mesure 1,2m pour 50kg et poss├¿de une vitesse de pointe de 60km/h'),(84,'Le Dauphin Rose','Inia geoffrensis',3,4,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721409306079-Dauphin%20rose.jpg',0,'Peu connu et dot├® d\'un nom amusant, le dauphin rose est longtemps rest├® une v├®ritable ├®nigme pour les scientifiques. L\'animal est pourtant essentiellement gris, avec parfois des touches ros├®es sur le ventre. Il devient surtout rose avec l\'├óge !C\'est le plus grand Dauphin d\'eau douce. Le dauphin rose est un c├®tac├® de la famille des Inia. Il mesure entre 2m et 2,80m et p├¿se entre 100kg et 150kg. C\'est une esp├¿ce menac├®e'),(85,'Le Toucan','Ramphastos toco',8,4,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721409362813-Toucan.jpg',0,'Le Toucan Toco appartient ├á l\'ordre des piciformes dont il est le plus grand repr├®sentant ! Il se distingue par son ├®norme bec courb├® et color├® de rouge, orange et jaune. Il mesure entre 58 et 64 cm de long et p├¿se entre 500 et 850 grammes. C\'est un animal plut├┤t sociable.'),(86,'L\'Ara Rouge','Ara Macao',41,4,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721409410487-Ara%20Rouge.jpg',0,'Le rouge ├®carlate domine chez ce grand perroquet tr├¿s color├®. Il porte une grande tache jaune. Il y a peu de diff├®rences physiques entre le m├óle et la femelle. Par contre, les jeunes ont des yeux sombres alors que les adultes ont des yeux jaune clair, presque blanc. Il mesure entre 84 et 90cm pour un poids de 900g ├á 1,5kg'),(87,'Le Tapir','Tapirus',13,4,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721409472386-Tapir.jpg',0,'Dot├® d\'une petite trompe, nageant bien, le tapir joue un r├┤le essentiel dans la biodiversit├® de l\'Am├®rique du sud. Il consomme de nombreuses graines qu\'il diss├®mine avec ses d├®jections. Son puissant passage ├®claircit les sous-bois, ├®liminant les arbustes, favorisant les plantes. Sa taille varie de 2m ├á 2,20m et son poids de 150 ├á 250kg.'),(88,'Le Mille-Pattes G├®ant','Archispirostreptus gigas',2,4,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721409566657-Milles%20pattes.jpg',0,'Au royaume des mille-pattes, Scolopendra gigantea est le plus grand. Cet arthropode g├®ant est connu pour sa morsure douloureuse et venimeuse capable de venir ├á bout d\'esp├¿ces en tout genre. Il est le plus grand scolopendre du monde mesurant entre 25 et 30 centim├¿tres'),(89,'La Grenouille Empoisonneuse','Dendrobates leucomelas',1,4,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721409610459-L%27empoisonneuse.jpg',0,'Aussi appel├®e Grenouille ├á fl├¿che empoisonn├®e parce que les autochtones en tirent du venin dont ils badigeonnent leurs fl├¿ches de mani├¿re ├á ce que leurs proies tombent, inconscientes. A cause de sa couleur particuli├¿re, il s\'agit d\'une esp├¿ce parfaitement reconnaissable. Elle est caract├®ris├®e par sa petite taille, d\'entre 3 et 4 cm de long, et une coloration de bandes noires et jaunes avec des petites taches noires.'),(90,'Le Gorille','Gorilla gorilla',26,4,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721409658310-Gorille.jpg',0,'Les gorilles sont les plus grands des singes et probablement les plus impressionnants. Pourtant, loin de l\'image v├®hicul├®e par la litt├®rature et le cin├®ma, ce sont des animaux pacifiques et timides. Ils sont aussi nos plus proches cousins apr├¿s les chimpanz├®s et les bonobos. Il mesure d\'1,40m ├á 2m (debout) pour un poids moyen de 250kg.Ils sont malheureusement en voie de disparition due ├á la r├®duction de leur habitat et du braconnage.'),(91,'L\'Orang-outan','Pongo pygmaeus',22,4,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721409733429-Orang%20outans.jpg',0,'Le nom ┬½ orang-outan ┬╗ vient du malais orang hutan, qui signifie litt├®ralement ┬½ homme de la for├¬t ┬╗. Ce grand singe a ├®lu domicile ├á la cime des arbres et parcourt inlassablement la canop├®e. Leurs bras puissants sont plus longs que leurs jambes et peuvent atteindre 2 m├¿tres. Ils sont capables de toucher leurs chevilles lorsqu\'ils se tiennent debout. Il mesure d\'1,10m ├á 1,40m pour un poids variant entre 40 et 90kg.'),(92,'Le Dromadaire','Camelus dromedarius',30,2,'https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721414597263-Dromadaire.jpg',0,'Appel├® aussi plus commun├®ment le vaisseau du d├®sert, le dromadaire permet ├á l\'homme le transport de marchandises dans le d├®sert. Il mesure de 2,20m ├á 2,50m pour un poids allant de 400kg ├á 600kg.');
/*!40000 ALTER TABLE `animals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avis_attente`
--

DROP TABLE IF EXISTS `avis_attente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `avis_attente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(255) DEFAULT NULL,
  `avis` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avis_attente`
--

LOCK TABLES `avis_attente` WRITE;
/*!40000 ALTER TABLE `avis_attente` DISABLE KEYS */;
/*!40000 ALTER TABLE `avis_attente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avis_rejeter`
--

DROP TABLE IF EXISTS `avis_rejeter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `avis_rejeter` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(255) DEFAULT NULL,
  `avis` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avis_rejeter`
--

LOCK TABLES `avis_rejeter` WRITE;
/*!40000 ALTER TABLE `avis_rejeter` DISABLE KEYS */;
/*!40000 ALTER TABLE `avis_rejeter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avis_valides`
--

DROP TABLE IF EXISTS `avis_valides`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `avis_valides` (
  `id` int NOT NULL AUTO_INCREMENT,
  `pseudo` varchar(255) DEFAULT NULL,
  `avis` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avis_valides`
--

LOCK TABLES `avis_valides` WRITE;
/*!40000 ALTER TABLE `avis_valides` DISABLE KEYS */;
INSERT INTO `avis_valides` VALUES (1,'Jean','Zoo tr├¿s charmant ! A d├®couvrir en famille, de nombreux animaux sont pr├®sents. Des points de restauration, aire de jeux et guide sont disponibles dans le parc.'),(2,'Joey','Un merveilleux week-end en famille. Les enfants en ont pris plein les yeux !'),(3,'Fran├ºois','Nous avons pass├®s une excellente journ├®e');
/*!40000 ALTER TABLE `avis_valides` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contacts`
--

DROP TABLE IF EXISTS `contacts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contacts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `replied` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contacts`
--

LOCK TABLES `contacts` WRITE;
/*!40000 ALTER TABLE `contacts` DISABLE KEYS */;
INSERT INTO `contacts` VALUES (1,'Test','Nous sommes un tests','autre.email@example.com','2024-07-19 13:47:10',1),(2,'Besoin d\'informations guide','Bonjour, j\'aurais souhait├® savoir s\'il est conseill├® d\'avoir un guide pour visiter l\'ensemble du Zoo ? \nCordialement,','autre.email@example.com','2024-07-19 14:58:46',0);
/*!40000 ALTER TABLE `contacts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `habitats`
--

DROP TABLE IF EXISTS `habitats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `habitats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  `animal_list` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `habitats`
--

LOCK TABLES `habitats` WRITE;
/*!40000 ALTER TABLE `habitats` DISABLE KEYS */;
INSERT INTO `habitats` VALUES (2,'La Savane','Les paysages d\'Afrique font encore souvent r├¬ver les Occidentaux. Nombreux sont les animaux de la savane africaine qui sont profond├®ment ancr├®s dans notre imaginaire collectif.        H├®las, beaucoup sont menac├®s de disparition. C\'est pourquoi nous apportons une attention particuli├¿re ├á leur bien ├¬tre chaque jour de l\'ann├®e. Nous recueuillons chaque mois de nouveaux sp├®cimens.','https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721249742530-Savane.jpg','Lion, Hy├¿ne, Chacal, Fennec, Tigre, Hippopotame, Girafe, Dromadaire, El├®phant, Suricate, Babouin, Antilope !'),(3,'Le Marais','Marais, ├®tangs et mar├®cages cachent une biodiversit├® unique, grande comme petite. Ils sont un ├®cosyst├¿me ├á la fois terrestre et aquatique, compos├® d\'une grande ├®tendue d\'eau stagnante peu profonde.        Nous pouvons retrouver ce biotope un peu partout sur la plan├¿te, essentiellement dans les r├®gions chaudes et temp├®r├®es.','https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1720631427794-Marais.jpg','Alligator d\'Am├®rique, Crocodile, Caiman ├á lunettes, Couleuvre ├á collier, Anaconda vert, Buffle d\'Afrique, Faucon p├®lerin, Flamant rose, Raton laveur, Salamandre tigr├®e, Rainette de white, Bec ├á Sabot du Nil !'),(4,'La Jungle','Quand on pense Jungle, nous pensons imm├®diatement Amazonie ! Dix fois la taille de la France, elle poss├¿de une grande vari├®t├® d\'habitats : rivi├¿res, for├¬ts denses, mar├®cages et donc une multitude d\'esp├¿ces animales.        2.5 millions d\'insectes, 500 esp├¿ces d\'oiseaux, 1000 de grenouilles, plus de 600 esp├¿ces de reptiles et mammif├¿res.','https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1720631490899-Jungle.jpg','Le Paresseux, l\'Empereur d\'Amazonie, le Jaguar, la Panth├¿re noire, le Dauphin rose, le Toucan, l\'Ara rouge, la Tapir, le Mille-pattes g├®ant, l\'Empoisonneuse, le gorille, l\'orang-outan !');
/*!40000 ALTER TABLE `habitats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `services`
--

DROP TABLE IF EXISTS `services`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `services` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12511 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `services`
--

LOCK TABLES `services` WRITE;
/*!40000 ALTER TABLE `services` DISABLE KEYS */;
INSERT INTO `services` VALUES (12506,'Le Sauvageon','Snack/caf├®, pr├¿s du centre du parc, ├á c├┤t├® d\'une aire de jeu vous offrira le temps d\'une pause :  boissons chaudes, paninis, burgers, viennoiseries...','https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1721314271200-Le%20Sauvageon.jpg','2024-07-09 17:12:39','2024-07-21 15:55:41'),(12507,'La Serre Gustative','La serre vous propose un snack et une d├®couverte de boissons fruit├®es/aromatiques/d├®tox avec vue sur l\'habitat des flammants roses. Burger et produits veggie sont ├á votre disposition.','https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1720545200594-Restauration.jpg','2024-07-09 17:13:21','2024-07-21 15:56:28'),(12508,'Le Pacha','Le Pacha vous attend pour une d├®gustation des meilleurs plats du parc le temps d\'un repas ├®labor├® avec des saveurs venant des quatre coins du monde.','https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1720545222698-Le%20pacha.jpg','2024-07-09 17:13:43','2024-07-09 17:13:43'),(12509,'Guide','De nombreux guides sont disponibles pour une visite guid├®e du parc sans frais suppl├®mentaire moyennant une simple r├®servation de votre s├®jour ! Il est inclus dans le billet d\'entr├®e.','https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1720545240081-Guide.jpg','2024-07-09 17:14:00','2024-07-09 17:14:00'),(12510,'Train','Le zoo poss├¿de un petit train permettant la visite int├®grale du parc. Son utilisation d├®pend de l\'affluence du parc et ses horaires de disponibilit├® peuvent donc ├¬tre variables. La dur├®e du trajet varie entre 25 et 35 mins. D├®conseill├® aux femmes enceintes. Les enfants doivent rester sous la responsabilit├® d\'un adulte.','https://image-zoo-de-broceliande.s3.eu-west-3.amazonaws.com/1720545264704-Train.jpg','2024-07-09 17:14:26','2024-07-09 17:14:26');
/*!40000 ALTER TABLE `services` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `utilisateurs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `mot_de_passe` varchar(255) NOT NULL,
  `role` enum('administrateur','employ├®','v├®t├®rinaire') NOT NULL,
  `isAdmin` tinyint(1) DEFAULT '0',
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateurs`
--

LOCK TABLES `utilisateurs` WRITE;
/*!40000 ALTER TABLE `utilisateurs` DISABLE KEYS */;
INSERT INTO `utilisateurs` VALUES (3,'Supprimer pour confidentialité','Supprimer pour confidentialité','administrateur',1,''),(26,'Supprimer pour confidentialité','Supprimer pour confidentialité','v├®t├®rinaire',0,'Supprimer pour confidentialité'),(38,'Supprimer pour confidentialité','Supprimer pour confidentialité','employ├®',0,'Supprimer pour confidentialité');
/*!40000 ALTER TABLE `utilisateurs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vetrecords`
--

DROP TABLE IF EXISTS `vetrecords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vetrecords` (
  `id` int NOT NULL AUTO_INCREMENT,
  `animal_id` int DEFAULT NULL,
  `health_status` text,
  `food` text,
  `food_amount` varchar(255) DEFAULT NULL,
  `visit_date` date DEFAULT NULL,
  `details` text,
  `visit_time` time DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_animal_id` (`animal_id`),
  CONSTRAINT `fk_animal_id` FOREIGN KEY (`animal_id`) REFERENCES `animals` (`id`) ON DELETE CASCADE,
  CONSTRAINT `vetrecords_ibfk_1` FOREIGN KEY (`animal_id`) REFERENCES `animals` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vetrecords`
--

LOCK TABLES `vetrecords` WRITE;
/*!40000 ALTER TABLE `vetrecords` DISABLE KEYS */;
INSERT INTO `vetrecords` VALUES (26,56,'Excellent','Antilope','12 KG','2024-07-17',NULL,'07:13:00'),(27,57,'Bon','Feuille','3 KG','2024-07-17',NULL,'07:40:00'),(28,58,'Bon','Poisson','2,5 KG pour cette semaine','2024-07-17',NULL,'07:56:00');
/*!40000 ALTER TABLE `vetrecords` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-21 22:36:21
