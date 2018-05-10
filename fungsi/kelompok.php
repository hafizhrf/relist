<?php

    include("koneksi.php");

    function kelompok_read_list($filter){
        global $koneksi;
        if ($filter == ""){
            $sql = "SELECT * FROM tkelompok";
        }
        else{
            $sql = "SELECT * FROM tkelompok WHERE id like '%$filter%'
                                            OR nama_kelompok like '%$filter%'";
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

    function kelompok_create($id, $nama){
        global $koneksi;
        $sql = "INSERT INTO tkelompok VALUES ('$id', '$nama')";
        $query = mysqli_query($koneksi, $sql);
        if($query){
            return true;
        }
    }

    function kelompok_delete($id){
        global $koneksi;
        $sql = "DELETE FROM tkelompok WHERE id='$id'";
        $query = mysqli_query($koneksi, $sql);
        if ($query){
            return true;
        }
    }

    function kelompok_edit($id){
        global $koneksi;
        $sql = "SELECT * FROM tkelompok WHERE id='$id'";
        $query = mysqli_query($koneksi, $sql);
        while($tampil = mysqli_fetch_array($query)){
            $edit[] = $tampil;
        }
        return $edit;
    }

    function kelompok_update($id, $nama){
        global $koneksi;
        $sql = "UPDATE tkelompok SET nama_kelompok = '$nama' WHERE id = '$id'";
        $query = mysqli_query($koneksi, $sql);
        if ($query){
            return true;
        }
    }
?>