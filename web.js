$(document).ready(function() {
	console.log("jQuery loaded");
	
	$('h1 span').on('mouseover', function() {
		$(this).addClass('crossOut');
		
		shuffleController();
	});
});


function shuffleController() {
	var container = $("#container")
    var userText = $('#userText'); 
		
	container.shuffleLetters({
		"text": userText.val()
	},
	function() {
		userText.val("Lorem ipsum dolor sit amet, consectetur adipiscing elit");
		shuffleController();
	});
}