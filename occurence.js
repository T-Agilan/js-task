const numbers = [1, 2, 3, 5, 8, 9, 5, 6, 7, 1, 3, 5];
let a=0;
function myFunction(){
for(let i=0;i<numbers.length;i++){
    if(numbers[i]===5)
    a++;
}
}
myFunction();
console.log("The element 5 occurred: "+a);