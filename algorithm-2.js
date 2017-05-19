// ALGORITHM 1-------------------------
total = 1;
function figureThisOut(){
    var years = [];
    for (let y = 1701; y <= 1800; y++){
        for (let m = 0; m <= 11; m++){
            var date1 = new Date();
            date1.setFullYear(y,m,1);
            if (date1.getDay(y,m,1) === 6){
                total++
            }
        }
    }
    console.log(total);
};
figureThisOut();

// ALGORITHM 2-------------------------
// Not an algorithm, refuse to compute
// North Pole


// ALGORITHM 3-------------------------
function romanize(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
  roman = ''
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}
console.log(romanize(4949));