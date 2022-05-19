-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 19-Maio-2022 às 18:58
-- Versão do servidor: 5.7.25
-- versão do PHP: 7.1.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mensagem`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `mensagem`
--

CREATE TABLE `mensagem` (
  `id` int(11) NOT NULL,
  `remetente` varchar(10) NOT NULL,
  `destinatario` varchar(10) NOT NULL,
  `assunto` varchar(255) NOT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `mensagem` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `mensagem`
--

INSERT INTO `mensagem` (`id`, `remetente`, `destinatario`, `assunto`, `data`, `mensagem`) VALUES
(3, 'Paulinho', 'Paulinho2', 'Lorem Ipsum', '2022-05-16 18:18:17', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'),
(4, 'Jorginho', 'Jorginho2', 'Bacon ipsum dolor', '2022-05-16 18:19:59', 'Bacon ipsum dolor amet pastrami spare ribs pork kielbasa. Jerky ball tip picanha pork chop, shoulder doner tri-tip chicken alcatra spare ribs pork ground round short loin pastrami. Porchetta kielbasa boudin spare ribs alcatra pork. Strip steak pancetta pork chop chuck landjaeger cupim beef bacon short ribs tail meatloaf. Drumstick meatball t-bone, tongue corned beef frankfurter alcatra prosciutto. Kevin short loin hamburger pork chop shoulder.'),
(6, 'Danilo', 'GeovannePK', 'aaaa', '2022-05-16 21:53:45', 'Pedro Paulo Pereira Pinto, pequeno pintor português, pintava portas, paredes, portais. Porém, pediu para parar porque preferiu pintar panfletos. Partindo para Piracicaba, pintou prateleiras para poder progredir. Posteriormente, partiu para Pirapora. Pernoitando, prosseguiu para Paranavaí, pois pretendia praticar pinturas para pessoas pobres. Porém, pouco praticou, porque Padre Paulo pediu para pintar panelas, porém posteriormente pintou pratos para poder pagar promessas. . Pálido, porém perseverante, preferiu partir para Portugal para pedir permissão para papai para permanecer praticando pinturas, preferindo, portanto, Paris. Partindo para Paris, passou pelos Pirineus, pois pretendia pintá-los. Pareciam plácidos, porém, pesaroso, percebeu penhascos pedregosos, preferindo pintá-los parcialmente');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `usuario` varchar(10) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `senha` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mensagem`
--
ALTER TABLE `mensagem`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mensagem`
--
ALTER TABLE `mensagem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
