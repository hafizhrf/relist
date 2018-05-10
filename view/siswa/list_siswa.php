<?php
    include("../../fungsi/siswa.php");
?>
<!DOCTYPE html>
<html>
<head>
    <title>Daftar Data Siswa</title>
</head>
<body>
    <h2>Data Siswa</h2>
    <div>
		<form method="get" action="">
		<pre>
			cari : <input type="text" name="cari">
				   <input type="submit" value="cari">
		</pre>
		</form>
	</div>
    <table border="1">
		<tr>
			<th>NIS</th>
			<th>Nama</th>
			<th>Absen</th>
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
				
$data = siswa_read_list("$filter");
if($data != false)
{
	foreach ($data as $value) 
	{
?>	
		<tr>
			<td><?php echo $value['nis'] ?></td>
			<td><?php echo $value['nama'] ?></td>
			<td><?php echo $value['absen'] ?></td>
		</tr>
<?php 
	}
}
else
{
?>
		<tr>
			<td colspan="5">data tidak ditemukan</td>
		</tr>
<?php
}
?>
	</table>
</body>
</html>
</body>
</html>