(function (window) {
  class Controller {
    constructor(model, view) {
      this.view = view;
      this.model = model;

      this.view.bind("newEmployee", (data) => {
        this.addEmployee(data);
      });
    }

    addEmployee(data) {
      this.model.create(data, () => {
        //this.view.render("resetForm");
        this.showEmployees();
      });
      this.showEmployees();
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
