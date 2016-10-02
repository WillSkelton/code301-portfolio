$('#nav-toggle').hide();
$('#mainMenu').hide();
$('#resume').hide();
$('#programs').hide();
$('#currentProgect').hide();
$('#faq').hide();

function enter() {
	$('#mainMenu').fadeOut(1500);
	$('#resume').fadeOut(1500);
	$('#programs').fadeOut(1500);
	$('#currentProgect').fadeOut(1500);
	$('#faq').fadeOut(1500);
	$('#landingPage').fadeOut(1500);
	$('#nav-toggle').fadeIn(1500);
	$('#mainMenu').fadeIn(1500);
}
$('#landingPage').show();
$('#enterIcon').on('click', enter);
$('#home').on('click', enter);
