// 1 Manually Defining objects with some properties and function
let scooter = {
  brand: "Chetak",
  model: "5334",
  color: function () {
    return `${this.brand} of model ${this.model} has White color`;
  },
};

// This is an object

// console.log(scooter.color())

// 2 Creating objects with the help of constructor function. Constructor function can be created with various properties and functions.
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
  this.voice = function () {
    return `${this.brand} with model ${this.model} has loud voice`;
  };
}

let audi = new Car("Audi", "000");
// console.log(audi.voice())

// 3 Creating a constructor function and then later embedding function into it.
function Animal(type) {
  this.type = type;
}

Animal.prototype.noise = function () {
  return `${this.type} makes a sound`;
};

let dog = new Animal("Dog");
// console.log(dog.noise())

// 4 Creating a function for all the arrays. It does not require constructor function.
Array.prototype.name = function () {
  return `Custom Array ${this}`;
};

let myArray = [1, 2, 3, 4, 5];
// console.log(myArray.name())

let myNewArray = [2, 4, 6, 8, 10];
// console.log(myNewArray.name())

// 5 Inheritance : A class can access the methods and variables/consonants(properties) of another class by inheriting it. A class is a factory of objects , we can create as many objects as we want from the class , so it is also known as blueprint. Whereas objects are the instances (Soft copy) of class. A class can contain constructor , methods and properties.

class bike {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  carType() {
    return `${this.brand} has model ${this.model}`;
  }
}

class cycle extends bike {
  cycleType() {
    return `${this.brand} has model ${this.model}. This implements inheritance in Javascript`;
  }
}

let hero = new cycle("Hero", "5554");
// console.log(hero.cycleType())

// 6 Encapsulation : Object data can't be accessed outside class if it is initiated with #

class BankAccount {
  #balance = 0;

  getDeposit(amount) {
    this.#balance += amount;
    return `Amount Deposited Successfully !`;
  }
  getBalance() {
    return `Balance : $ ${this.#balance}`;
  }
}

let axis = new BankAccount();
// console.log(axis.getDeposit(45))
// console.log(axis.getBalance())

// 7 Data Abstraction : The process of hiding irrelevant details and only showing essential functionality of a class is known as data abstraction.

class CoffeeMachine {
  start() {
    // Collecting data form data bases
    // Verifying data
    // Installing program
    return `Starting coffee machine...`;
  }
  brew() {
    // Making things ready
    // Connecting to the server
    return `Brewing of the coffee started...`;
  }
  bttn() {
    let b1 = this.start();
    let b2 = this.brew();
    return `${b1} \n${b2}`;
  }
}

let bru = new CoffeeMachine();
// console.log(bru.bttn())

// 8 Polymorphism : Having same name but performing different tasks

class Bird {
  fly() {
    return `Birds can fly`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let sparrow = new Bird();
// console.log(sparrow.fly())

let penguin = new Penguin();
// console.log(penguin.fly())

// 9 Static Methods : They are the special methods created inside a class and these methods does not require the an object to be get called. These methods can be directly called by the class name.

class animal {
  static wild(anm) {
    return `${anm} is likely to be wild.`;
  }
}

// console.log(animal.wild("Tiger"))

// 10 Getters and Setters : These are the special methods which are used to get and set the value of a method/constructor inside a class.

class Employee {
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Negaitive salary not allowed!");
    }
    this.name = name;
    this._salary = salary;
  }

  get salary() {
    return `You are not allowed to get the salary`;
  }

  set salary(value) {
    if (salary < 0) {
      console.error("Negative value not allowed!");
    }
    this._salary = value;
  }
}

// let sham = new Employee("Sham", -3700);
// console.log(sham.salary)

class User {
    constructor(name) {
        this._name = name; // convention: _ means "private"
    }

    get name() {
        return this._name.toUpperCase(); // modify while getting
    }

    set name(value) {
        this._name = value.trim(); // clean before setting
    }
}

let user1 = new User("rahul");

console.log(user1.name); // RAHUL (getter called)

user1.name = "   aman   "; // setter called
console.log(user1.name); // AMAN