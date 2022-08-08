(function (window) {
    class WorkApp {
        constructor(name) {
            this.storage = new app.Store(name);
            this.template = new app.Template();
            this.view = new app.View(this.template);
            this.model = new app.Model(this.storage);
            console.log("1");
            this.controller = new app.Controller(this.model, this.view);
        }
    }

    console.log("0");

    const appEmployees = new WorkApp("app-work-list");

    function setView() {
        console.log("4");
        appEmployees.controller.setView();
        console.log("-4");
    }

    $on(window, "load", setView);
})(window);
