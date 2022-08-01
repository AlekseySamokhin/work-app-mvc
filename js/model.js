(function (window) {
  class Model {
    constructor(storage) {
      self = this;
      self.storage = storage;
    }

    create = function (data, callback) {
      data = data.value;
      this.storage.save(data, callback);
    };
  }
  window.app = window.app || {};
  window.app.Model = Model;
})(window);
