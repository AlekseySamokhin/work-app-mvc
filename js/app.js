(function (window) {
  class WorkApp {
    constructor(name) {
      this.storage = new app.Store(name);
      this.template = new app.Template();
      this.view = new app.View(this.template);
      this.model = new app.Model(this.storage);
      this.controller = new app.Controller(this.model, this.view);
    }
  }

  const appEmployees = new WorkApp("app-work-list");

  function setView() {
    appEmployees.controller.setView();
  }

  $on(window, "load", setView);
})(window);
