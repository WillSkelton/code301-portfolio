(function(ctx) {
  var View = {};


  View.populateFilters = function(repos) {
    const selector = $('#filterSelect');
    selector.empty();
    selector.append(`<option class='select' value="option">Filter By Name</option>`);

    let repoNames = [];

    repos.forEach((currenRepo, i) => {
      repoNames[i] = repos[i].name;
    })

    // // APPENDS EACH AUTHOR TO FILTER IN THE DOM
    repoNames.forEach((currentRepo, k) => {
      $('#filterSelect').append(`<option id='filterOption' val=${currentRepo.toLowerCase().replace(/ /g, "")}> ${currentRepo}</option>`);
    })

    $('#filterSelect').show();
  }

  View.showProjects = function() {

    repos.requestRepos(repoView.index);

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
