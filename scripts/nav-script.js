var isDisplayed = true;
// console.log(typeof(Colors.darkPurple));

$('#socialButtons').css('display', 'flex');
$('#socialButtons').css('flex-direction', 'column');
$('#socialButtons').css('align-items', 'center');
$('#socialButtons').css('justify-content', 'space-around');
$('#socialButtons').css('box-sizing', 'border-box');
$('#socialButtons').css('padding', '10px');
$('#socialButtons').css('border', '3px solid ' + Colors.darkPurple + '1)');
$('#socialButtons').css('border-radius', '3px');
$('#socialButtons').css('background-color', Colors.darkBlue + '.3)');
$('#socialButtons').css('width', '60px');
$('#socialButtons').hide();


function expandSocialIcons(){

	var logoArray = $('.socialLink');
	if (isDisplayed) {
		isDisplayed = false;
		$('#socialButtons').slideDown(400);

	}
	else {
		isDisplayed = true;
		// $('#socialButtons').hide();
		$('#socialButtons').slideUp(400);

	}
}

$('#nav-toggle').on('click', expandSocialIcons);









//
