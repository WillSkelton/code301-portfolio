var isDisplayed = true;

$('#socialButtons').hide();
$('#contextButtons').hide();


function expandSocialIcons(){

	var logoArray = $('.socialLink');
	if (isDisplayed) {
		isDisplayed = false;
		$('#socialButtons').slideDown(400);
		$('#contextButtons').show(400);

	}
	else {
		isDisplayed = true;
		// $('#socialButtons').hide();
		$('#socialButtons').slideUp(400);
		$('#contextButtons').hide(400);

	}
}

$('#nav-toggle').on('click', expandSocialIcons);









//
