(function(ctx) {

	function Project(opts) {
		this.title = opts.title;
		this.repoURL = opts.repoURL;
		this.summary = opts.summary;
		this.author = opts.author.split(`,`);

	}

	Project.allProjects = [];



	ctx.Project = Project;

})(window)
