(function (window) {
  class Model {
    constructor(storage) {
      self = this;
      self.storage = storage;
    }

    create = function (data, callback) {
      console.log(data);
      this.storage.save(data, callback);
    };
  }
  window.app = window.app || {};
  window.app.Model = Model;
})(window);
