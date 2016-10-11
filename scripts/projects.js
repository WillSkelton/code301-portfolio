function(ctx) {

	function Project(opts) {

	}
	var source = $("#programTemplate").html();
	var template = Handlebars.compile(source);

	for (var i = 0; i < projectData.length; i++) {
		var html = template(projectData[i]);
		$('#programs').append(html);
	}


	$('#programTemplate').remove();
}(window)
