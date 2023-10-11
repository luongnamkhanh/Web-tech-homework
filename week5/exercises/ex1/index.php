<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action = "" method="POST">
        <label for="name1">Person 1 Name:</label>
        <input type="text" name="name1" id="name1" placeholder="Enter Name1" required><br><br>
        <label for="dob1">Date of Birth:</label>
        <input type="date" name="dob1" id="dob1" placeholder="Enter the Date of Birth1" required><br><br>
        <label for="name2">Person 2 Name:</label>
        <input type="text" name="name2" id="name2" placeholder="Enter Name2" required><br><br>
        <label for="dob2">Date of Birth:</label>
        <input type="date" name="dob2" id="dob2" placeholder="Enter the Date of Birth2" required><br><br>
        <input type="submit" name="submit" value="Submit">
    </form>

    <?php
    // value = $POST[id]
        if(isset($_POST['submit'])) { //check if these field has been filled or not
            $name1 = $_POST['name1'];
            $dob1 = new DateTime($_POST['dob1']);
            $name2 = $_POST['name2'];
            $dob2 = new DateTime($_POST['dob2']);

            // Calculate age of person 1
            $now = new DateTime();
            $age1 = $dob1->diff($now)->y; //function to calculate the difference between two dates in years

            // Calculate age of person 2
            $age2 = $dob2->diff($now)->y;

            // Calculate age difference in days
            $diffInDays = $dob1->diff($dob2)->days; //function to calculate the difference between two dates in days

            // Display results
            echo "<h2>Results:</h2>";
            echo "$name1 is $age1 years old<br>";
            echo "$name2 is $age2 years old<br>";
            echo "Age difference between $name1 and $name2 is $diffInDays days";
        }
    ?>
</body>
</html>
