<!DOCTYPE html>
<head>
  <meta charset="UTF-8">
  <title>Register</title>
  <link href="./css/menu.css" rel="stylesheet">
  <link href="./css/formstyle.css" rel="stylesheet">
  <link href="./css/services.css" rel="stylesheet">
  <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>  
</head>
<body>
    <div class="wrapper">
      <div class="navigation">
        <ul class="nav">
            <li class="logo"><a href="#">Mike's Payments</a>
            <li class="btn"><a href="#" class="btn-link">&#9776;</a>
              <ul class="menu">
                <li><a href="./index.php">Home</a></li>
                <li><a href="./services.php">Services</a></li>
                <li><a href="./login.php">Login</a></li>
                <li class="active"><a href="./register.php">Register</a></li>
                <li><a href="./contact.php">Contact</a></li>
              </ul>
          </li>
        </ul>
      </div>
    </div>

<div class="registercontainer">  
  <form id="register_id" method="post">
    <h3>Registration</h3>
    <h4>Please fill out the information below to register with my site...</h4>
    <div class="form50">
      <fieldset><input placeholder="First Name" id="firstname" name="firstname" type="text" tabindex="1" required autofocus></fieldset>
      <fieldset><input placeholder="Last Name" id="lastname" name="lastname" type="text" tabindex="2" required></fieldset>
      <fieldset><input placeholder="Street Address 1" id="streetaddr1" name="streetaddr1" type="text" tabindex="3" required></fieldset>
      <fieldset><input placeholder="Street Address 2" id="streetaddr2" name="streetaddr2" type="text" tabindex="4"></fieldset>
      <fieldset><input placeholder="City" id="city" name="city" type="text" tabindex="5" required></fieldset>
      <fieldset><input placeholder="State/Province" id="state_prov" name="state_prov" type="text" tabindex="6" required></fieldset>
      <fieldset><input placeholder="Zip Code / Postal Code" id="zip_post_code" name="zip_post_code" type="text" tabindex="7" required></fieldset>
      <fieldset><input placeholder="Country" id="country" name="country" type="text" tabindex="8" required></fieldset>
    </div>
    <div class="form50">
      <fieldset><input placeholder="Your Email Address (minimum of 5 characters)" id="emailaddr" name="emailaddr" type="email" tabindex="9" required></fieldset>
      <fieldset><input placeholder="Confirm Email Address" id="confirmemailaddr" name="confirmemailaddr" type="email" tabindex="10" required></fieldset>
      <fieldset><input placeholder="Your Phone Number" id="phonenumber" name="phonenumber" type="tel" tabindex="11" required></fieldset>
      <fieldset><input placeholder="Your Web Site starts with http://" id="weburl" name="weburl" type="url" tabindex="12"></fieldset>
      <fieldset><input placeholder="Desired Username" id="username" name="username" type="text" tabindex="13"></fieldset>
      <fieldset><input placeholder="Password" id="userpassword" name="userpassword" type="password" tabindex="14"></fieldset>
      <fieldset><input placeholder="Confirm Password" id="confirmuserpassword" name="confirmuserpassword" type="password" tabindex="15"></fieldset>
    </div>
    <fieldset>
      <button name="submit" type="submit" id="register-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>

</div>

    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="./js/payment_app.js"></script>  
</body>
</html>