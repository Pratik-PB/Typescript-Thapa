console.log("Hello type Script");
// // let num:String ="45";
//  const addition=(num1:numbers, num2:numbers):numbers=>{
//     return num1+num2;
// }
// console.log(addition(10,29));
var greet = function (names, age) {
    return "Hello ".concat(names, ", your age is ").concat(age);
};
console.log(greet("Pratik", 1));
var findAverage = function (numbers) {
    var total = numbers.reduce(function (scc, num) { return scc + num; }, 0);
    return total / numbers.length;
};
console.log(findAverage([10, 52, 65, 98, 78]));
var findNumber = function (numbers, target) {
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            return i;
        }
    }
    return -1;
};
var result = findNumber([10, 25, 36, 47, 58], 36);
console.log(result);



