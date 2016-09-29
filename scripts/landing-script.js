$('#nav-toggle').hide();
$('#mainMenu').hide();
$('#resume').hide();
$('#programs').hide();
$('#currentProgect').hide();
$('#faq').hide();

function enter() {
	$('#landingPage').fadeOut(10);
	$('#nav-toggle').fadeIn(10);
	$('#mainMenu').fadeIn(10);
}
$('#landingPage').show();
$('#enterIcon').on('click', enter);
