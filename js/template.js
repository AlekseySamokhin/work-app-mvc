(function (window) {
  class Template {
    constructor() {
      this.defaultTemplate = `<tr>
          <th> {{number}} </th>
          <th> {{lastName}} {{firstName}} {{middleName}} </th> 
          <th> {{gender}} </th>
          <th> {{birthDay}} </th>
          <th> {{age}} </th> 
          <th> {{education}} </th>
          <th> {{startWorking}} </th>
          <th> {{endWorking}} </th>
          <th> <button> Удалить </button> </th>
       </tr>`;
    }

    show(data) {
      console.log("12-done");
      let i, l;
      let view = "";
      for (i = 0, l = data.length; i < l; i++) {
        var template = this.defaultTemplate;
        template = template.replace("{{number}}", i + 1);
        template = template.replace("{{lastName}}", data[i].lastName);
        template = template.replace("{{firstName}}", data[i].firstName);
        template = template.replace("{{middleName}}", data[i].middleName);
        template = template.replace("{{birthDay}}", data[i].birthDay);
        template = template.replace("{{age}}", data[i].age);
        template = template.replace("{{gender}}", data[i].gender);
        template = template.replace("{{education}}", data[i].education);
        template = template.replace("{{startWorking}}", data[i].startWorking);
        template = template.replace("{{endWorking}}", data[i].endWorking);

        view = view + template;
      }
      return view;
    }
  }

  window.app = window.app || {};
  window.app.Template = Template;
})(window);
