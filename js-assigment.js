
/* 1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output: 34223
 */

function reverse(n) {
    const reversed = parseInt(n.toString().split('').reverse().join(''));
    function displayResult() {
        console.log(`1- The reverse number of ${n} is:`, reversed);
    }

    return displayResult();
}


// Solution Usage 
reverse(32243);
//



/* 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
madam or nurses run */


function isPalindrome(phrase) {
    const str = phrase.replace(/[^0-9a-z]/gi, '').toLowerCase();
    const reverseStr = str.split('').reverse().join('');

    return str === reverseStr;
}


// Solution Usage
const palindromePhrase = 'rotator';
console.log(`2- is the word ${palindromePhrase} palindrome?: `, isPalindrome(palindromePhrase));




/* 3. Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g */

function strCombinations(word) {
    const combinations = [];

    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j <= word.length; j++) {
            combinations.push(word.slice(i, j));
        }
    }

    function displayResult() {
        console.log(`3- combinations: for ${word}:`, combinations)

    }

    return displayResult;
}

// Solution usage
const exercise3 = strCombinations('dog')
exercise3()
/* 
4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
 */


function sortStrAlphabetically(str) {
    let phrase = str.split('');
    let sortedStr = phrase.sort().join('');
    function displayResult() {
        console.log(`4- the result str in alphabetical order for ${str} is:`, sortedStr)
    }
    return displayResult;
}

// Example usage
const exercise4 = sortStrAlphabetically('webmaster')
exercise4();

// Output: 'abeemrstw'

/*5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox */

function upperFirstLetter(str) {
    const phrase = str.split(' ');

    for (let i = 0; i < phrase.length; i++) {
        let word = phrase[i];
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        phrase[i] = capitalizedWord;
    }
    const capitalizedPhrase = phrase.join(' ');

    function displayResult() {
        console.log(`5- the result capitalized for ${str} is:`, capitalizedPhrase)
    }
    return displayResult;
}

// Example usage:
const exercise5 = upperFirstLetter('the quick brown fox')
exercise5();

//
/* 
6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
Example string: 'Web Development Tutorial' 
Expected Output: 'Development'
 */

function findLongestWord(str) {

    const words = str.split(' ');
    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    function displayResult() {
        console.log(`6- longest word for ${str} is:`, longestWord)
    }

    return displayResult;
}


// Example usage
const exercise6 = findLongestWord('Web Development Tutorial')
exercise6();

// Output: 'Development'

/* 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
Example string: 'The quick brown fox' 
Expected Output: 5
 */

function countVowelsInPhrase(str) {
    const phrase = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let i = 0; i < phrase.length; i++) {
        if (vowels.includes(phrase[i])) {
            count++;
        }
    }

    function displayResult() {
        console.log(`7- The number of vowels in ${str} is:`, count)
    }

    return displayResult;
}

// Example usage:
const exercise7 = countVowelsInPhrase('The quick brown fox')
exercise7();
/*   
  8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. */

function isPrime(n) {
    let result = true;
    if (n < 2) {
        result = false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            result = false;
        }
    }

    function displayResult() {
        console.log(`8- Is the number ${n} prime ? `, result);
    }

    return displayResult();
}
// Example usage:
isPrime(7);
isPrime(20);
//

/* 9. Write a JavaScript function which accepts an argument and returns the type. 
Note: There are six possible values that typeof returns: object, boolean, function, number, string, and undefined. */

function getType(val) {
    return typeof val;

}
// Example usage:
const value = 'Hi'
console.log(`9- The type of ${value} is: `, getType(value));

/* 
10. Write a JavaScript function which returns the n rows by n columns identity matrix.  */


function identityMatrix(n) {
    const matrix = [];

    for (let i = 0; i < n; i++) {
        const row = [];

        for (let j = 0; j < n; j++) {
            row.push(i === j ? n : 0);
        }

        matrix.push(row);
    }

    return matrix;
}

// Example usage:
console.log('10- The result matrix is :', identityMatrix(3));

/* 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2,4 
 */


