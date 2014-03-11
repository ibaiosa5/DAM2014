(function(){
    "use strict";

    var fecha=/(0[1-9]|[1-2][0-9]|30|31)\/(0[1-9]|1[0-2])\/\d{4}/;
    console.log(fecha.test("Naci en Donosti el 05/04/1982"));
    console.log(fecha.test("Naci en Donosti el 30/02/1982"));
    console.log(fecha.test("Naci en Donosti el 99/99/1982"));
    console.log(fecha.test("Naci en Donosti el 99/99/1982"));
    console.log(fecha.test("Naci en Donosti el 02/99/1982"));

    console.log("Naci en Donosti el 02/04/1982".match(fecha));

    var email=/^(\w+)((\.|-)(\w+))*@((\w+)\.\w{2,})+$/;
    console.log(email.test("iosa5@gmail.com"));
    console.log(email.test("sd-dsik@sd.es"));
    console.log(email.test(".fsd@gmail.com"));
    console.log(email.test(".fsdgmail.com"));

})();