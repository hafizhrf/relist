-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 09, 2018 at 04:17 AM
-- Server version: 10.1.25-MariaDB
-- PHP Version: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `xirpla1718_28_161710342_randywardhana_smtgenap`
--

-- --------------------------------------------------------

--
-- Table structure for table `tjadwal`
--

CREATE TABLE `tjadwal` (
  `id_kelompok` varchar(10) DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  `tanggal` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tjurusan`
--

CREATE TABLE `tjurusan` (
  `id` varchar(10) NOT NULL,
  `jurusan` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tkelas`
--

CREATE TABLE `tkelas` (
  `id_jurusan` varchar(10) DEFAULT NULL,
  `id` varchar(10) NOT NULL,
  `tingkatan` enum('X','XI','XII','Lulus') NOT NULL,
  `pembagian` enum('A','B') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tkelompok`
--

CREATE TABLE `tkelompok` (
  `id` varchar(10) NOT NULL,
  `nama_kelompok` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tsiswa`
--

CREATE TABLE `tsiswa` (
  `id_kelas` varchar(10) DEFAULT NULL,
  `id_kelompok` varchar(10) DEFAULT NULL,
  `nis` varchar(10) NOT NULL,
  `nama` varchar(30) NOT NULL,
  `absen` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ttugas`
--

CREATE TABLE `ttugas` (
  `id` varchar(6) NOT NULL,
  `nama_tugas` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ttugas_siswa`
--

CREATE TABLE `ttugas_siswa` (
  `nis` varchar(10) DEFAULT NULL,
  `id_jadwal` varchar(10) DEFAULT NULL,
  `id_tugas` varchar(6) DEFAULT NULL,
  `id_tgsiswa` varchar(10) NOT NULL,
  `status` enum('Selesai','Belum') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tuser`
--

CREATE TABLE `tuser` (
  `nis` varchar(10) DEFAULT NULL,
  `id_user` varchar(10) NOT NULL,
  `password` varchar(20) NOT NULL,
  `level` enum('Admin','Koordinator') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tjadwal`
--
ALTER TABLE `tjadwal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_jadkel` (`id_kelompok`);

--
-- Indexes for table `tjurusan`
--
ALTER TABLE `tjurusan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tkelas`
--
ALTER TABLE `tkelas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_jurusan` (`id_jurusan`);

--
-- Indexes for table `tkelompok`
--
ALTER TABLE `tkelompok`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tsiswa`
--
ALTER TABLE `tsiswa`
  ADD PRIMARY KEY (`nis`),
  ADD KEY `fk_kelas` (`id_kelas`),
  ADD KEY `fk_kelompok` (`id_kelompok`);

--
-- Indexes for table `ttugas`
--
ALTER TABLE `ttugas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ttugas_siswa`
--
ALTER TABLE `ttugas_siswa`
  ADD PRIMARY KEY (`id_tgsiswa`),
  ADD KEY `fk_nis` (`nis`),
  ADD KEY `fk_jadtug` (`id_jadwal`),
  ADD KEY `fk_tugas` (`id_tugas`);

--
-- Indexes for table `tuser`
--
ALTER TABLE `tuser`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `fk_user` (`nis`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tjadwal`
--
ALTER TABLE `tjadwal`
  ADD CONSTRAINT `fk_jadkel` FOREIGN KEY (`id_kelompok`) REFERENCES `tkelompok` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `tkelas`
--
ALTER TABLE `tkelas`
  ADD CONSTRAINT `fk_jurusan` FOREIGN KEY (`id_jurusan`) REFERENCES `tjurusan` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `tkelas_ibfk_1` FOREIGN KEY (`id_jurusan`) REFERENCES `tjurusan` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `tkelas_ibfk_2` FOREIGN KEY (`id_jurusan`) REFERENCES `tjurusan` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Constraints for table `tsiswa`
--
ALTER TABLE `tsiswa`
  ADD CONSTRAINT `fk_kelas` FOREIGN KEY (`id_kelas`) REFERENCES `tkelas` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_kelompok` FOREIGN KEY (`id_kelompok`) REFERENCES `tkelompok` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `ttugas_siswa`
--
ALTER TABLE `ttugas_siswa`
  ADD CONSTRAINT `fk_jadtug` FOREIGN KEY (`id_jadwal`) REFERENCES `tjadwal` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_nis` FOREIGN KEY (`nis`) REFERENCES `tsiswa` (`nis`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_tugas` FOREIGN KEY (`id_tugas`) REFERENCES `ttugas` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `tuser`
--
ALTER TABLE `tuser`
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`nis`) REFERENCES `tsiswa` (`nis`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
