(function (window) {
  window.qs = function (selector) {
    return document.querySelector(selector);
  };

  window.getElById = function (id) {
    return document.getElementById(id);
  };

  window.$on = function (element, type, callback) {
    element.addEventListener(type, callback);
  };

  window.getDataForm = function () {
    const lastName = getElById("lastName").value;
    const firstName = getElById("firstName").value;
    const middleName = getElById("middleName").value;
    const birthDay = getElById("birthDay").value;

    const male = getElById("male").checked;
    const formation = getElById("education").checked;

    const gender = male ? "Мужской" || "Женский" : "Неизвестно";
    const education = formation ? "Eсть" : "Нет";

    const dataForm = {
      lastName: lastName,
      firstName: firstName,
      middleName: middleName,
      birthDay: birthDay,
      gender: gender,
      education: education,
    };
    return dataForm;
  };
})(window);
