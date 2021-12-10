"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.friend = void 0;
var friend = /** @class */ (function () {
    function friend(name, age, email, bff) {
        if (bff === void 0) { bff = false; }
        this.name = "";
        this.age = 0;
        this.email = "";
        this.bff = false;
        this.name = name;
        this.age = age;
        this.email = email;
        this.bff = bff;
    }
    friend.prototype.print = function () {
        return this.name + " | " + this.age + " | " + this.email + " | " + this.bff;
    };
    friend.printHeader = function () {
        return "Name         | Age         |Email          |Bff         ";
    };
    return friend;
}());
exports.friend = friend;
