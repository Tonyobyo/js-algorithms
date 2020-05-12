//Check if boolean
isBoolean = (value) => {
  if(value === true || value === false){
    return true;
  }else{
    return false;
  }
}

isBoolean(null);

//Combine Arrays
combineArrays = (arr1, arr2, n) => {
  let newArr = arr2.splice();

  return newArr.splice(n, 0, ...arr1);
}

combineArrays([1, 2, 3], [4, 5, 6], 1);

//Confirm the ending of a string
confirmEnding = (aString, ending) => {
  return aString.endsWith(ending);
}

confirmEnding('Hello World, my name is Michael', 'Michael');

//Convert Celsius to Fahrenheit
convertTemperature = (celsius) => {
  let fahrenheit = celsius * (9/5) + 32;
  return fahrenheit;
}

convertTemperature(Math.floor(Math.random * 50));

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

//Find array elements
findElements = (arr, func) => {
  let num = 0;
  return arr.filter(func)[num];
}

findElements([1, 2, 3, 4], num => num % 2 === 0);

//Find the largest number in an array
largestNumber = (arr) => {
  return arr.map(Function.apply.bind(Math.max, null));
}

largestNumber([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//Find the longest word in a string
findTheLongestWord = (aSentence) => {
  let wordSplit = aSentence.split(' ');
  let wordCounter = 0;

  for(let i = 0; i < wordSplit.length; i++){
    if(wordSplit[i].length > wordCounter){
      wordCounter = wordSplit[i].length;
    }
  }

  return wordCounter;
}

findLongestWord('Hello World, my name is Michael!');

//Repeat a string
repeatString = (str, times) => {
  if(times > 0){
    return str.repeat(times);
  }else{
    return '';
  }
}

repeatString('Michael', 3);

//Reverse a string
reverseString = (words) => {
  return words.split('').reverse.join('');
}

reverseString('Hello World, my name is Michael!');

//Title Case a string
titleCase = (str) => {
  let lowerCase = str.toLowerCase();
  let strSplit = str.split(' ');
  let newStr = '';

  for(let i = 0; i < strSplit.length; i++){
    newStr += ' ' + strSplit[i].charAt(0).toUpperCase() + strSplit[i].slice(1);
  }

  return newStr.trim();
}

titleCase('my name is Michael and I make websites.');

//Truncate a string
strTruncate = (str, num) => {
  let strSlice = str.slice(0, num) + '...';

  if(str.length <= num){
    return str;
  }else{
    return strSlice;
  }
}

strTruncate('Hello, my name is Michael', 10);