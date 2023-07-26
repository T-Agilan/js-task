let str = ["ED", "Black", "Flux", "Technology's"];
let y = 0;
let z;
function myFunction() {
  for (i = 0; i < str.length; i++) {
    if (str[i].length > y) {
      y = str[i].length;
      z = str[i];
    }
  }

  console.log(z);
  console.log(str.indexOf(z));
}
myFunction();
