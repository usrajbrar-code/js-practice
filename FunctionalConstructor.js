// Constructor Function : It is used to create objects easily. It's name must begin with a capital letter (convention) . // In a class it is used with a constructor keyword and no name.

// this keyword is used to refer to the latest context (new object which is accessing its properties and functions)

// 1 Creating Properties in a constructor function to be accessed by different objects
function Laptop(brand, ram){
    this.brand = brand
    this.ram = ram
}

let lenovo = new Laptop("Lenovo", "16 Gb")
// console.log(lenovo)

let mac = new Laptop("Mac", "16 Gb")
// console.log(mac)

// 2 Creating Properties as well methods in constructor function to be accessed by different objects
function Tractor (brand, model){
    this.brand = brand
    this.model = model
    this.farming = function(){
        return `${this.brand}:${this.model} tractor is Aura Farming`
    }
}

let ford = new Tractor("Ford", "3600")
// console.log(ford.farming())

let swaraj = new Tractor("Swaraj", "855")
// console.log(swaraj.farming())

//3 Embedding methods into a constructor function after its creation
function Phone(brand){
    this.brand = brand
}
Phone.prototype.feature = function(){
    return `${this.brand} has 7000 MAH battery`
}

let moto = new Phone("Moto G57 Power")
// console.log(moto.feature())

// 4 Throwing Errors if new keyword is not defined while creating objects
function anime(name){
    if(!new.target){
        throw new Error("While creating an object . You must declare the new keyword!!!");
    }
    this.name = name
}

// let op = anime("One Piece")
// console.log(op)
