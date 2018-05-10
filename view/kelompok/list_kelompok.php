<?php
    include("../../fungsi/kelompok.php");
?>
<!DOCTYPE html>
<html>
<head>
    <title>Daftar Data Kelompok</title>
</head>
<body>
    <h2>Data Kelompok</h2>
    <a href="tambah_kelompok.php"><button>Tambah</button></a>
    <div>
		<form method="get" action="">
		<pre>
			Cari : <input type="text" name="cari" placeholder="Cari data">
				   <input type="submit" value="Cari">
		</pre>
		</form>
	</div>
    <table border="1">
		<tr>
			<th>ID</th>
			<th>Nama Kelompok</th>
			<th>Opsi</th>
		</tr>
<?php 
if(isset($_GET["cari"]))
{
	$filter = $_GET["cari"];
}
else
{
	$filter = "";
}
				
$data = kelompok_read_list("$filter");
if($data != false)
{
	foreach ($data as $value) 
	{
?>	
		<tr>
			<td><?php echo $value['id'] ?></td>
			<td><?php echo $value['nama_kelompok'] ?></td>
			<td><a href="edit_kelompok.php?id=<?php echo $value['id']?>">Edit</a> | <a href="../../proses/kelompok.php?aksi=hapus&id=<?php echo $value['id']?>">Delete</a></td>
		</tr>
<?php 
	}
}
else
{
?>
		<tr>
			<td colspan="5">Data tidak ditemukan</td>
		</tr>
<?php
}
?>
	</table>
</body>
</html>
</body>
</html>