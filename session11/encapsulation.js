"use strict";
// các khởi tạo class 
class Students {
    constructor(name) {
        this.name = name;
    }
    // nơi khai báo thuộc tính 
    // thầy phương thức lấy tên người đó
    //get thì phài có return và không có tham số
    get getName() {
        return this.name;
    }
    // thấy có phương thức đi thay đổi tên người đó
    // set thì phải có tham số nhận vào và không cần return
    set setName(newName) {
        this.name = newName;
    }
}
//instance nghĩa là đã tạo đối tượng từ class
let std = new Students("minh thư");
let std11 = new Students("hồng");
// std.setName("hương");
// console.log(std.getName());
// console.log(std);
std.setName = "minh hà";
console.log(std.getName);
