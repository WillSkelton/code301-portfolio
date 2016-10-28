(function(ctx) {
  var ProjectView = {};

  // ====== INSERTS PORJECT OBJECTS IN THE TEMPLATE ======
  ProjectView.displayProjects = function(){

    // GRABS TEMPLATE AND COMPILES IT
    // const source = $("#programTemplate").html();
    // const template = Handlebars.compile(source);
    Project.toHTML();


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

  // ====== EVENT HANDLERS ======


  // ProjectView.navScript = function() {
  //   $('#socialButtons').toggle(400);
  //   $('#contextButtons').toggle(400);
  // }

  ProjectView.showResume = function() {
    $('#landingPage').hide();
    $('#mainMenu').hide();
    $('#resume').hide();
    $('#programs').hide();
    $('#currentProgect').hide();
    $('#faq').hide();
    $('updates').hide();
    $('feedback').hide();

    $('#resume').show();
  }

  ProjectView.showProjects = function() {
    // ========= HIDE ALL OTHER PAGES =========
    $('#landingPage').hide();
    $('#mainMenu').hide();
    $('#resume').hide();
    $('#programs').hide();
    $('#currentProgect').hide();
    $('#faq').hide();
    $('updates').hide();
    $('feedback').hide();

    // ========= CALLS THE RESPECTIVE FUNCTIONS WHEN PAGE IS SELECTED =========
    ProjectView.doAllTheThings();

    // ========= SHOW PROGRAMS PAGE =========
    $('#programs').show();
  }



  ProjectView.doAllTheThings = function (){

    Project.fetchAll();

    ProjectView.populateFilters();
  }



  ctx.ProjectView = ProjectView;
})(window)
