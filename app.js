//Factorialize a number
function factorial(num) {
  if(num < 0) {
    return -1;
  } else if(num == 0) {
    return 1;
  } else {
    return (num * factorial (num - 1));
  }
}

factorial(5);

//Convert Celsius to Fahrenheit
function tempConvert(celsius) {
  let fahrenheit = celsius * (9/5) + 32;
  return fahrenheit;
}

tempConvert(30);

//Reverse a string
function reverse(str){
  return str.split('').reverse().join('');
}

reverse("Hello World");

//Find the longest word in a string
function findLongestWord(someWords){
  let stringSplit = someWords.split(' ');
  let longestWord = 0;

  for(let i = 0; i < stringSplit.length; i++){
    if(stringSplit[i].length > longestWord){
      longestWord = stringSplit[i];
    }
  }

  return longestWord;
}

findLongestWord("My name is Michael");