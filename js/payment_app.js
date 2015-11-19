$(document).ready(function(){
	console.log("Document Loaded");


	
	$('.paperondeskpic').fadeOut(5000).fadeIn(5000);

	// This is my Part 1 Click Effect Code Section
	
	// Initially hide the additional mobile payment companies
	$('#lesspaymentoptions').hide();

	// When clicked, it will hide specific text, show other text, and show a different graphic
    $('#morepaymentoptions').click(function(){
        $('#morepaymentoptions').hide(); // hide the text
        $('#lesspaymentoptions').show(); // show some additional text
        // Change the picture to one that has more payment company logos
        $('.mobilepaylogospic').attr({
			'src': './images/mobile-payment-logos-expanded.png'
		});
    });

    // When clicked, it will revert back to the original text and graphic
    $('#lesspaymentoptions').click(function(){
    	$('#lesspaymentoptions').hide(); // hide the additional text
        $('#morepaymentoptions').show(); // Re-show the original text

        // Revert back to the original picture when the user clicks on less
        $('.mobilepaylogospic').attr({
			'src': './images/mobile-payment-logos.png'
		});
    });
    // End of Part 1 Click Effect Code Section

          
	// This is my Part 1 Hover Effect Code section
	$('.womanaskingformoneypic').hover(function(){
		$('.womanaskingformoneypic').attr({
			'src': './images/woman-asking-for-money.jpg'
		});

		// This is some filtering code in combination with the Hover Effect
		// The paragraph text color alternates between red and a shade of blue
		// when the user hovers over the woman-asking-for-money picture
		$('#sobstoryquotes p').filter(':odd').css('color', 'red' );
		$('#sobstoryquotes p').filter(':even').css('color', '#0c9eed' );
	},
	function(){
		$('.womanaskingformoneypic').attr({
			'src': './images/woman-asking-for-money-pre.jpg'
		});

		// Do not need any filtering for the exit hover as all of the p text will be white
		$('#sobstoryquotes p').css('color', 'white' );
	}); // end hover over woman asking for money pictures



	// form if/else validation

	$('#firstname').focusout(function(event){
		if ($('#firstname').val().length == 0) {
			$('#firstname').css('background-color', '#0c9eed');
			event.preventDefault();
		} else {
			$('#firstname').css('background-color', '#fff');
		}
	}); // end firstname focusout

	$('#lastname').focusout(function(event){
		if ($('#lastname').val().length == 0) {
			$('#lastname').css('background-color', '#0c9eed');
			event.preventDefault();
		} else {
			$('#lastname').css('background-color', '#fff');
		}
	}); // end lastname focusout

	$('#streetaddr1').focusout(function(event){
		if ($('#streetaddr1').val().length == 0) {
			$('#streetaddr1').css('background-color', '#0c9eed');
			event.preventDefault();
		} else {
			$('#streetaddr1').css('background-color', '#fff');
		}
	}); // end streetaddr1 focusout

	$('#city').focusout(function(event){
		if ($('#city').val().length == 0) {
			$('#city').css('background-color', '#0c9eed');
			event.preventDefault();
		} else {
			$('#city').css('background-color', '#fff');
		}
	}); // end city focusout

	$('#state_prov').focusout(function(event){
		if ($('#state_prov').val().length == 0) {
			$('#state_prov').css('background-color', '#0c9eed');
			event.preventDefault();
		} else {
			$('#state_prov').css('background-color', '#fff');
		}
	}); // end state_prov focusout

	$('#zip_post_code').focusout(function(event){
		if ($('#zip_post_code').val().length == 0) {
			$('#zip_post_code').css('background-color', '#0c9eed');
			event.preventDefault();
		} else {
			$('#zip_post_code').css('background-color', '#fff');
		}
	}); // end zip_post_code focusout


	$('#country').focusout(function(event){
		if ($('#country').val().length == 0) {
			$('#country').css('background-color', '#0c9eed');
			event.preventDefault();
		} else {
			$('#country').css('background-color', '#fff');
		}
	}); // end country focusout


	$('#emailaddr').focusout(function(event){
		if ($('#emailaddr').val().length == 0) {
			$('#emailaddr').css('background-color', '#0c9eed');
			event.preventDefault();
		} else {
			$('#emailaddr').css('background-color', '#fff');
		}
	}); // end emailaddr focusout

	$('#confirmemailaddr').focusout(function(event){
		if ($('#confirmemailaddr').val().length == 0) {
			$('#confirmemailaddr').css('background-color', '#0c9eed');
			event.preventDefault();
		} else {
			$('#confirmemailaddr').css('background-color', '#fff');
		}
	}); // end confirmemailaddr focusout

	$('#phonenumber').focusout(function(event){
		if ($('#phonenumber').val().length == 0) {
			$('#phonenumber').css('background-color', '#0c9eed');
			event.preventDefault();
		} else {
			$('#phonenumber').css('background-color', '#fff');
		}
	}); // end phonenumber focusout

	$('#weburl').focusout(function(event){
		if ($('#weburl').val().length == 0) {
			$('#weburl').css('background-color', '#0c9eed');
			event.preventDefault();
		} else {
			$('#weburl').css('background-color', '#fff');
		}
	}); // end weburl focusout

	$('#username').focusout(function(event){
		if ($('#username').val().length == 0) {
			$('#username').css('background-color', '#0c9eed');
			event.preventDefault();
		} else {
			$('#username').css('background-color', '#fff');
		}
	}); // end username focusout

	$('#userpassword').focusout(function(event){
		if ($('#userpassword').val().length == 0) {
			$('#userpassword').css('background-color', '#0c9eed');
			event.preventDefault();
		} else {
			$('#userpassword').css('background-color', '#fff');
		}
	}); // end userpassword focusout

	$('#confirmuserpassword').focusout(function(event){
		if ($('#confirmuserpassword').val().length == 0) {
			$('#confirmuserpassword').css('background-color', '#0c9eed');
			event.preventDefault();
		} else {
			$('#confirmuserpassword').css('background-color', '#fff');
		}
	}); // end confirmuserpassword focusout	

	// Make sure that password length >= 5
	$('#userpassword').focusout(function(event){
		if ($('#userpassword').val().length < 5) {
			alert('Password must be at least 5 characters');
			event.preventDefault();
		}
	}); // end userpassword focusout

      
}); // end ready