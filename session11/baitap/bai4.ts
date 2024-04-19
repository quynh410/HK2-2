class Vehicle {
    name2 : string;
    year2 : number;
    protected company2 : string;
    private id2 : number;
    constructor(name2:string, year2:number, company2:string, id2:number) {
        this.name2 = name2; // public
        this.year2 = year2; // protected
        this.company2 = company2; // private
        this.id2 = id2; // readonly
    }

    printInfo() {
        console.log("Thông tin phương tiện:");
        console.log("Tên:", this.name2);
        console.log("Năm sản xuất:", this.year2);
        console.log("Hãng xe:", this.company2);
        console.log("ID:", this.id2);
    }
}
let vehicle = new Vehicle("Toyota ", 2022, "Toyota", 1);
vehicle.printInfo();
