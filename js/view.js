(function (window) {
  class View {
    constructor(template) {
      self = this;
      self.template = template;

      self.$firstName = qs(".first-name");
      self.$lastName = qs(".last-name");
      self.$middleName = qs(".middle-name");
      self.$addBtn = qs(".btn-success");
      self.$workList = qs(".work-list");
    }

    show(data) {
      var data = getForm();
      self.$workList.innerHTML = self.template.show(data);
      //self.clearInput();
    }

    bind = function (type, callback) {
      self = this;
      if (type === "addEmployee") {
        $on(self.$addBtn, "click", function () {
          callback(self.$firstName);
        });
      }
    };
  }

  window.app = window.app || {};
  window.app.View = View;
})(window);
