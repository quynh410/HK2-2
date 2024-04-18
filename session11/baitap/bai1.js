"use strict";
class Vehical {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
let Vehical1 = new Vehical("Toyota", 2022, "toyota");
let Vehical2 = new Vehical("honde", 2020, "honda");
console.log("Thông tin của xe 1:");
console.log("Tên:", Vehical1.name);
console.log("Năm sản xuất:", Vehical1.year);
console.log("Hãng xe:", Vehical1.company);
console.log("\nThông tin của xe 2:");
console.log("Tên:", Vehical2.name);
console.log("Năm sản xuất:", Vehical2.year);
console.log("Hãng xe:", Vehical2.company);
