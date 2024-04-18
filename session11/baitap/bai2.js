"use strict";
class Studentss {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let students = [];
let student1 = new Studentss(1, 20, "student1@example.com");
let student2 = new Studentss(2, 21, "student2@example.com");
let student3 = new Studentss(3, 22, "student3@example.com");
students.push(student1, student2, student3);
console.log("Thông tin các sinh viên trong mảng:");
students.forEach((student, index) => {
    console.log(`Sinh viên ${index + 1}:`);
    console.log("ID:", student.id);
    console.log("Tuổi:", student.age);
    console.log("Email:", student.email);
    console.log("----------------------");
});
