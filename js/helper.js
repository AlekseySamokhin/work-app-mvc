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

  window.getForm = function () {
    const firstName = getElById("firstName").value;
    const lastName = getElById("lastName").value;
    const middleName = getElById("middleName").value;
    const birthDay = getElById("birthDay").value;
    //const male = getElById("male");
    //const female = getElById("female");
    //const education = getElById("education");

    //if (male.checked) {
    //  let gender = "мужcкой";
    //} else {
    //  let gender = "женский";
    //}

    //if (education.checked) {
    //  let education = "имеется";
    //} else {
    //  let education = "не имеется";
    //}

    const dataEmployee = {
      firstName: firstName,
      lastName: lastName,
      middleName: middleName,
      birthDay: birthDay,
      //gender: gender,
      //education: education,
    };

    return dataEmployee;
  };
})(window);
