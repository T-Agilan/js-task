let input = [
  [5, 8, 7, 12, 13],
  [1, 3, 4],
];
let output = [];
function myFunction() {
  let x = input.flat();
  let y = x.splice(0, 1);
  y.push(x.splice(1, 1));
  return (output = y.flat());
}
console.log(myFunction());



let val = [
  [200, 135, 58, 40, 18],
  [1, 4],
];
let result = [];
function threeDigit() {
  let a = val.flat();
  let b = a.splice(0, 1);
  b.push(a.splice(1, 2));
  return (result = b.flat());
}
console.log(threeDigit());


let value = [[ 50, 40, 20, 25, 55, 85, 35 ] , [ 6, 4, 3, 1 ]]
let outcome = [];
function process(){
    let c = value.flat();
    let d = c.splice(0,1)
    d.push(c.splice(1,3))
    d.splice(0)
    return(outcome = d.flat())
}
console.log(process())