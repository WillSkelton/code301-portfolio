(function(ctx) {
  var View = {};

  View.doAllTheThings = function (){

    Project.fetchAll();

    View.populateFilters();
  }

  View.populateFilters = function() {
    const selector = $('#filterSelect');
    selector.empty();
    selector.append(`<option class='select' value="option">Filter By Name</option>`);
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

    $('#filterSelect').show();
  }

  View.displayProjects = function(){

    const source = $(`#programTemplate`).html();
		const template = Handlebars.compile(source);
    // EMPTIES PROGRAM LIST
    $('#programs').empty();

    Project.allProjects.forEach((currentProject, i) =>{
      // ADDS PROJECTS TO THE DOM
      let html = template(Project.allProjects[i]);
      $('#programs').append(html);
    })

  }

  View.showProjects = function() {

    View.doAllTheThings();


    // ========= SHOW PROGRAMS PAGE =========
    $('#mainMenu').hide();
    $('#resume').hide();
    $('#programs').show();

  }

  View.showResume = function() {

    $('#mainMenu').hide();
    $('#programs').hide();
    $('#filterSelect').hide();

    $('#resume').show();
  }

  View.showMainMenu = function() {

    $('#programs').hide();
    $('#resume').hide();
    $('#filterSelect').hide();

    $('#mainMenu').show();
  }

  ctx.View = View;
})(window)
