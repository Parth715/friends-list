"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friends_list_1 = require("./friends-list");
var friends = [
    new friends_list_1.friend("Alan", 37, "alan@gmail.com", false),
    new friends_list_1.friend("Max", 34, "max@gmail.com", true),
    new friends_list_1.friend("Chris", 27, "Chris@gmail.com", false),
    new friends_list_1.friend("Betty", 24, "betty@gmail.com", true),
    new friends_list_1.friend("Steve", 37, "steve@gmail.com", false),
];
console.log(friends_list_1.friend.printHeader());
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var fri = friends_1[_i];
    console.log(fri.print());
}
