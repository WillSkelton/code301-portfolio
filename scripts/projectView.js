(function(ctx) {
  var ProjectView = {};

  // ====== INSERTS PORJECT OBJECTS IN THE TEMPLATE ======
  ProjectView.displayProjects = function(){

    // GRABS TEMPLATE AND COMPILES IT
    const source = $("#programTemplate").html();
    const template = Handlebars.compile(source);


    // EMPTIES PROGRAM LIST
    $('#programs').empty();

    Project.allProjects.forEach((currentProject, i) =>{
      // ADDS PROJECTS TO THE DOM
      let html = template(Project.allProjects[i]);
      $('#programs').append(html);
    })
    // REMOVES TEMPLATE
    // $("#programTemplate").remove();
  }

  // ====== POPULATES FILTERS ======
  ProjectView.populateFilters = function() {
    const selector = $('#filterSelect');
    let uniqueAuthors = [];

    Project.allProjects.forEach((currentProject, i) => {
      let authorArray = Project.allProjects[i].author;
      authorArray.forEach((currentAuthor, j) => {
        // console.log(uniqueAuthors.indexOf(currentAuthor));
        if (uniqueAuthors.indexOf(currentAuthor) === -1) {
          uniqueAuthors.push(currentAuthor);
        }
      })
    })

    // APPENDS EACH AUTHOR TO FILTER IN THE DOM
    uniqueAuthors.forEach((currentAuthor, k) => {
      $('#filterSelect').append(`<option id='filterOption' val=${currentAuthor.toLowerCase().replace(/ /g, "")}> ${currentAuthor}</option>`);
    })
  }

  ProjectView.doAllTheThings = function (){
    Project.fetchAll();

    ProjectView.populateFilters();
  }


  ctx.ProjectView = ProjectView;
})(window)
