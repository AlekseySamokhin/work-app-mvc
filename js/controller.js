(function (window) {
  class Controller {
    constructor(model, view) {
      const self = this;
      this.view = view;
      this.model = model;

      self.view.bind("newEmployee", (data) => {
        this.addEmployee(data);
      });
    }

    addEmployee(data) {
      console.log(data);
      console.log("click addEmployee");
      this.model.create(data, () => {
        this.view.render("resetForm");
        this.showEmployees();
      });
    }

    showEmployees() {
      this.model.read((data) => {
        console.log("showEmployess");
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
