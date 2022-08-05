(function (window) {
  class Controller {
    constructor(model, view) {
      console.log("2");
      this.view = view;
      this.model = model;

      this.view.bind("newEmployee", (data) => {
        this.addEmployee(data);
      });
    }

    addEmployee(data) {
      this.model.create(data, () => {
        this.view.render("resetForm");
        this.showEmployees();
      });
    }

    showEmployees() {
      console.log("6");
      this.model.read((data) => {
        console.log("9");
        this.view.render("showEmployee", data);
        console.log("-9");
      });
      console.log("-6");
    }

    setView() {
      console.log("5");
      this.showEmployees();
      console.log("-5");
    }
  }

  window.app = window.app || {};
  window.app.Controller = Controller;
})(window);
