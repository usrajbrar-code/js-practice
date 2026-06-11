// Prototypes are used to share properties and functions with all instances of an object.
// Method 1 Using __proto__ :
let mac = {
    brand : "MacBook Air",
    chip : "M4"
}
let lenovo = {
    brand : "Lenovo Loq",
    cpu: "Intel Core i7 Gen 13H",
    gpu: "Nvidia RTX 5050",
}
let myBrand = {
    brand : "myBrand Book",
    // __proto__ : lenovo,
}
// console.log(myBrand.__proto__)

//Method 2 Using methods of object (Used Mostly) : 
Object.setPrototypeOf(myBrand, mac)

console.log(Object.getPrototypeOf(myBrand))
