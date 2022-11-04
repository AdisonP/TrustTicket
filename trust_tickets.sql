-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 29 août 2022 à 15:12
-- Version du serveur : 8.0.27
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `trust_tickets`
--

-- --------------------------------------------------------

--
-- Structure de la table `artists`
--

DROP TABLE IF EXISTS `artists`;
CREATE TABLE IF NOT EXISTS `artists` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` int DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `artists`
--

INSERT INTO `artists` (`id`, `name`, `email`, `phone`, `image_url`, `createdAt`, `updatedAt`) VALUES
(1, 'Jul', 'Jul@lesang.fr', 23232323, NULL, '2022-08-29 13:43:39', '2022-08-29 13:43:39'),
(2, 'AC/DC', 'acdc@rock.fr', 23232323, NULL, '2022-08-29 13:43:39', '2022-08-29 13:43:39');

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categorie_name` varchar(255) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `categorie_name`, `image_url`, `createdAt`, `updatedAt`) VALUES
(1, 'Concert', NULL, '2022-08-29 13:43:39', '2022-08-29 13:43:39'),
(2, 'Festival', NULL, '2022-08-29 13:43:39', '2022-08-29 13:43:39'),
(3, 'Événement Sportif', NULL, '2022-08-29 13:43:39', '2022-08-29 13:43:39'),
(4, 'Arts & Culture', NULL, '2022-08-29 13:43:39', '2022-08-29 13:43:39'),
(5, 'Cinéma', NULL, '2022-08-29 13:43:39', '2022-08-29 13:43:39'),
(6, 'Conventions', NULL, '2022-08-29 13:43:39', '2022-08-29 13:43:39');

-- --------------------------------------------------------

--
-- Structure de la table `eventartists`
--

