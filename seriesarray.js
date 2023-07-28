// Add number at start of array

let x = [32, 65, 98, 12, 8, 36];
x.unshift(7);
console.log(x);

// Remove last element
x.pop(36);
console.log(x);

// Add element at 2nd index
x.splice(2, 0, 42);
console.log(x);

// Remove first element
x.shift();
console.log(x);

// Add new last element
x.push(75);
console.log(x);
