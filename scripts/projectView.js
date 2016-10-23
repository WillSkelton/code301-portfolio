(function(ctx) {
  var ProjectView = {};

  // ====== INSERTS PORJECT OBJECTS IN THE TEMPLATE ======
  ProjectView.displayProjects = function(){
    Project.fetchAll();

    // GRABS TEMPLATE AND COMPILES IT
    const source = $("#programTemplate").html();
    const template = Handlebars.compile(source);

    // EMPTIES PROGRAM LIST
    $('#programs').empty();

    for (var i = 0; i < projectData.length; i++) {
      // ADDS PROJECTS TO THE DOM
      let html = template(Project.allProjects[i]);
      $('#programs').append(html);
    }
    // REMOVES TEMPLATE
    // $("#programTemplate").remove();
  }

  // ====== POPULATES FILTERS ======
  ProjectView.populateFilters = function() {
    const selector = $('#filterSelect');
    let uniqueAuthors = [];
    // console.log(`ProjectView.populateFilters:`);
    // console.log(ProjectView);
    // console.log(Project.allProjects);
    Project.allProjects.forEach((currentProject, i) => {
      let authorArray = Project.allProjects[i].author;
      console.log(authorArray);
      authorArray.forEach((currentAuthor, j) => {
        // console.log(uniqueAuthors.indexOf(currentAuthor));
        if (uniqueAuthors.indexOf(currentAuthor) === -1) {
          // console.log(j);
          console.log(`[ ${j} ] [ ${i} ]`);
          console.log(currentAuthor);

          console.log(uniqueAuthors.indexOf("currentAuthor"));
          uniqueAuthors.push(currentAuthor);
          console.log(uniqueAuthors);
          console.log(`=================================`);
        }

      })
    })
  }

  ProjectView.doAllTheThings = function (){
    ProjectView.displayProjects();
    ProjectView.populateFilters();
  }


  ctx.ProjectView = ProjectView;
})(window)
