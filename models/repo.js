'use strict';

(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos?sort=updated&per_page=10',
      type: 'GET',
      headers: {
        Authorization: `token ${githubToken}`
      }
    }).done(data => {
        repos.all = data;
      // repos.all = data;
      // console.log(repos.all);
      callback();
    });
  };
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  console.log(repos.all);
  module.repos = repos;
})(window);
