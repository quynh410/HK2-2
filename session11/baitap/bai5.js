"use strict";
class Department {
    constructor(idd, namee) {
        this.idd = idd;
        this.namee = namee;
        this.employees = [];
    }
    get id() {
        return this.idd;
    }
    get name() {
        return this.namee;
    }
    get employees() {
        return this.employees;
    }
    describe() {
        console.log(`Department ID: ${this.idd}`);
        console.log(`Department Name: ${this.namee}`);
    }
}
const department = new Department(1, "HR");
console.log(department.id);
// department.id = 2; // Lỗi
department.describe();
