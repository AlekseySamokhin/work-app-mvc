(function (window) {
  class View {
    constructor(template) {
      this.template = template;

      this.$add = getElById("add");

      this.$form = getElById("form");

      this.$clear = getElById("clear");
      this.$lastName = getElById("lastName");
      this.$firstName = getElById("firstName");
      this.$middleName = getElById("middleName");
      this.$birthDay = getElById("birthDay");
      this.$male = getElById("male");
      this.$female = getElById("female");
      this.$education = getElById("education");
      this.$workList = getElById("workList");
    }

    show() {
      var data = getDataForm();
      this.$workList.innerHTML = self.template.show([data]);
    }

    render(viewCmd, parameter) {
      const self = this;
      const viewCommands = {
        showEmployee: function () {
          self.$workList.innerHTML = self.template.show(parameter);
        },
      };

      viewCommands[viewCmd]();
    }

    bind(event, handler) {
      const self = this;
      if (event === "newEmployee") {
        $on(self.$add, "click", function () {
          handler(getDataForm());
        });
      }

      if (event === "resetForm") {
        self.$form.reset();
      }
    }
  }

  window.app = window.app || {};
  window.app.View = View;
})(window);
