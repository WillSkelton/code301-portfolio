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

	Project.load = function(projectData) {
		Project.allProjects = projectData.map(function(element) {
			return new Project(element);
		});
	};



	var source = $("#programTemplate").html();
	var template = Handlebars.compile(source);
	$('#programTemplate').remove();
	console.log(window);
	console.log(window.ProjectView);
	ProjectView.loadProjects();

	ctx.Project = Project;

})(window)
