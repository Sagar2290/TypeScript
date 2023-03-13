let lname : string = 'john';

let newname = lname.toUpperCase();

console.log(newname);

// Just add 'const' before 'enum' when you are compiling for production.
const enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Red;