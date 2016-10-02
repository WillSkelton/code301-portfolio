$('#nav-toggle').hide();
$('#mainMenu').hide();
$('#resume').hide();
$('#programs').hide();
$('#currentProgect').hide();
$('#faq').hide();

function resume() {
	$('#mainMenu').fadeOut(1500);
  $('#resume').fadeIn(1500);


}
$('#resume-button').on('click', resume);
