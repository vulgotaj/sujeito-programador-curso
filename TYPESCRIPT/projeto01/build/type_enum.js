"use strict";
// Type ENUM
Object.defineProperty(exports, "__esModule", { value: true });
var DesignColors;
(function (DesignColors) {
    DesignColors["white"] = "#FFF";
    DesignColors["black"] = "#000";
})(DesignColors || (DesignColors = {}));
console.log(DesignColors.black);
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 0] = "ADMIN";
    StatusPermission[StatusPermission["USER"] = 1] = "USER";
})(StatusPermission || (StatusPermission = {}));
console.log(StatusPermission.ADMIN);
console.log(StatusPermission.USER);
// Serve para meio que enumerar propriedades de um objeto 
//# sourceMappingURL=type_enum.js.map