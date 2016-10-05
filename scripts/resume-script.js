$('#nav-toggle').hide();
$('#mainMenu').hide();
$('#resume').hide();
$('#programs').hide();
$('#currentProgect').hide();
$('#faq').hide();

function resume() {

	$('#mainMenu').fadeOut(0);
	$('#resume').fadeOut(0);
	$('#programs').fadeOut(0);
	$('#currentProgect').fadeOut(0);
	$('#faq').fadeOut(0);
  $('#resume').fadeIn(0);


}
$('#resume-button').on('click', resume);
$('#res').on('click', resume);
