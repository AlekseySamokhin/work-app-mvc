(function (window) {
  class Controller {
    constructor(model, view) {
      const self = this;
      this.view = view;
      this.model = model;

      self.view.bind("newEmployee", function (data) {
        self.addEmployee(data);
      });
    }

    addEmployee(data) {
      this.model.create(data, function () {
        this.view.show(data);
      });
    }

    showEmployees() {
      this.model.read((data) => {
        this.view.render("showEmployee", data);
      });
    }

    setView() {
      this.showEmployees();
    }
  }

  window.app = window.app || {};
  window.app.Controller = Controller;
})(window);
