/*
   OOP: lập trình hướng đối tượng

   ví dụ về oto 
   thuộc tinnh: màu xe ,......
   phương thức : chạy , phanh , ....


   cách tạo đối tượng 
   1. let , const , var
   let std= {
    ....
   }
   2. dùng new object()
   3. dùng hàm tạo constructor ==> dùng từ khóa new
   4. dùng class

*/

// yêu cầu tao tạo1 đối tượng std 
class Student {
    // Khai báo các thuộc tính
    name : string;
    age : number;
    constructor(name:string, age:number){// minh thu , 5
        this.name = name;// name = minh thu
        this.age = age;// age = minh thu
    }
    //khai báo các phương thức 
    // ví dụ thầy có phương thức let trc
    getName(): string{
        console.log(`Xin chào ${this.name}`);
        return this.name
    }
    getAge ():void{
        console.log(`${this.age}`);
    }
}

// tạo đối tượng dùng từ khóa new
let std1 = new Student("minh thu", 5);
console.log("111", std1);
// lấy thuộc tính 
// đối tượng. thuộc tính
console.log("Đối tượng std1 có thuộc tính name giá trị là", std1.name);
//gọi phương thức 
//đối tượng . phương thức
console.log("gọi phương thức getName",std1.getName());


/*
    các tính chất của lập trình hướng đối tượng
    IV . tính chất
    1. đóng gói : encapsulation
    2. kế thừa : inheritance
    3 đa hình : polymorphysm
    4. tính trừu tượng : abstraction
    
 */


 