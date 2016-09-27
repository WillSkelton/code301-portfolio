$('#nav-toggle').hide();
function enter() {
	$('#landingPage').fadeOut(1500);
	$('#nav-toggle').fadeIn(1500);
}
$('#enterIcon').on('click', enter);
