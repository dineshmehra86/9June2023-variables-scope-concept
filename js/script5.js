var x = 10;

{ // Block Scope
    var x = 20; // Overwrite the previous value
}

console.log(x);