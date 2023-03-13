import { User, Login } from "./interface";
/*
Below is a example of an interface which could be used as a complex datatype
we can reuse this properties anywhere to minimise code duplication.
There is a other file for complete details fo interface named: interface.ts

interface Address {
  street: string;
  city: string;
  sate: string;
  pin:string;
}
*/

// Login is an implemeted interface method made in interface.ts
class Employee implements Login {
  #id: number;

  protected name: string;

  address: string;
  // You can use provide value with interface like shown below.
  // address: Address;

  // This is a Getter function.
  get empId(): number {
    return this.#id;
  }

  //This is a setter function.
  set empId(id: number) {
    this.#id = id;
  }

  // You can call static members without making a new instance
  // This is a static method which can be called by itself like:
  // If abc = new Employee then:
  // abc.getEmployeeCount(); // Example shown below in case of john.
  // Without making in instance is: Employee.getEmployeeCount();
  static getEmployeeCount(): number {
    return 50;
  }

  constructor(id: number, name: string, address: string) {
    this.#id = id;
    this.name = name;
    this.address = address;
  }
  login(): User {
    return { name: "John", id: 1, email: "" };
  }

  getNameWithAddress(): string {
    return `${this.name} stays at ${this.address}`;
  }
}

let john = new Employee(1, "john", "HIghway 1");

// Below line of code is a setter function which update the value of ID and set as given value.
john.empId = 100;
// Below line of code is getter function which provides value of given instance.
console.log(john.empId);

// This code below is a example of a static function
// Employee.getEmployeeCount();

class Manager extends Employee {
  constructor(id: number, name: string, address: string) {
    super(id, name, address);
  }

  getNameWithAddress(): string {
    return `${this.name} is a manager at ${this.address}`;
  }
}

let address = john.getNameWithAddress();

// john.id = 1;
// john.name = "john";
// john.address = "HIghway 1";

console.log(address);

let mike = new Manager(2, "Mike", "Cherise Drive");

console.log(mike.getNameWithAddress());
