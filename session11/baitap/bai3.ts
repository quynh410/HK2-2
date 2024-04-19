class Employee {
    name: string;
    protected companys: string;
    private phones: string;
    constructor(name:string, companyss:string, phone:string) {
    this.name = name; // public
        this.companys = companyss; // protected
        this.phones = phone; // private
    }

    printInfo() {
        console.log("__Thông tin nhân viên__");
        console.log("Tên:", this.name);
        console.log("Công ty:", this.companys);
        this.maskPhoneNumber();
    }

    maskPhoneNumber() {
        let maskedPhone = "***-***-" + this.phones.slice(-4);
        console.log("Số điện thoại:", maskedPhone);
    }
}
let employee = new Employee("Huông Anh", "company", "098765456");
employee.printInfo();
