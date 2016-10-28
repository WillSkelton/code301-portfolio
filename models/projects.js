(function(ctx) {

	function Project(opts) {
		this.title = opts.title;
		this.repoURL = opts.repoURL;
		this.summary = opts.summary;
		this.author = opts.author.split(`,`);

	}

	Project.allProjects = [];

	Project.prototype.toHTML = function () {
		const source = $(`#programTemplate`).html();
		const template = Handlebars.compile(source);
	};

	Project.loadAll = function(projectData) {
		Project.allProjects = projectData.map(function(element) {
			return new Project(element);
		});
	};

	Project.fetchAll = function() {
    if (localStorage.projectData) {
      Project.loadAll(JSON.parse(localStorage.projectData));
			View.displayProjects();

    } else {

      $.getJSON('data/projects.json', function(data) {
				localStorage.projectData = JSON.stringify(data);
				console.log(localStorage.projectData);

				Project.loadAll(data);
				View.displayProjects();
			});
    }
  };

	ctx.Project = Project;

})(window)
