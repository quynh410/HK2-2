function calculateArea(phenotypic: any) {
    if (phenotypic.type === 'square') {
        return Math.pow(phenotypic.sideLength, 2);
    } else if (phenotypic.type === 'circle') {
        return Math.PI * Math.pow(phenotypic.radius, 2);
    } else {
        throw new Error("Lỗi");
    }
}
const square = {
    type: 'square',
    sideLength: 5
};

const circle = {
    type: 'circle',
    radius: 3
};

console.log(calculateArea(square));
console.log(calculateArea(circle)); 