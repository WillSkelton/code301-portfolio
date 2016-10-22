(function(ctx) {
  var ProjectView = {};
  var source = $("#programTemplate").html();
  var template = Handlebars.compile(source);

  ProjectView.loadProjects = function(){
    for (var i = 0; i < projectData.length; i++) {
      var html = template(projectData[i]);
      $('#programs').append(html);
    }
  }

  ProjectView.populateFilters = function() {
    let selector = $('');
  }

  console.log(ProjectView);
  ctx.ProjectView = ProjectView;
})(window)
