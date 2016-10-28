(function(ctx) {
  const mainMenuController = {};

  mainMenuController.init = () => {
    View.showMainMenu();
  }
  ctx.mainMenuController = mainMenuController;
}(window))