DROP TABLE IF EXISTS `eventartists`;
CREATE TABLE IF NOT EXISTS `eventartists` (
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id_event` int NOT NULL,
  `id_artist` int NOT NULL,
  PRIMARY KEY (`id_event`,`id_artist`),
  KEY `id_artist` (`id_artist`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `type` json DEFAULT NULL,
  `event_date` datetime NOT NULL,
  `localisation` varchar(255) NOT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `id_categorie` int NOT NULL,
  `rating` int DEFAULT NULL,
  `contractAddress` varchar(255) NOT NULL,
  `organisatorWallet` varchar(255) NOT NULL,
  `scannedArray` json DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id_organisator` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_categorie` (`id_categorie`),
  KEY `id_organisator` (`id_organisator`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `events`
--

INSERT INTO `events` (`id`, `name`, `description`, `type`, `event_date`, `localisation`, `price`, `id_categorie`, `rating`, `contractAddress`, `organisatorWallet`, `scannedArray`, `createdAt`, `updatedAt`, `id_organisator`) VALUES
(1, 'Marsatac', 'Marsatac est un festival musical se déroulant à Marseille. Originellement consacré à la scène hip-hop marseillaise, il s\'est élargi au fur et à mesure des années à la scène hip-hop internationale, à l\'electro, au rock et, pour l\'édition 2008, aux musiques', NULL, '2022-08-31 13:56:00', 'Marseille', NULL, 1, NULL, '0x99c1a03713E497D7486432604cC40A84aE492f38', '0xf8f32f09d780b278382515cec69af8d1e7573274', '[]', '2022-08-29 13:57:07', '2022-08-29 13:57:07', 3),
(2, 'Hellfest', 'Le Hellfest, également appelé Hellfest Open Air, est un festival de musique français spécialisé dans les musiques extrêmes, annuellement organisé au mois de juin à Clisson en Loire-Atlantique. Sa forte fréquentation le fait figurer parmi les plus importan', NULL, '2022-08-30 14:12:00', 'Clisson', NULL, 2, NULL, '0xD0B8AA13BfA1Cf03dEF98F619Bae2d2D3b665e7b', '0xf8f32f09d780b278382515cec69af8d1e7573274', '[]', '2022-08-29 14:13:50', '2022-08-29 14:13:50', 3),
(3, 'JapanExpo', 'Japan Expo, parfois abrégé Japan, Japex ou JE, est un salon événementiel professionnel français sur la culture populaire japonaise, qui se déroule au parc des expositions de Paris-Nord Villepinte tous les ans au début du mois de juillet, voire à la fin du', NULL, '2022-08-30 14:17:00', 'Marseille', NULL, 6, NULL, '0x6D8E5C8FAd702416d6725D254cBd317E50a90fd3', '0xf8f32f09d780b278382515cec69af8d1e7573274', '[]', '2022-08-29 14:17:55', '2022-08-29 14:17:55', 3),
(4, 'OM - Paris', 'Olympique de Marseille – Paris Saint-Germain en football désigne la rivalité sportive entre l\'Olympique de Marseille et le Paris Saint-Germain, deux clubs de football français. Elle est considérée comme l\'une des plus grandes rivalités du football françai', NULL, '2022-08-30 14:49:00', 'Marseille', NULL, 3, NULL, '0x7f30424506FfDB938bC090852B3e0cc789E039B8', '0xf8f32f09d780b278382515cec69af8d1e7573274', '[]', '2022-08-29 14:50:36', '2022-08-29 14:50:36', 3);

-- --------------------------------------------------------

--
-- Structure de la table `pictures`
--

DROP TABLE IF EXISTS `pictures`;
CREATE TABLE IF NOT EXISTS `pictures` (
  `id` int NOT NULL AUTO_INCREMENT,
  `path` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `id_user` int DEFAULT NULL,
  `id_artist` int DEFAULT NULL,
  `id_event` int DEFAULT NULL,
  `pictureId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_artist` (`id_artist`),
  KEY `id_event` (`id_event`),
  KEY `pictureId` (`pictureId`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `pictures`
--

INSERT INTO `pictures` (`id`, `path`, `createdAt`, `updatedAt`, `id_user`, `id_artist`, `id_event`, `pictureId`) VALUES
(1, '/images/2290dac6-c6f6-4b42-8f9d-4c976be52217.png', '2022-08-29 13:59:00', '2022-08-29 13:59:00', NULL, NULL, 1, NULL),
(2, '/images/660047c6-4308-4578-b4a6-be5fbbddecbd.png', '2022-08-29 14:14:30', '2022-08-29 14:14:30', NULL, NULL, 2, NULL),
(3, '/images/ebdc3a34-8487-4a75-bb03-2e16aeeca0d9.png', '2022-08-29 14:18:09', '2022-08-29 14:18:09', NULL, NULL, 3, NULL),
(4, '/images/bc903fc5-dfca-4ee6-8ec7-75f4baeb124a.png', '2022-08-29 14:50:41', '2022-08-29 14:50:41', NULL, NULL, 4, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text,
  `description` text,
  `id_seller` int DEFAULT NULL,
  `type` text,
  `event_date` date DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `artist` text,
  `localisation` text,
  PRIMARY KEY (`id`),
  KEY `id_seller` (`id_seller`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `refreshtokens`
--

DROP TABLE IF EXISTS `refreshtokens`;
CREATE TABLE IF NOT EXISTS `refreshtokens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `token` varchar(255) DEFAULT NULL,
  `expiryDate` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `refreshtokens`
--

INSERT INTO `refreshtokens` (`id`, `token`, `expiryDate`, `createdAt`, `updatedAt`, `userId`) VALUES
(1, '06a82975-45a6-4ee0-ac37-90a88b0ebe8e', '2022-08-30 13:49:54', '2022-08-29 13:49:54', '2022-08-29 13:49:54', 2),
(2, '95f141f3-3748-4baf-916b-a9faf36e2afc', '2022-08-30 13:55:29', '2022-08-29 13:55:29', '2022-08-29 13:55:29', 3),
(3, 'c6e6fc90-4cf1-4ded-9c82-89285d2e6bb5', '2022-08-30 14:54:28', '2022-08-29 14:54:28', '2022-08-29 14:54:28', 2);

-- --------------------------------------------------------

--
-- Structure de la table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `roles`
--

INSERT INTO `roles` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'organisator', '2022-08-29 13:43:39', '2022-08-29 13:43:39'),
(2, 'user', '2022-08-29 13:43:39', '2022-08-29 13:43:39');

-- --------------------------------------------------------

