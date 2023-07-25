let str="agilan";
checkPalindrome(str);
function checkPalindrome(str) {
    const x = str.split('');
    const y = x.reverse();
    const z = y.join('');
    (str===z)?console.log("true"):console.log("false");
}