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
      Project.loadAll(JSON.parse(localStorage.projectData));
			console.log(1);
      // viewFunction();
    } else {
			console.log(2);
      $.getJSON('data/projects.json', function(projectData) {
				console.log(3);
        Project.loadAll(projectData);
        localStorage.projectData = JSON.stringify(projectData);
				console.log(localStorage);
        // viewFunction();
      });
    }
  };


	Project.fetchAll();
	var source = $("#programTemplate").html();
	var template = Handlebars.compile(source);
	$('#programTemplate').remove();

	ProjectView.loadProjects();
	ctx.Project = Project;

})(window)
