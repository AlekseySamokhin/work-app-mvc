(function (window) {
  class Template {
    constructor() {
      this.defaultTemplate = '<li class="color">{{teхt}}</li>';
    }

    show(data) {
      var view = "";
      for (let i = 0; i < data.length; i++) {
        var text = this.defaultTemplate;
        text = text.replace("{{teхt}}", data[i]);

        view = view + text;
      }
      return view;
    }
  }

  window.app = window.app || {};
  window.app.Template = Template;
})(window);