function findGreatestNumbers(arr) {
    arr.sort((a, b) => a - b);

    const secondLowest = arr[1];
    const secondGreatest = arr[arr.length - 2];
    const result = secondLowest + ',' + secondGreatest

    function displayResult() {
        console.log(`11- The second lowest and second greatest numbers for array  [${arr}] are: `, result)
    }

    return displayResult;
}

// Test the function
const exercise11 = findGreatestNumbers([1, 8, 9, 4, 5])
exercise11();
// Output: 2, 4

/*  12- Write a JavaScript function which says whether a number is perfect. 
According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
Example: The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

 */


function isPerfectNumber(n) {

    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }

    const result = sum === n;
    function displayResult() {
        console.log(`12- Is the number ${n} perfect ?`, result);
    }

    return displayResult();

}
// Example usage:
isPerfectNumber(6);

/* 13-Write a JavaScript function to compute the factors of a positive integer.  */
function getFactors(n) {
    const factors = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }
    const result = console.log(`13- The factors of ${n} are: `, factors);

    return result;
}

getFactors(10);

/* 
14. Write a JavaScript function to convert an amount to coins. 
Sample function: amountTocoins(46, [25, 10, 5, 2, 1])
Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. 
Output: 25, 10, 10, 1 */

function convertToCoins(amount, coins) {
    coins.sort((a, b) => b - a); // Sort coins in descending order

    const result = [];

    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        while (amount >= coin) {
            result.push(coin);
            amount -= coin;
        }
    }

    function displayResult() {
        console.log(`14- The output in coins for ${46} is: `, result);
    }

    return displayResult;
}

// Example usage:
const exercise14 = convertToCoins(46, [25, 10, 5, 2, 1]);
exercise14(); // Output: [25, 10, 10, 1]
/*   
  15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result.  */


function computebnValue(b, n) {
    const computedValue = Math.pow(b, n);
    const result = console.log(`15- The compute value for ${b} and ${n} is: `, computedValue);
    return result;
}

// Example usage:
computebnValue(2, 5);


/* 16. Write a JavaScript function to extract unique characters from a string. 
Example string: "thequickbrownfoxjumpsoverthelazydog"
Expected Output: "thequickbrownfxjmpsvlazydg" */

function getUniqueCharacters(phrase) {
    let uniqueStr = "";
    for (var i = 0; i < phrase.length; i++) {
        if (uniqueStr.indexOf(phrase[i]) === -1) {
            uniqueStr += phrase[i];
        }
    }

    const result = console.log(`16- The unique characters from ${phrase} are: `, uniqueStr);
    return result;
}

// Example usage:
const inputPhrase = "thequickbrownfoxjumpsoverthelazydog";
getUniqueCharacters('thequickbrownfoxjumpsoverthelazydog');

/*  
17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
 */

function getNumberOfOccurrences(phrase) {
    let occurrences = {};
    const str = phrase.toLowerCase().replace(/[^0-9a-z]/gi, '');
    for (var i = 0; i < str.length; i++) {
        const letter = str[i];

        if (occurrences[letter]) {
            occurrences[letter]++;
        } else {
            occurrences[letter] = 1;
        }

    }


    const result = console.log(`17- The number of ocurrences of ${phrase} are: `, occurrences);

    return result;
}

// Example usage

getNumberOfOccurrences('Juan Mendez');

/*   18. Write a function for searching JavaScript arrays with a binary search. 
Note: A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.
 */

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 11;
console.log(`18- The result for ${arr} with target ${11} is `, binarySearch(arr, target));

/* 19- Write a JavaScript function that returns array elements larger than a number.  */

function getLargerElement(arr, number) {

    const largerElements = arr.filter((element) => element > number);
    const result = console.log(`19- The larger elements than ${number} in ${arr} are: `, largerElements);
    return result;
}

getLargerElement([2, 45, 6, 7, 8, 99, 33, 21], 25);

/* 
20- Write a JavaScript function that generates a string id (specified length) of random characters. 
Sample character list: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
 */


function generateId(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        id += characters.charAt(randomIndex);
    }
    return id;
}
// Example usage
console.log('20- The result id is: ', generateId(7));

/* 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 
Sample array: [1, 2, 3] and subset length is 2 
Expected output: [[2, 1], [3, 1], [3, 2]]
 */

