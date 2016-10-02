$('#nav-toggle').hide();
$('#mainMenu').hide();
$('#resume').hide();
$('#programs').hide();
$('#currentProgect').hide();
$('#faq').hide();

function resume() {

	$('#mainMenu').fadeOut(1500);
	$('#resume').fadeOut(1500);
	$('#programs').fadeOut(1500);
	$('#currentProgect').fadeOut(1500);
	$('#faq').fadeOut(1500);
  $('#resume').fadeIn(1500);


}
$('#resume-button').on('click', resume);
$('#res').on('click', resume);
