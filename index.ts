
console.log ("Hello type Script");

// // let num:String ="45";

//  const addition=(num1:numbers, num2:numbers):numbers=>{

//     return num1+num2;
// }

// console.log(addition(10,29));





const greet =(names:string, age:number):string=>{

    return `Hello ${names}, your age is ${age}`;

}


console.log(greet("Pratik",1));




const findAverage =(numbers: Array<number>): number =>{

let total = numbers.reduce((scc,num)=> scc+num,0);
return total/numbers.length;
}


console.log(findAverage([10,52,65,98,78]));

const findNumber = (numbers: Array<number>, target: number): number => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            return i;
        }
    }
    return -1;
}
let result: number = findNumber([10,25,36,47,58],36);
console.log(result);



