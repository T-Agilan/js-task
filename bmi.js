var bmi = (a, b) => {
  result = Math.round((a / b ** 2) * 10000);
  return result;
};
let result = 0;
console.log(bmi(60, 165));
if (result > 18) console.log("normal");
else console.log("underweight");
if(result >= 18 && result <=24){

}
