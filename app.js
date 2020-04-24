//Factorialize a number
factorial = (aNumber) => {
  if(aNumber < 0){
    return -1;
  }else if(aNumber == 0){
    return 1;
  }else{
    return (aNumber * factorial (aNumber - 1));
  }
}

factorial(Math.floor(Math.random * 10));

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

//Find the largest number in an array
function largestNumber(arr){
  return arr.map(Function.apply.bind(Math.max, null));
}

largestNumber([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);