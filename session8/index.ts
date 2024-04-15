/*
1. union ; kiểu kết hợp |
2. intersection : kiểu kết hợp &
*/

let a:number|string|undefined = 1;
a = "Hồng";
// tham chiếu ( array )
let numbers:(number|string)[] = [1, 2, 3, 4, 5]
let b:number = 6;
//
type A = {
    name: string
    address: string,
    phone: string,
}
type C = A&B;
type B = {
    email: string
    
}
let obj:A= {
    name: "Hồng",
    address: 'hn',
    phone:"0987654"
}
let obj1:C= {
    name: "Hồng",
    address: 'hn',
    phone:"0987654",
    email: "hong@gmail.com"
}