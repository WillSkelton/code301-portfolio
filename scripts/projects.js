var Programs = function(name, summary, linkToRepo, authors) {
	this.name = name;
	this.summary = summary;
	this.linkToRepo = linkToRepo;
	this.authors = '';
	for (var i = 0; i < authors.length; i++) {
		if (i != authors[authors.length]) {
			this.authors += authors[i] + ', ';
		}
		else {
			this.authors += authors[i];
		}
	}
};

Programs.prototype.toHtml = function () {

	var $newProgram
};
