(function(ctx) {

	function Project(opts) {
		this.title = opts.title;
		this.repoURL = opts.repoURL;
		this.summary = opts.summary;
		this.authorURLs = opts.authorURLs;
		this.rank = opts.rank;

	}

	Project.allProjects = [];

	Project.prototype.toHTML = function () {
		var source = $("#programTemplate").html();
		var template = Handlebars.compile(source);
	};

	Project.loadAll = function(projectData) {
		Project.allProjects = projectData.map(function(element) {
			return new Project(element);
		});
	};

	Project.fetchAll = function() {
    if (localStorage.projectData) {
			console.log('Project.fetchAll: if(true)');
      Project.loadAll(JSON.parse(localStorage.projectData));
			console.log(localStorage.projectData);

      // viewFunction();
    } else {
			console.log('Project.fetchAll: if(false)');
      $.getJSON('data/projects.json', function(projectData) {
        Project.loadAll(projectData);
        localStorage.projectData = JSON.stringify(projectData);
        // viewFunction();
      });
    }
  };


	var source = $("#template").html();
	// console.log(source);
	var template = Handlebars.compile(source);
	// $('#programTemplate').remove();

	// ProjectView.loadProjects();
	ctx.Project = Project;

})(window)
