'use strict';

page('/',);
page('/mainMenu', ProjectView.landingScript);
page('/mainMenu/resume', ProjectView.showResume);
page('/mainMenu/programs', ProjectView.showProjects);
page();

// page('mainMenu/currentProgect', currentProgect.load());
// page('mainMenu/faq', faq.load());
// page('mainMenu/updates', updates.load());
// page('mainMenu/feedback', feedback.load());
// page('*', error);
