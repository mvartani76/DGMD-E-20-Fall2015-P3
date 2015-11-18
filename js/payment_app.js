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
}); // end ready