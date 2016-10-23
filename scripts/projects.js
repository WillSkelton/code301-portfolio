(function(ctx) {

	function Project(opts) {
		this.title = opts.title;
		this.repoURL = opts.repoURL;
		this.summary = opts.summary;
		this.author = opts.author.split(`,`);

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
			// console.log('Project.fetchAll: if(true)');
      Project.loadAll(JSON.parse(localStorage.projectData));
			// console.log(localStorage.projectData);
			console.log(1);

    } else {
			console.log(2);
			// console.log('Project.fetchAll: if(false)');
      $.getJSON('data/projects.json', function(projectData) {
        localStorage.projectData = JSON.stringify(projectData);
				Project.loadAll(localStorage.projectData);
      });
    }
  };


	// var source = $("#programTemplate").html();

	// var template = Handlebars.compile(source);

	ctx.Project = Project;

})(window)
