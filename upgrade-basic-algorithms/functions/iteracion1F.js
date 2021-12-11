//1.1//

function sum(numa, numb) {
  if (numa > numb) {
    return numa;
  } else {
    return numb;
  }
}
sum(7, 5);
console.log(sum);

//1.2//

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(param) {
  let longestWord = param[0];
  for (let i = 0; i < param.length; i++) {
    if (avengers[i].length > longestWord.length) {
      longestWord = param[i];
    }
  }
}
console.log(longestWord, avengers);
