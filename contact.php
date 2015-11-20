<!DOCTYPE html>
<head>
  <meta charset="UTF-8">
  <title>Contact Us</title>
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
                <li><a href="./createcard.php">Create Card</a></li>
                <li><a href="./login.php">Login</a></li>
                <li><a href="./register.php">Register</a></li>
                <li class="active"><a href="./contact.php">Contact</a></li>
              </ul>
          </li>
        </ul>
      </div>
    </div>

<div class="contactcontainer">  
  <form id="contact_id" method="post">
    <h3>Quick Contact</h3>
    <h4>Contact us today, and get reply with in 24 hours!</h4>
    <fieldset><input placeholder="First Name" id="firstname" name="firstname" type="text" tabindex="1" required autofocus></fieldset>
    <fieldset><input placeholder="Last Name" id="lastname" name="lastname" type="text" tabindex="2" required></fieldset>
    <fieldset><input placeholder="Your Email Address" id="emailaddr" name="emailaddr" type="email" tabindex="3"></fieldset>
    <fieldset><input placeholder="Your Phone Number" id="phonenumber" name="phonenumber" type="tel" tabindex="4"></fieldset>
    <fieldset><input placeholder="Your Web Site starts with http://" id="weburl" name="weburl" type="url" tabindex="5">
    </fieldset>
	<fieldset><h4>What type of message do you want to send?</h4>
	    <input type="radio" id="dept1" name="dept" value="general" tabindex="6" checked> General
	    <input type="radio" id="dept2" name="dept" value="sales" tabindex="7"> Sales
	    <input type="radio" id="dept3" name="dept" value="marketing" tabindex="8"> Marketing
	    <input type="radio" id="dept4" name="dept" value="technical" tabindex="9"> Technical
	</fieldset>
    <fieldset><textarea placeholder="Type your Message Here...." tabindex="10" required></textarea>
    </fieldset>
    <h4 class="centerh4">Preferred time for phone contact...</h4>
    <div class="form50">
    <fieldset><label>Start Time</label><input id="start_time" name="start_time" type="time" tabindex="11" value="00:00"></fieldset>
  </div>
      <div class="form50">
    <fieldset><label>End Time</label><input id="end_time" name="end_time" type="time" tabindex="12" value="23:59"></fieldset>
  </div>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>

</div>
</body>
</html>