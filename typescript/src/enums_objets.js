"use strict";
var Roles;
(function (Roles) {
    Roles[Roles["User"] = 0] = "User";
    Roles[Roles["Moderator"] = 1] = "Moderator";
    Roles[Roles["Admin"] = 2] = "Admin";
    Roles[Roles["SuperAdmin"] = 3] = "SuperAdmin";
})(Roles || (Roles = {}));
console.log(Roles.Admin);
//Objects
const Roles2 = {
    User: 0,
    Moderator: 1,
    Admin: 2,
    SuperAdmin: 3
};
console.log(Roles2.Admin);
