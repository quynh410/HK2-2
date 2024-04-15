function validatePerson(per: any) {
    // kiểm tra xem có phải là đối tượng hay không
    if (typeof per !== 'object' || per === null) {
        return false;
    }
    if (
        typeof per.name !== 'string' ||
        typeof per.age !== 'number' ||
        typeof per.address !== 'object' ||
        per.address === null
    ) {
        return false;
    }
    return true;
}
//đối tượng 
type A1 ={
    name: string,
    age: number,
    address: object
}
const per1:A1  = {
    name: "hồng",
    age: 30,
    address: {
        city: "Cẩm phả",
        street : "Thanh niên",
        houseNumber: "16A"
    }
};
const per2:A1 = {
    name: "lan",
    age: 25, 
    address: {
        city: "Hà Nội",
        street : "Thanh Xuân",
        houseNumber: "17B"
    }
};
console.log(validatePerson(per1));
console.log(validatePerson(per2)); 
