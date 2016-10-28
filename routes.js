'use strict';

page('/',);
page('/resume', function() {
  console.log(1);
});
page('/programs', ProjectView.showProjects);
page();

// page('mainMenu/currentProgect', currentProgect.load());
// page('mainMenu/faq', faq.load());
// page('mainMenu/updates', updates.load());
// page('mainMenu/feedback', feedback.load());
// page('*', error);
