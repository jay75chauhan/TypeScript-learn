"use strict";
//basic types
let id = 50000;
let cpm = "jay";
let is = false;
let x = "hello";
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let idsany = [1, 2, 3, 4, 5, "kk", false, false, false, false, false];
console.log("id: ", id);
//Tuple types
let person = [2, "gg", true];
console.log("id: ", person);
//Tuple array
let emplo = [
    [1, "one"],
    [2, "two"],
    [3, "three"],
    [4, "four"],
];
//union
let pid;
pid = "hh";
//Enum
var Enum1;
(function (Enum1) {
    Enum1[Enum1["up"] = 0] = "up";
    Enum1[Enum1["down"] = 1] = "down";
    Enum1[Enum1["right"] = 2] = "right";
    Enum1[Enum1["left"] = 3] = "left";
})(Enum1 || (Enum1 = {}));
console.log(Enum1.up);
var Enum2;
(function (Enum2) {
    Enum2[Enum2["up"] = 1] = "up";
    Enum2[Enum2["down"] = 2] = "down";
    Enum2[Enum2["right"] = 3] = "right";
    Enum2[Enum2["left"] = 4] = "left";
})(Enum2 || (Enum2 = {}));
const user = {
    id: 34,
    name: "ff",
};
//type  assertions
let cid = 2;
// let cutomert = <number>cid
let cutomert = cid;
//strictFunctionTypes
function add(x, y) {
    return x + y;
}
console.log(add(2, 2));
function what(message) {
    console.log(message);
}
what(7);
// interface
