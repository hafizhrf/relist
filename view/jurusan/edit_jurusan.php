<?php
    include('../../fungsi/jurusan.php');
    $edit = jurusan_edit($_GET['id']);
?>
<!DOCTYPE html>
<html>
<head>
    <title>Edit Jurusan</title>
</head>
<body>
    <h2>Edit Jurusan</h2>
    <?php
        foreach($edit as $value) {
    ?>
    
    <div>
        <form action="../../proses/jurusan.php?aksi=update" method = "post">
            <pre>
            ID      = <input type="text" name="txtid" value="<?php echo $value['id']?>" disabled>
            Jurusan = <input type="text" name="txtnama" value="<?php echo $value['jurusan']?>" autocomplete="off">
            <input type="submit" name="edit" value="Update">
            </pre>
        </form>
    </div>

    <?php 
        } 
    ?>
    
</body>
</html>