$('#nav-toggle').hide();
$('#mainMenu').hide();
$('#resume').hide();
$('#programs').hide();
$('#currentProgect').hide();
$('#faq').hide();

function enter() {
	$('#mainMenu').fadeOut(0);
	$('#resume').fadeOut(0);
	$('#programs').fadeOut(0);
	$('#currentProgect').fadeOut(0);
	$('#faq').fadeOut(0);
	$('#landingPage').fadeOut(0);
	$('#nav-toggle').fadeIn(0);
	$('#mainMenu').fadeIn(0);
}
$('#landingPage').show();
$('#enterIcon').on('click', enter);
$('#home').on('click', enter);
