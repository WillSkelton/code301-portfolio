$('#nav-toggle').hide();
$('#mainMenu').hide();
$('#resume').hide();
$('#programs').hide();
$('#currentProgect').hide();
$('#faq').hide();

function enter() {
	$('#landingPage').fadeOut(1500);
	$('#nav-toggle').fadeIn(1500);
	$('#mainMenu').fadeIn(1500);
}
$('#landingPage').show();
$('#enterIcon').on('click', enter);
