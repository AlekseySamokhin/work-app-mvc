(function (window) {
  class Controller {
    constructor(model, view) {
      var self = this;
      self.view = view;
      self.model = model;

      self.view.bind("addEmployee", function (data) {
        self.addEmplooyee(data);
      });
    }

    addEmplooyee(data) {
      var self = this;
      self.model.create(data, function () {
        self.view.show(data);
      });
    }
  }

  window.app = window.app || {};
  window.app.Controller = Controller;
})(window);
