// OBJECT DECLARATION
var EventHandler = {};

// EVENT HANDLER METHOD DECLARATIONS
EventHandler.landingScript = function() {
  $('#landingPage').hide();
  $('#mainMenu').hide();
  $('#resume').hide();
  $('#programs').hide();
  $('#currentProgect').hide();
  $('#faq').hide();
  $('updates').hide();

	$('#nav-toggle').show();
	$('#mainMenu').show();
}

EventHandler.navScript = function() {
  $('#socialButtons').slideToggle(400);
  $('#contextButtons').toggle(400);
}

EventHandler.resumeScript = function() {
  $('#landingPage').hide();
  $('#mainMenu').hide();
  $('#resume').hide();
  $('#programs').hide();
  $('#currentProgect').hide();
  $('#faq').hide();
  $('updates').hide();

  $('#resume').show();
}

EventHandler.projectScript = function() {
  $('#landingPage').hide();
  $('#mainMenu').hide();
  $('#resume').hide();
  $('#programs').hide();
  $('#currentProgect').hide();
  $('#faq').hide();
  $('updates').hide();

  $('#programs').show();
}

EventHandler.addListeners = function() {
  // ON LOAD
  $('#nav-toggle').hide();
  $('#mainMenu').hide();
  $('#resume').hide();
  $('#programs').hide();
  $('#currentProgect').hide();
  $('#faq').hide();
  $('updates').hide();

  // LANDING PAGE
  $('#landingPage').show();
  $('#enterIcon').on('click', EventHandler.landingScript);
  $('#home').on('click', EventHandler.landingScript);

  // NAV
  $('#socialButtons').hide();
  $('#contextButtons').hide();
  $('#nav-toggle').on('click', EventHandler.navScript);

  // RESUME
  $('#resume-button').on('click', EventHandler.resumeScript);
  $('#res').on('click', EventHandler.resumeScript);

  // PROJECTS
  $('#programs-button').on('click', EventHandler.projectScript);
  $('#prog').on('click', EventHandler.projectScript);
}



// DOES ALL THE THINGS
EventHandler.addListeners();
