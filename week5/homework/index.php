<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $name = $email = "";
        $nameErr = $emailErr = "";
        $valid = true;

        if (isset($_POST["submit"])){
            $name = $_POST["fullname"]; 
            $email = $_POST["email"];

            if (empty($name))
            {
                $nameErr = "Name is required";
                $valid = false;
            }else if (!preg_match('/^[a-zA-Z ]+$/', $name) || ctype_space($name)) {
                $nameErr = "Name is invalid (contains only space and letters (a-z), only spaces is not valid)";
                $valid = false;
            }

            if (empty($email))
            {
                $emailErr = "Email is required";
                $valid = false;
            }else if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
                $emailErr = "Invalid email address";
                $valid = false;
            }
        }
    ?>

    <form action="index.php" method="post">
        Fullname: <input type="text" name="fullname">
        <span class="error">* <?php echo $nameErr;?></span>
        <br><br>
        Email: <input type="text" name="email">
        <span class="error">* <?php echo $emailErr;?></span>
        <br><br>
        Comment: <textarea rows="6" cols="40" name="comment"></textarea>
        <br><br>
        <input type="submit" name="submit">
        <br><br>
    </form>

    <?php
        if (isset($_POST["submit"])){
            if ($valid)
            echo "The data you submitted has been recognized";
        }
    ?>

</body>
</html>