function sqr(input:any) {
    if (Array.isArray(input)) {
        return input.map(item => item * item);
    } else {
        return input * input;
    }
}

console.log(sqr(5)); 
console.log(sqr([1, 2, 3, 4, 5]));
