// args = [name, summary, linkToRepo, authors]
// var Programs = function(args) {
// 	this.name = name;
// 	this.summary = summary;
// 	this.linkToRepo = linkToRepo;
// 	this.authors = '';
// 	for (var i = 0; i < authors.length; i++) {
// 		if (i != authors[authors.length]) {
// 			this.authors += authors[i] + ', ';
// 		}
// 		else {
// 			this.authors += authors[i];
// 		}
// 	}
// };
//
// Programs.prototype.toHtml = function () {
//
// 	var $newProgram
// };
var source = $("#programTemplate").html();
var template = Handlebars.compile(source);
// var context = {
//     title:         'Original Portfolio',
//     repoURL:   'https://github.com/William-F-Skelton/portfolio',
//     summary:      'This was my  first attempt at a full porfiolo after my Codefellows 201 class.',
//     authorURLs:      'William Skelton'
//   };


for (var i = 0; i < projectData.length; i++) {
	var html = template(projectData[i]);
	$('#programs').append(html);
}

$('#programTemplate').remove();

// $('$programTemplate').hide();
