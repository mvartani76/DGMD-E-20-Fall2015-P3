$(document).ready(function(){
	console.log("Document Loaded");
	$('.paperondeskpic').fadeOut(5000).fadeIn(5000);

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