// Global Scope var is the global scope
var a = 10; // Global variables and you access it anywhere

{
    // block scope { }
    console.log(a);
}

{
    // I can have as many as block scope
    let b = 20; // Declered inside the block scope
}
console.log(b); // Trying to access the variables outside the block scope, this is not allowed