function loadProjects() {
  for (var i = 0; i < projectData.length; i++) {
    var html = template(projectData[i]);
    $('#programs').append(html);
  }
};
