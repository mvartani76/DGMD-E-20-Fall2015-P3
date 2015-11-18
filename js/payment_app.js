$(document).ready(function(){
	console.log("Document Loaded");
	$('#lesspaymentoptions').hide();
	$('.paperondeskpic').fadeOut(5000).fadeIn(5000);

	// This is my Part 1 Click Effect Code Section
    $('#morepaymentoptions').click(function(){
        $('#morepaymentoptions').hide();
    });

    // This is my Part 1 Click Effect Code Section
    $('#morepaymentoptions').click(function(){
        $('#lesspaymentoptions').show();
    });

    $('#lesspaymentoptions').click(function(){
        $('#lesspaymentoptions').hide();
    });

    $('#lesspaymentoptions').click(function(){
        $('#morepaymentoptions').show();
    });
          
	// This is my Part 1 Hover Effect Code section
	$('.womanaskingformoneypic').hover(function(){
		$('.womanaskingformoneypic').attr({
			'src': './images/woman-asking-for-money.jpg'
		});
	},
	function(){
		$('.womanaskingformoneypic').attr({
			'src': './images/woman-asking-for-money-pre.jpg'
		});
	}); // end hover over woman asking for money pictures
}); // end ready