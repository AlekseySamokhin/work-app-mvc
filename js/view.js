(function (window) {
  class View {
    constructor(template) {
      this.template = template;

      this.$workList = getElById("workList");

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
    }

    render(viewCmd, parameter) {
      const self = this;
      console.log("10");
      const viewCommands = {
        showEmployee: function () {
          console.log("11");
          self.$workList.innerHTML = self.template.show(parameter);
          console.log("-11");
        },

        resetForm: function () {
          self.$form.reset();
        },
      };
      viewCommands[viewCmd]();
      console.log("-10");
    }

    bind(event, handler) {
      console.log("3");
      const self = this;
      if (event === "newEmployee") {
        $on(self.$add, "click", function () {
          handler(getDataForm());
        });
      }
    }
  }

  window.app = window.app || {};
  window.app.View = View;
})(window);