--
-- Structure de la table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
CREATE TABLE IF NOT EXISTS `transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_seller` int DEFAULT NULL,
  `id_buyer` int DEFAULT NULL,
  `id_product` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `status` text,
  PRIMARY KEY (`id`),
  KEY `id_buyer` (`id_buyer`),
  KEY `id_product` (`id_product`),
  KEY `id_seller` (`id_seller`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
CREATE TABLE IF NOT EXISTS `transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_seller` int NOT NULL,
  `id_buyer` int NOT NULL,
  `id_event` int NOT NULL,
  `date` datetime NOT NULL,
  `status` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_seller` (`id_seller`),
  KEY `id_buyer` (`id_buyer`),
  KEY `id_event` (`id_event`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text,
  `first_name` text,
  `username` text CHARACTER SET utf8 COLLATE utf8_general_ci,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` int DEFAULT NULL,
  `wallet_address` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `wallet_address` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'INACTIVE',
  `confirmationCode` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `role_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `wallet_address` (`wallet_address`),
  UNIQUE KEY `confirmationCode` (`confirmationCode`),
  KEY `role_id` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `firstname`, `password`, `email`, `phone`, `wallet_address`, `address`, `token`, `status`, `confirmationCode`, `createdAt`, `updatedAt`, `role_id`) VALUES
(1, 'John', '123', 'Doe', '$2b$08$VwAwgOqhm.kMjr1Ci2hZp.hHxt7IPvAe/zMUwTF/QEpAimyJtxfqK', 'johndoe@mail.com', '+3365234E34', '', '', NULL, 'INACTIVE', NULL, '2022-08-29 13:43:39', '2022-08-29 13:43:39', NULL),
(2, NULL, 'User', NULL, '$2b$08$naSy8.2QQRHc6BCQQ1dhFOIyseFSCeY49RrE40Rg0.TkIYuM53E3W', 'user@gmail.com', NULL, '0xd05315a25274207dd8a22b9851b061a38ac66cee', NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZ21haWwuY29tIiwiaWF0IjoxNjYxNzgwOTg0fQ.CtnLxMd67j-mHVZwOUBdmTe1nx6gSbXM54DUASWh1c8', 'INACTIVE', NULL, '2022-08-29 13:49:44', '2022-08-29 13:49:44', 2),
(3, 'Orga', 'Doe', 'John', '$2b$08$DR.zSJuOK299y3sbz/OPwuTsdwHi7SUTrZvoDogkEDM16.gKmjIiW', 'orga@gmail.com', '0612519469', '0xf8f32f09d780b278382515cec69af8d1e7573274', '123 rue joliette', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9yZ2FAZ21haWwuY29tIiwiaWF0IjoxNjYxNzgxMTk4fQ.zD31UUao-6svi1Nbw4wO00PIvqW07iTgQUnul7JGfkk', 'INACTIVE', NULL, '2022-08-29 13:53:18', '2022-08-29 13:53:18', 1);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `eventartists`
--
ALTER TABLE `eventartists`
  ADD CONSTRAINT `eventartists_ibfk_1` FOREIGN KEY (`id_event`) REFERENCES `events` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `eventartists_ibfk_2` FOREIGN KEY (`id_artist`) REFERENCES `artists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `events`
--
ALTER TABLE `events`
  ADD CONSTRAINT `events_ibfk_1` FOREIGN KEY (`id_categorie`) REFERENCES `categories` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `events_ibfk_2` FOREIGN KEY (`id_organisator`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `pictures`
--
ALTER TABLE `pictures`
  ADD CONSTRAINT `pictures_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pictures_ibfk_2` FOREIGN KEY (`id_artist`) REFERENCES `artists` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pictures_ibfk_3` FOREIGN KEY (`id_event`) REFERENCES `events` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `pictures_ibfk_4` FOREIGN KEY (`pictureId`) REFERENCES `events` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `refreshtokens`
--
ALTER TABLE `refreshtokens`
  ADD CONSTRAINT `refreshtokens_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Contraintes pour la table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`id_seller`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`id_buyer`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_ibfk_3` FOREIGN KEY (`id_event`) REFERENCES `events` (`id`) ON UPDATE CASCADE;

--
-- Contraintes pour la table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
