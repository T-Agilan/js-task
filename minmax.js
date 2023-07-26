const num = [10,40,20,60,80,50,30,70]
num.sort(function(a,b){return a - b})
let sum = num.reduce(myFunction)
 function myFunction(total,value){
    return total + value;
 }
  console.log(num.length)