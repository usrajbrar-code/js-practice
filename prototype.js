// Prototypes are used to share methods and functions with all instances of an object.
// Method 1
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

//Method 2 Used frequently
Object.setPrototypeOf(myBrand, mac)

console.log(Object.getPrototypeOf(myBrand))
