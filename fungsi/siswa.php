<?php

    include("../../fungsi/koneksi.php");

    function siswa_read_list($filter){
        global $koneksi;
        
        if($filter == ""){
            $sql = "SELECT * FROM tsiswa";
        }

        else{
            $sql = "SELECT * FROM tsiswa WHERE nis like '%$filter%'
                                         OR nama like '%$filter%'
                                         OR absen like '%$filter%'";
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

    function kelas_read_list($filter){
        global $koneksi;

        if($filter == ""){
            $sql = "SELECT * FROM tkelas";
        }

        else{
            $sql = "SELECT * FROM tkelas WHERE nama_kelas like '%$filter%'";
        }  
        $query = mysqli_query($koneksi, $sql);
        while ($data = mysqli_fetch_array($query)){
            $hasil[] = $data;
        }
        return $hasil;
    }

?>