"use strict";
function printInput(input) {
    if (typeof input === 'string') {
        console.log(input);
    }
    else if (Array.isArray(input)) {
        input.forEach(item => console.log(item));
    }
    else {
        console.log("Đầu vào không hợp lệ.");
    }
}
printInput("Hello, world!");
printInput(["hồng", "lan anh ", "quỳnh"]);
printInput(123);
