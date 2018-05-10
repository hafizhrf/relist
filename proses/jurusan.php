<?php
    include ("../fungsi/jurusan.php");
    if($_GET['aksi'] == "update"){
        $id = $_GET["txtid"];
        $jurusan = $_POST["txtjurusan"];
        $update = jurusan_update($id,$jurusan);
        if($update){
            header("location:../view/jurusan/list_jurusan.php");
        }	
        else{
            echo "<script>alert('Update Gagal');</script>";
        }
    }
    elseif($_GET['aksi'] == "tambah"){
        $id = $_POST["id"];
        $jurusan = $_POST["jurusan"];
        $aksi = jurusan_create($id, $jurusan);
        if($aksi){
            header("location:../view/jurusan/list_jurusan.php");
        }
        else{
            echo "<script>alert('Penambahan Data Gagal')</script>";
            echo "<script>url:location='../view/jurusan/tambah_jurusan.php';</script>";
        }
    }
    elseif($_GET['aksi'] == "hapus"){
        $id = $_GET["id"];
        $hapus = jurusan_delete($id);
        if($hapus){
            header("location:../view/jurusan/list_jurusan.php");
        }	
        else{
            echo "<script>alert('Delete Gagal');</script>";
        }
    }
?>