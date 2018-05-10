<?php

    include("../fungsi/kelompok.php");
    if($_GET['aksi'] == "tambah"){
        $id = $_POST["txtid"];
        $nama = $_POST["txtnama"];
        $aksi = kelompok_create($id, $nama);
        if($aksi){
            header("location:../view/kelompok/list_kelompok.php");
        }
        else{
            echo "<script>alert('Penambahan Data Gagal')</script>";
            echo "<script>url:location='../view/kelompok/tambah_kelompok.php';</script>";
        }
    }
    elseif($_GET['aksi'] == "hapus"){
        $id = $_GET["id"];
        $hapus = kelompok_delete($id);
        if($hapus){
            header("location:../view/kelompok/list_kelompok.php");
        }
        else{
            echo "<script>alert('Delete Gagal')</script>";
        }
    }
    elseif($_GET['aksi'] == "update"){
        $id = $_GET["txtid"];
        $nama = $_GET["txtnama"];
        $update = kelompok_update($id, $nama);
        if($update){
            header("location:../view/kelompok/list_kelompok.php");
        }
        else{
            echo "<script>alert('Update Gagal')</script>";
        }
    }

?>