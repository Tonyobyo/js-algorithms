//Confirm the Ending of a String
confirmEnding = (aString, ending) => {
  return aString.endsWith(ending);
}

confirmEnding('Hello World, my name is Michael', 'Michael');

//Convert Celsius to Fahrenheit
convertTemperature = (celsius) => {
  let fahrenheit = celsius * (9/5) + 32;
  return fahrenheit;
};

convertTemperature(Math.floor(Math.random * 50));

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

//Find the Largest Number in an Array
largestNumber = (arr) => {
  return arr.map(Function.apply.bind(Math.max, null));
}

largestNumber([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

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

findLongestWord('Hello World, my name is Michael!');

//Repeat a String
repeatString = (str, times) => {
  if(times > 0){
    return str.repeat(times);
  }else{
    return '';
  }
};

repeatString('Michael', 3);

//Reverse a String
reverseString = (words) => {
  return words.split('').reverse.join('');
};

reverseString('Hello World, my name is Michael!');

//Truncate a String
strTruncate = (str, num) => {
  let strSlice = str.slice(0, num) + '...';

  if(str.length >= num){
    return str;
  }else{
    return strSlice;
  }
}

strTruncate('Hello, my name is Michael', 10);