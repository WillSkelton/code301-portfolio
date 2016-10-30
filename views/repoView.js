'use strict';

(function(module) {
  var repoView = {};

  var ui = function() {
    var $programList = $('#programList');

    $programList.find('ul').empty();
    $programList.show().siblings().hide();
  };

  var render = Handlebars.compile($('#programTemplate').html());

  repoView.index = function() {
    ui();

    $('#programList').append(
      repos.with('name').map(render)
    );
    View.populateFilters(repos.all);

  };

  module.repoView = repoView;
})(window);
