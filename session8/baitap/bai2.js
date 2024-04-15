"use strict";
function validatePerson(per) {
    // kiểm tra xem có phải là đối tượng hay không
    if (typeof per !== 'object' || per === null) {
        return false;
    }
    if (typeof per.name !== 'string' ||
        typeof per.age !== 'number' ||
        typeof per.address !== 'object' ||
        per.address === null) {
        return false;
    }
    return true;
}
const per1 = {
    name: "hồng",
    age: 30,
    address: {
        city: "Cẩm phả",
        street: "Thanh niên",
        houseNumber: "16A"
    }
};
const per2 = {
    name: "lan",
    age: 25,
    address: {
        city: "Hà Nội",
        street: "Thanh Xuân",
        houseNumber: "17B"
    }
};
console.log(validatePerson(per1));
console.log(validatePerson(per2));