function getSubsets(arr, lngth) {
    const subsets = [];

    function createSubsets(current, start) {
        if (current.length === lngth) {
            subsets.push([...current].reverse());
            return;
        }

        for (let i = start; i < arr.length; i++) {
            current.push(arr[i]);
            createSubsets(current, i + 1);
            current.pop();
        }
    }

    createSubsets([], 0);

    const result = console.log(`21- The subsets from [${arr}] are: `, subsets);
    return result;
}

// Example usage:
getSubsets([1, 2, 3], 2);
/* 
22- Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 
Sample arguments: 'microsoft.com', 'o' 
Expected output: 3  */

function countOccurrences(str, letter) {

    const lowerStr = str.toLowerCase();
    const lowerLetter = letter.toLowerCase();

    const occurrences = lowerStr.split('').filter(c => c === lowerLetter);
    const count = occurrences.length;

    const result = console.log(`22- The number or occurrences of letter '${letter}' in ${str} is: `, count)

    return result;
}

// Example usage:
countOccurrences('microsoft.com', 'o');

/* 
23- Write a JavaScript function to find the first not repeated character. 
Sample arguments: 'abacddbec' 
Expected output: 'e' 
 */

function firstNotRepeatedChar(str) {

    let notRepeatedChar = null;

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
            notRepeatedChar = char;
        }
    }

    const result = console.log(`23- The first not repeated character in ${str} is: `, notRepeatedChar);

    return result;
}



// Example of use

firstNotRepeatedChar('abacddbec');

/*  24. Write a JavaScript function to apply Bubble Sort algorithm. 
 Note: According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". 
 Sample array: [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
 Expected output: [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1] */

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const element = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = element;
            }
        }
    }
    const result = console.log(`24- The result from the array [${arr}] using bubble sort is: `, arr.reverse());

    return result;
}



// Example usage
bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]);


/* 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. 
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"
 */


function getLongestCountryName(countryNames) {
    const longestName = countryNames.find((country) => {
        return country.length === Math.max(...countryNames.map((country) => country.length));
    });
    const result = console.log(`25- The Longest country name in [${countryNames}] is: `, longestName);
    return result;
}

// Example usage
getLongestCountryName(["Australia", "Germany", "United States of America"]);


/*  26. Write a JavaScript function to find longest substring in a given a string without repeating characters.  */

function getLongestSubstring(str) {
    let longestSubstring = '';
    let currentSubstring = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const charIndex = currentSubstring.indexOf(char);

        if (charIndex !== -1) {

            longestSubstring = currentSubstring.length > longestSubstring.length ? currentSubstring : longestSubstring;
            currentSubstring = currentSubstring.slice(charIndex + 1);
        }

        currentSubstring += char;
    }
    longestSubstring = currentSubstring.length > longestSubstring.length ? currentSubstring : longestSubstring;

    const result = console.log(`26- The longest substring without repeating characters in '${str}' is: `, longestSubstring);

    return result;
}

// Example usage:
getLongestSubstring('abcabcbb');

/* 
 27. Write a JavaScript function that returns the longest palindrome in a given string. 
Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.
 */

function getLongestPalindrome(str) {
    let longestPalindrome = '';

    for (let i = 0; i < str.length; i++) {
        for (let j = i; j < str.length; j++) {
            const subs = str.slice(i, j + 1);
            // reusing the funtion isPalindrome from exercise #2
            if (isPalindrome(subs) && subs.length > longestPalindrome.length) {
                longestPalindrome = subs;
            }
        }
    }

    const result = console.log(`27- The longest palindrome in ${str} is: `, longestPalindrome);

    return result;
}

// Example usage:
getLongestPalindrome('bananas');


/* 28. Write a JavaScript program to pass a 'JavaScript function' as parameter */

function welcomeMessage(company, person) {
    console.log("28- Welcome to " + company + ' ' + person + '!');
  }
  
  function displayWelcome(callback) {
    const companyName = 'Antra';
    const personName = 'Juan';
    callback(companyName, personName);
  }

  //Example usage:
displayWelcome(welcomeMessage);

/* 29. Write a JavaScript function to get the function name.  */

function getFunctionName(fn){
    return fn.name;

}

console.log('29- The Funtion Name is: ', getFunctionName(displayWelcome));

