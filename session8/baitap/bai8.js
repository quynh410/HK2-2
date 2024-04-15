"use strict";
function hopNhat(obj3, obj4) {
    return Object.assign(Object.assign({}, obj3), obj4);
}
const obj3 = { a: 1, b: 2 };
const obj4 = { b: 3, c: 4 };
const merged = hopNhat(obj3, obj4);
console.log(merged);
