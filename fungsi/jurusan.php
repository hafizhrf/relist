<?php

    include("koneksi.php");

    function jurusan_read_list($filter){
        global $koneksi;
        if ($filter == ""){
            $sql = "SELECT * FROM tjurusan";
        }
        else{
            $sql = "SELECT * FROM tjurusan WHERE id like '%$filter%'
                                            OR jurusan like '%$filter%'";
        }
        $query = mysqli_query($koneksi, $sql);
        $jmldata = mysqli_num_rows($query);
        if($jmldata > 0){
            while ($data = mysqli_fetch_array($query)){
                $hasil[] = $data;
            }
            return $hasil;
        }
        else {
            return false;
        }
    }

    function jurusan_create($id, $jurusan){
        global $koneksi;
        $sql = "INSERT INTO tjurusan VALUE ('$id','$jurusan')";
        $query = mysqli_query($koneksi, $sql);
        if($query){
            return true;
        }
    }

    function jurusan_delete($id){
        global $koneksi;
        $sql = "DELETE FROM tjurusan WHERE id='$id'";
        $query = mysqli_query($koneksi, $sql);
        if($query){
            return true;
        }
    }

    function jurusan_edit($id){
        global $koneksi;
        $sql = "SELECT * FROM tjurusan WHERE id = '$id'";
        $query = mysqli_query($koneksi, $sql);
            while ($tampil = mysqli_fetch_array($query)){
                $edit[] = $tampil;
            }
            return $edit;
    }
    
    function jurusan_update($id,$jrsn){
        global $koneksi;
        $sql = "UPDATE tjurusan SET jurusan='$jrsn' WHERE id='$id'";
        $query = mysqli_query($koneksi, $sql);
        if($query){
            return true;
        }
    }
?>