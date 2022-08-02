(function (window) {
  class View {
    constructor(template) {
      self = this;
      self.template = template;

      self.$add = getElById("add");
      self.$workList = getElById("workList");
    }

    show(data) {
      var data = getDataForm();
      console.log(data);
      self.$workList.innerHTML = self.template.show([data]);
      //self.clearInput();
    }

    bind = function (type, callback) {
      self = this;
      if (type === "addEmployee") {
        $on(self.$add, "click", function () {
          callback(getDataForm());
        });
      }
    };
  }

  window.app = window.app || {};
  window.app.View = View;
})(window);
