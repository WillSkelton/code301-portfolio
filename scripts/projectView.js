(function(ctx) {
  var ProjectView = {};
  var source = $("#template").html();
  console.log($("#template").html());
  var template = Handlebars.compile($("#template").html());

  ProjectView.loadProjects = function(){
    for (var i = 0; i < projectData.length; i++) {
      var html = template(projectData[i]);
      $('#programs').append(html);
    }
  }

  ProjectView.populateFilters = function() {
    const selector = $('#filterSelect');
    console.log(ProjectView);
    console.log(Project.allProjects);
  }

  ProjectView.populateFilters();
  ctx.ProjectView = ProjectView;
})(window)
