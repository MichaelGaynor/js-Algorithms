// --------------------------------Algorithm 1

function isPalindrome(num){
  var n = num.toString();
  var numArray = n.split("");
  var numArray1 = n.split("");
  var arrayReverse1 = numArray1.reverse();
  var arrayReverse2 = arrayReverse1.join("");
  var arrayReverse = parseInt(arrayReverse2);
  var bool = (num === arrayReverse);
  return bool;
}

var pal = [1]
for (let i = 100; i<1000; i++){
  for (let j = 100; j<1000; j++){
    f = (i*j);
    if((isPalindrome(f))&&(f > pal[0])){
      pal.pop();
      pal.push(f);
    }
  }
 }
console.log(`${pal[0]}, a palindrome, is the highest possible palindrome made by multiplying two 3 digit numbers! Cool!`)

  // console.log(num);
  // console.log(arrayReverse1);
  // console.log(arrayReverse2);
  // console.log(arrayReverse);
  // console.log(bool);
  // if(numArray === arrayReverse){
  //   console.log(numArray);
  //   console.log(arrayReverse);
    // bool = true;
  // }else{
  //   // bool = false
  // }
  // console.log(bool);
// }
 // console.log(isPalindrome(1001));
 // console.log(isPalindrome(12345));

// var pal = [1]
// for (let i = 100; i<1000; i++){
//   for (let j = 100; j<1000; j++){
//     f = (i*j);
//     if((isPalindrome(f))&&(f > pal[0])){
      // if(f > pal[0]){
        // console.log(pal);
      // pal.pop();
      // pal.push("palindrome":"f","i":"i","j":"j");
      // pal.push(f);
      // console.log(pal)
 //    }
 //  }
 // }
// console.log(`${pal[0]}, a palindrome, is the highest possible palindrome made by multiplying two 3 digit numbers! Cool!`)
// Those numbers are ${pal[0]("i")} and ${pal[0]("j")}


// --------------------------------Algorithm 2

var found = false;
for (let i=2520; found == false; i+=2520){
  x = 0;
  for (let j=20; j>=11;j--){
    if(i % j != 0){
      break;
    }else{
      x++
    }
  }
  if (x == 10){
      console.log(i);
      found = true;
      break;
  };
};