function hopNhat(obj3: any, obj4:any) {
    return { ...obj3, ...obj4 };
}

const obj3 = { a: 1, b: 2 };
const obj4 = { b: 3, c: 4 };
const merged = hopNhat(obj3, obj4);
console.log(merged);


