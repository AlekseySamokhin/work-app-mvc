(function (window) {
  class Store {
    constructor(name) {
      this.dataName = name;
      if (!localStorage.getItem(name)) {
        const workData = [];

        localStorage.setItem(name, JSON.stringify(workData));
      }
    }

    save = function (data, callback) {
      var workData = JSON.parse(localStorage.getItem(this.dataName));

      callback = callback || function () {};

      workData.push(data);

      localStorage.setItem(this.dataName, JSON.stringify(workData));

      callback([workData]);
    };

    //findAll = function (callback) {
    //  callback = callback || function () {};
    //  callback.call(this, JSON.parse(localStorage.getItem(this.dataName)));
    //};

    //removeAll = function (callback) {
    //  callback = callback || function () {};
    //  var empl = [];
    //  localStorage.setItem(this.name, JSON.stringify(workData));
    //  callback();
    //};
  }
  window.app = window.app || {};
  window.app.Store = Store;
})(window);
