$('#nav-toggle').hide();
function enter() {

	var $enterSection = $('#landingPage');
	$enterSection.fadeOut(1500);


	var $nav = $('#nav');
	// $('#socialButtons').prepend('<img id="nav-toggle" src="assets/backgrounds/general-icon.gif" alt="" />');
	var $navButton = $('#nav-toggle');
	$navButton.fadeIn(1500);
	// console.log($navButton);

}




$('#enterIcon').on('click', enter);

// border-radius: 100px;
// width: 100px;
// <img id="nav-toggle" src="assets/backgrounds/general-icon.gif" alt="" />
