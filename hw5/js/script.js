/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
    ;
}


/*
1 Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
2 Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
3 Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
5 Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
6 Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

 */

/* 1 Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. /*
/* max returns the maximum of 2 arguments */

// function definition
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
    ;
}
//function test
console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, function () {
    return max(20, 10);
}));

// //get inputs
// let p1Input1 = document.getElementById("p1Input1");
// let p1Input2 = document.getElementById("p1Input2");
const bp1 = document.getElementById("bp1");
output = document.getElementById("p1Out");
// update output fucntion
function resultP1()
{
    //get inputs
    let p1Input1 = document.getElementById("p1Input1").value;
    console.log(p1Input1);
    let p1Input2 = document.getElementById("p1Input2").value;
    console.log(p1Input2);
    let output = document.getElementById("p1Out");
    let result = max( p1Input1, p1Input2);
    output.innerText = result;



}

bp1.addEventListener("click", resultP1  )




/* 2 Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them. */
/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, function () {
    return maxOfThree(5, 4, 44);
}));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, function () {
    return maxOfThree(55, 4, 44);
}));
console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, function () {
    return maxOfThree(55, 4, 44);
}));

/* 3 Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. */

function isVowel(c) {
    const vowels = ['a', 'e', 'i','o','u'];
    if (vowels.includes(c)) {
        return true;
    } else {
        return false;
    }
}
console.log("expected output of isVowel is true " + myFunctionTest(true, function() {return isVowel('i');}));
console.log("expected output of isVowel is false " + myFunctionTest(true, function() {return isVowel('x');}));

/* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example,
    sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. */
function sum(numarray) {
    return numarray.reduce((accum, curr) => accum + curr);
}
console.log("expected output of sum is 10 " + myFunctionTest(10, function() {return sum([1,2,3,4]);}));

function multiply(numarray) {
    return numarray.reduce((accum, curr) => accum * curr);
}
console.log("expected output of sum is 24 " + myFunctionTest(24, function() {return multiply([1,2,3,4]);}));


/* 5 Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj". */
function reverse(str) {
    return str.split('').reverse().join('');
}
console.log("expected output of reverse is gib " + myFunctionTest('gib', function() {return reverse('big');}));

/* 6 Write a function findLongestWord() that takes an array of words and returns the length of the longest one. */
function findLongestWord(wordArray) {
    const wordLengths = wordArray.map(word => word.length);
    //console.log(wordLengths);
    const longest = wordLengths.reduce((accum, curr) => {
        if (curr > accum) {
            return curr;
        } else {
            return accum;
        }
    });
    return longest;
}
console.log("expected output of findLongestWord is 6 " + myFunctionTest(6, function() {return findLongestWord(['one','two','three','sixsix']);}));


/* 7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. */
function filterLongWords(wordArray, i) {
    return wordArray.filter(word => word.length > i);
}
console.log("expected output of filterLongWords is 'apple' " +
    myFunctionTest('apple',
        function() {
            const longWords = filterLongWords(['one', 'apple', 'orange', 'two', 'the'], 4);
            return longWords[0];
        }));
console.log("expected output of filterLongWords is 'orange' " +
    myFunctionTest('orange',
        function() {
            const longWords = filterLongWords(['one', 'apple', 'orange', 'two', 'the'], 4);
            return longWords[1];
        }));
