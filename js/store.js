(function (window) {
  class Store {
    constructor(name) {
      this._dbName = name;

      if (!localStorage.getItem(name)) {
        const employees = [];

        localStorage.setItem(name, JSON.stringify(employees));
      }
    }

    save(data, callback) {
      const employees = JSON.parse(localStorage.getItem(this._dbName));

      callback = callback || function () {};
      

      employees.push(data);

      localStorage.setItem(this._dbName, JSON.stringify(employees));

      callback(employees);
    }

    findAll(callback) {
      console.log("8");
      const employees = JSON.parse(localStorage.getItem(this._dbName));

      callback(employees);
      console.log("-8");
    }
  }

  window.app = window.app || {};
  window.app.Store = Store;
})(window);
