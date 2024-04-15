// biến Union types
let result;

result = 10; 
result = "Hello";
result = true; 
// biến intersection type 

// Interface 'Person' và 'Employee' được kết hợp thành 'Person & Employee'
const person = {
    name: "hong",
    age: 30,
    id: "XYZ123"
};

// Biến 'person' phải đồng thời thỏa mãn cả 'Person' và 'Employee'
person = { name: "hong", age: 25 }; // Không hợp lệ, thiếu thuộc tính 'id'

