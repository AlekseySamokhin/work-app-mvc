(function (window) {
  class Model {
    constructor(storage) {
      this.storage = storage;
    }

    create(data, callback) {
      callback = callback || function () {};

      this.storage.save(data, callback);
    }

    read(callback) {
      console.log("7");
      this.storage.findAll(callback);
      console.log("-7");
    }
  }
  window.app = window.app || {};
  window.app.Model = Model;
})(window);
