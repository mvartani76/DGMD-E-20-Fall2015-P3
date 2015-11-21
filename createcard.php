<!DOCTYPE html>
<head>
  <meta charset="UTF-8">
  <title>Create your Card</title>
  <link href="./css/menu.css" rel="stylesheet">
  <link href="./css/formstyle.css" rel="stylesheet">
  <link href="./css/services.css" rel="stylesheet">
  <link href="./css/createcardstyle.css" rel="stylesheet">
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
                <li class="active"><a href="./createcard.php">Create Card</a></li>
                <li><a href="./login.php">Login</a></li>
                <li><a href="./register.php">Register</a></li>
                <li><a href="./contact.php">Contact</a></li>
              </ul>
          </li>
        </ul>
      </div>
    </div>

	<div class="createcardcontainer">  
		<form id="createcard_id" method="post">
			<h3>Create Your Card</h3>
    		<h4>Please enter the following information to design your custom credit card...</h4>
    		<fieldset>
          <select id="card_image">
            <option value="" disabled selected>Select your Background Image</option>
            <option value="nature">Nature</option>
            <option value="sports">Sports</option>
            <option value="automotive">Automotive</option>
            <option value="skyline">City Skyline</option>
          </select>
        </fieldset>
        <fieldset><input placeholder="First Name" id="card_firstname" name="firstname" type="text"></fieldset>
        <fieldset><input placeholder="Last Name" id="card_lastname" name="lastname" type="text"></fieldset>
        <fieldset>
          <input type="range" min="1" max="100" name="scale" id="card_image_scale">
        </fieldset>

    		<fieldset>
      		<button type="submit" id="createcard_id-create">Create Card</button>
    		</fieldset>
        <fieldset>
          <button type="submit" id="createcard_id-clear">Clear Card</button>
        </fieldset>
  		</form>
	</div>

  <div class="canvascontainer">
    <canvas id="canvas1"></canvas>
    <canvas id="canvas2"></canvas>
    <canvas id="canvas3"></canvas>
    <canvas id="canvas4"></canvas>
  </div>
      
    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="./js/jcanvas.min.js"></script>
    <script src="./js/payment_app.js"></script>

</body>
</html>