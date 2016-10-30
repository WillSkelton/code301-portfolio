'use strict';

(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'github/user/repos?sort=updated&per_page=10',
      type: 'GET',

    }).done(data => {
      console.log(data);
        repos.all = data;

      callback();
    });
  };
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
