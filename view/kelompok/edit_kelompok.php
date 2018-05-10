<?php
    include('../../fungsi/kelompok.php');
    $edit = kelompok_edit($_GET['id']);
?>
<!DOCTYPE html>
<html>
<head>
    <title>Edit Kelompok</title>
</head>
<body>
    <h2>Edit Kelompok</h2>
    <?php
        foreach($edit as $value) {
    ?>
    
    <div>
        <form action="../../proses/kelompok.php?aksi=update" method = "post">
            <pre>
            ID            = <input type="text" name="txtid" value="<?php echo $value['id']?>" disabled>
            Nama Kelompok = <input type="text" name="txtnama" value="<?php echo $value['nama_kelompok']?>" autocomplete="off">
            <input type="submit" name="edit" value="Update">
            </pre>
        </form>
    </div>

    <?php 
        } 
    ?>
    
</body>
</html>