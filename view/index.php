<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JoinUs!</title>
    <link rel="stylesheet" href="../assets/style-login.css">
</head>
<body>
    <div class="box">
        <h2>Piket Siswa</h2>
    <form method="post" action="../view/siswa/list_siswa.php">
        <div class="inputBox">
            <input type="text" name="username" autocomplete="off" required>
            <label>Username</label>
        </div>
        <div class="inputBox">
            <input type="password" name="password" required>
            <label>Password</label>
        </div>
        <button name="submit" value="SUBMIT">Submit</button>
    </form>
    </div>
    
</body>
</html>