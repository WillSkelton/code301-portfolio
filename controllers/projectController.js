(function(ctx) {
  const projectController = {};

  projectController.init = () => {
    View.showProjects();
  }
  ctx.projectController = projectController;
}(window))
