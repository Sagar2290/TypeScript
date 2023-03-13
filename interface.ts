export interface User {
  name: string;
  // ? makes it a optional.
  age?: number;
  id: number;
  email: string;
}

// Below is an example of destructuring.
// We are exceesing only name and email values.
// Also we can rename it like shown below where.
// name becomes userName and email becomes userLogin.
let { name: userName, email: userLogin }: User = {
  name: "John",
  id: 1,
  email: "",
};
// Now we can you values directly as name
// userName

// user.name;
// user.email;
interface Employees extends User {
  salary: number;
}

let employee: Employees = { name: "John", id: 1, email: "", salary: 1000 };

export interface Login {
  login(): User;
}

//Below is an example of an Array destructuring.
// ...restUsers is contains all values by using spread operator.
let [user1, user2, ...restUsers]: User[] = [
  { name: "John", id: 1, email: "" },
  { name: "John1", id: 2, email: "" },
  { name: "John2", id: 3, email: "" },
  { name: "John3", id: 4, email: "" },
];

console.log(user1);
console.log(user2);
console.log(restUsers)