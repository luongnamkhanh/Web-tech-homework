<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="POST" action="">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>

        <label for="id">ID:</label>
        <input type="text" id="id" name="id"><br><br>

        <label for="doses">Number of vaccine doses:</label>
        <input type="number" id="doses" name="doses"><br><br>

        <input type="submit" value="Generate QR Code">
    </form>
    <?php
    if (isset($_POST['name']) && isset($_POST['id']) && isset($_POST['doses'])) {
        $name = $_POST['name'];
        $id = $_POST['id'];
        $doses = $_POST['doses'];
        // Include qrcode.php file.
        require_once './phpqrcode/qrlib.php';
        // Create object
        $text = "Name: $name\nID: $id\nDoses: $doses";
        $qrCodeName = 'qrcode.png';

        QRcode::png($text, $qrCodeName);

        // Display the QR code image
        echo "<img src='$qrCodeName' alt='QR Code'>";
    }
    ?>

</body>

</html>