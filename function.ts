// c? is a optional parameter
function add(a: number, b: number, c?: number): number {
  return c ? a + b + c : a + b;
}

console.log(add(6, 6));
console.log(add(4, 5, 6));

// num3=10 is default assigned value.
// if no third argument is given then default value will be used in function.
const sub = (num1: number, num2: number, num3 = 10): number =>
  num1 - num2 - num3;

console.log(sub(10, 4));
console.log(sub(10, 2, 3));

function add1(num1: number, num2: number, ...num3: number[]): number {
  return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers = [1, 2, 3, 4, 5];
console.log(add1(2, 3, ...numbers));
//or you can use it like below as well
// console.log(add1(2, 3, ...[1, 2, 3, 4, 5]));
// also like below
// console.log(add1(2, 3, 1, 2, 3, 4, 5));

// This is a generic function where type is only act as a placeholder it doesn't mean anything.
// While using the function type will replace by actual datatype.
// You can define Type if want to shown like below.
function getItems<Type>(items: Type[]): Type[] {
  return new Array<Type>().concat(items);
}
 
let concatResults = getItems([1, 2, 3, 4, 5]);
// You can also use
// let concatResults = getItems<number>([1, 2, 3, 4, 5]);

let ConcatStrings = getItems(["a", "b", "c", "d", "e"]);
// You can also use
// let ConcatStrings = getItems<string>(["a", "b", "c", "d", "e"]);
