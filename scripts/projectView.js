(function(ctx) {
  var ProjectView = {};
  // var source = $("#template").html();
  // console.log($("#template").html());
  // var template = Handlebars.compile($("#template").html());
  const source = $("#programTemplate").html();
  const template = Handlebars.compile(source);

  ProjectView.displayProjects = function(){
    Project.fetchAll();
    console.log(Project.allProjects);
    for (var i = 0; i < projectData.length; i++) {
      let html = template(Project.allProjects[i]);
      $('#programs').append(html);
    }
  }

  ProjectView.populateFilters = function() {
    const selector = $('#filterSelect');
    console.log(`ProjectView.populateFilters:`);
    console.log(ProjectView);
    console.log(Project.allProjects);
  }



  ProjectView.displayProjects();
  ctx.ProjectView = ProjectView;
})(window)
