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
      this.storage.findAll(callback);
    }
  }
  window.app = window.app || {};
  window.app.Model = Model;
})(window);
