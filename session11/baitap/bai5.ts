class Department {
    id:number;
    private namee:string;
    private employees :string[];
    constructor(id:number, namee:string, employees:string[]) {
        this.id = id;
        this.namee = namee; 
        this.employees = employees; 
    }
    get id1() {
        return this.id;
    }
    get name() {
        return this.namee;
    }
    get employees1() {
        return this.employees;
    }

    describe() {
        console.log(`Department ID: ${this.id}`);
        console.log(`Department Name: ${this.namee}`);
    }
}
const department = new Department(1, "HR",["hương", "Hồng"]);
console.log(department.id); 
// department.id = 2; // Lỗi
department.describe();
