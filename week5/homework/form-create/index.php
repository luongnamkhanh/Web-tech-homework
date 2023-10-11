<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class="h-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">

  <?php
  $name = $email = "";
  $nameErr = $emailErr = "";
  $valid = true;

  if (isset($_POST["submit"])) {
    $name = $_POST["fullname"];
    $email = $_POST["email"];

    if (empty($name)) {
      $nameErr = "Name is required";
      $valid = false;
    } else if (!preg_match('/^[a-zA-Z ]+$/', $name) || ctype_space($name)) {
      $nameErr = "Name is invalid (contains only space and letters (a-z), only spaces is not valid)";
      $valid = false;
    }

    if (empty($email)) {
      $emailErr = "Email is required";
      $valid = false;
    } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $emailErr = "Invalid email address";
      $valid = false;
    }
  }
  ?>
  <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
        <div class="max-w-md mx-auto">
          <div class="flex items-center space-x-5">
            <div class="block pl-2 font-semibold text-2xl self-start text-gray-700">
              <h2 class="leading-relaxed">Write something</h2>
            </div>
          </div>
          <form action="index.php" method="POST">
            <div class="divide-y divide-gray-200">

              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="flex flex-col">
                  <label class="leading-loose">Fullname: <span class="text-red-500">* <?php echo $nameErr; ?></span></label>
                  <input type="text" name="fullname" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Fullname">
                </div>
                <div class="flex flex-col">
                  <label class="leading-loose">Email: <span class="text-red-500">* <?php echo $emailErr; ?></span></label>
                  <input type="text" name="email" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Email">
                </div>

                <div class="flex flex-col">
                  <label class="leading-loose">Comment:</label>
                  <textarea class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Comment" rows="6" cols="40" name="comment"></textarea>
                </div>
              </div>
              <div class="pt-4 flex items-center space-x-4">
                <input type="submit" name="submit" class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none cursor-pointer">
              </div>
            </div>
            <br>
          </form>
          <?php
          if (isset($_POST["submit"])) {
            if ($valid)
              echo '<p class="text-blue-500">The data you submitted has been recognized </p>';
          }
          ?>
        </div>
      </div>
    </div>
  </div>
</body>

</html>