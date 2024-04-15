function checkType(variable: any) {
    if (typeof variable === 'number') {
        console.log("Biến là một số.");
    } else if (Array.isArray(variable)) {
        console.log("Biến là một mảng.");
    } else if (typeof variable === 'object' && variable !== null) {
        console.log("Biến là một đối tượng.");
    } else {
        console.log("Không thể xác định loại dữ liệu của biến.");
    }
}

checkType(42);
checkType([1, 2, 3]);
checkType({ name: "Hong", age: 30 });
checkType(null);
checkType("hello");
