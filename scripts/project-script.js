$('#nav-toggle').hide();
$('#mainMenu').hide();
$('#resume').hide();
$('#programs').hide();
$('#currentProgect').hide();
$('#faq').hide();

function programs() {

  $('#mainMenu').fadeOut(0);
  $('#resume').fadeOut(0);
  $('#programs').fadeOut(0);
  $('#currentProgect').fadeOut(0);
  $('#faq').fadeOut(0);
  $('#programs').fadeIn(0);


}
$('#programs-button').on('click', programs);
$('#prog').on('click', programs);
