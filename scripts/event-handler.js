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
  $('feedback').hide();

	$('#nav-toggle').show();
	$('#mainMenu').show();
}

EventHandler.navScript = function() {
  $('#socialButtons').slideToggle(400);
  $('#contextButtons').toggle(400);
}

EventHandler.showResume = function() {
  $('#landingPage').hide();
  $('#mainMenu').hide();
  $('#resume').hide();
  $('#programs').hide();
  $('#currentProgect').hide();
  $('#faq').hide();
  $('updates').hide();
  $('feedback').hide();

  $('#resume').show();
}

EventHandler.showProjects = function() {
  // ========= HIDE ALL OTHER PAGES =========
  $('#landingPage').hide();
  $('#mainMenu').hide();
  $('#resume').hide();
  $('#programs').hide();
  $('#currentProgect').hide();
  $('#faq').hide();
  $('updates').hide();
  $('feedback').hide();



  // ========= SHOW PROGRAMS PAGE =========
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
  $('feedback').hide();


  // LANDING PAGE
  $('#landingPage').show();
  $('#enterIcon').on('click', EventHandler.landingScript);
  $('#home').on('click', EventHandler.landingScript);

  // NAV
  $('#socialButtons').hide();
  $('#contextButtons').hide();
  $('#nav-toggle').on('click', EventHandler.navScript);

  // RESUME
  $('#resume-button').on('click', EventHandler.showResume);
  $('#res').on('click', EventHandler.showResume);

  // PROJECTS
  $('#programs-button').on('click', EventHandler.showProjects);
  $('#prog').on('click', EventHandler.showProjects);
}



// DOES ALL THE THINGS
EventHandler.addListeners();
