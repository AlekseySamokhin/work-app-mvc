(function (window) {
    window.qs = function (selector) {
        return document.querySelector(selector);
    };

    window.$on = function (element, type, callback) {
        element.addEventListener(type, callback);
    };

    window.getElById = function (id) {
        return document.getElementById(id);
    };

    window.getCurrentTime = function () {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const currentTime = `${day}-${month}-${year}`;
        return currentTime;
    };

    window.getAge = function (birthDay) {
        const dateOfBirth = new Date(birthDay);
        const today = new Date();
        const diff = new Date(today.getTime() - dateOfBirth.getTime());
        const age = Number(diff.getUTCFullYear() - 1970);
        return age;
    };

    window.getDataForm = function () {
        const lastName = getElById("lastName").value;
        const firstName = getElById("firstName").value;
        const middleName = getElById("middleName").value;
        const birthDay = getElById("birthDay").value;

        const male = getElById("male").checked;
        const formation = getElById("education").checked;

        const gender = male ? "Мужской" : "Женский";
        const education = formation ? "Eсть" : "Нет";

        const id = "id" + new Date().getTime();

        const currentTime = getCurrentTime();

        const age = getAge(birthDay);

        const dataForm = {
            id,
            lastName,
            firstName,
            middleName,
            birthDay,
            age,
            gender,
            education,
            currentTime,
            endWorking: null,
        };

        return dataForm;
    };
})(window);
