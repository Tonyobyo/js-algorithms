//Factorialize a Number
factorial = (aNumber) => {
  if(aNumber < 0){
    return -1;
  }else if(aNumber == 0){
    return 1;
  }else{
    return (aNumber * factorial (aNumber - 1));
  }
};

factorial(Math.floor(Math.random * 10));

//Convert Celsius to Fahrenheit
convertTemperature = (celsius) => {
  let fahrenheit = celsius * (9/5) + 32;
  return fahrenheit;
};

convertTemperature(Math.floor(Math.random * 50));

//Reverse a String
reverseString = (words) => {
  return words.split('').reverse.join('');
};

reverseString("Hello World, my name is Michael!");

//Find the Longest Word in a String
findTheLongestWord = (aSentence) => {
  let wordSplit = aSentence.split(' ');
  let wordCounter = 0;

  for(let i = 0; i < wordSplit.length; i++){
    if(wordSplit[i].length > wordCounter){
      wordCounter = wordSplit[i].length;
    }
  }

  return wordCounter;
};

findLongestWord("Hello World, my name is Michael!");

//Find the Largest Number in an Array
largestNumber = (arr) => {
  return arr.map(Function.apply.bind(Math.max, null));
}

largestNumber([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);