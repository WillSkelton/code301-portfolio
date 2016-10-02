$('#nav-toggle').hide();
$('#mainMenu').hide();
$('#resume').hide();
$('#programs').hide();
$('#currentProgect').hide();
$('#faq').hide();

function programs() {

  $('#mainMenu').fadeOut(1500);
  $('#resume').fadeOut(1500);
  $('#programs').fadeOut(1500);
  $('#currentProgect').fadeOut(1500);
  $('#faq').fadeOut(1500);
  $('#programs').fadeIn(1500);


}
$('#programs-button').on('click', programs);
$('#prog').on('click', programs);
