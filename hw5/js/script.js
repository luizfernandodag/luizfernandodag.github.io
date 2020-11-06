/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    if (expected === function2test()) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }

}
//aux function 1 - validate number string
function validateNumber(num)
{
    const regex = RegExp(/[+-]?\d*.?\d+/);
    return regex.test(num);
}
//aux function 2
function Warn(msg) {
    alert (msg);
}



//aux function 4
function validateCommaSeparateString( numbers)
{
    let regex = RegExp(/(\s*[+-]?\d*\.?\d*,?\s*)*\s*[+-]?\d*\.?\d*\s*/g);
    return regex.test(numbers);

}
//aux function 5
function  validateArrayStrings(strings)
{
    let regex1 = RegExp(/\[(\s*[+-]?\.?\d*,?\s*)*\s*[+-]?\d*\.?\d*\s*\]/g);
}

//aux function 3
function validateStringArray(string)
{
    let regex1 = RegExp(/\[(\s*(.)*\s*,\s*)\s*.*\s*\]/g);
    let regex2 = RegExp(/(\s*(.)*\s*,\s*)\s*.*\s*/g);
    let regex3 = RegExp(/(.*\s*)*\s*.*/g);
    let verification1 = regex1.test(string);
    let verification2 = regex2.test(string);
    let verification3 = regex3.test(string);

    if(verification1)
    {
        return 1;
    }
    else if(verification2)
    {
        return 2;
    }
    else if(verification3)
    {
        return 3;
    }

    return 0;

}

//aux function 6
function extractStringArray(string)
{
    let validNum = validateStringArray(string);

    if(validNum == 1)
    {
        let s = string.substring(string.indexOf("[")+1, string.indexOf("]"));

        return s.split(",");
    }
    else if(validNum==2)
    {
        return string.split(",")
    }
    else if(validNum==3)
    {
        return string.split(" ");
    }

    return [];
}

function validateSpaceSeparateString( numbers)
{
    let regex = RegExp(/(\s*[+-]?\d*\.?\d*[\s,]{1}?\s*)*\s*[+-]?\d*\.?\d*/g);
    return regex.test(numbers);

}

//aux function 7
function extractNumArray(str)
{
    if( validateSpaceSeparateString(str) == true)
    {
        return str.split(" ").map(x=>parseFloat(x));
    }
    else if(validateArrayStrings(str)==true)
    {
        let numsArray = str.substring(str.indexOf("[") +1 , str.indexOf("]"))
        return numsArray.split(",").map(x=> parseFloat(x));

    }
    else if(validateCommaSeparateString(str) == true)
    {

        return str.split(",").map(x=> parseFloat(x));

    }

    return [];
}






/*
1 Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
2 Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
3 Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
5 Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
6 Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.


aux function 1 - validade number input
aux function 2 - warning message
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
let bp1 = document.getElementById("buttonp1");

// update output fucntion
function resultP1()
{
    //get inputs and validate
    let p1Input1 = document.getElementById("p1Input1").value;
    let p1Input2 = document.getElementById("p1Input2").value;
    let bol1 = validateNumber(p1Input1);
    let bol2 = validateNumber(p1Input2);

    if(!bol1 || !bol2)
        return;
    //get output cell
    // let output = document.getElementById("p1Out");
    //calculate max
    let result = max( p1Input1, p1Input2);
    let outputP1 = document.getElementById("p1Out");
    outputP1.innerText = result;



}

bp1.addEventListener("click", resultP1  );




/* 2 Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them. */
/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
    return max(max(a, b), c);

}

let buttonp2 = document.getElementById("buttonp2");

function resultP2()
{

    let p2Input1 = parseFloat(document.getElementById("p2Input1").value);
    let p2Input2 = parseFloat(document.getElementById("p2Input2").value);
    let p2Input3 = parseFloat(document.getElementById("p2Input3").value);
    console.log(p2Input1);
    console.log(p2Input2);
    console.log(p2Input3);

    let valid1 = validateNumber(p2Input1);
    let valid2 = validateNumber(p2Input2);
    let valid3 = validateNumber(p2Input3);




    if(!valid1||!valid2||!valid3)
        return;

    let maxTree = maxOfThree(p2Input1, p2Input2, p2Input3);
    let outputP2 = document.getElementById("p2Out");
    console.log(outputP2);
    outputP2.innerText = maxTree;


}
buttonp2.addEventListener("click", resultP2)

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

let buttonP3 = document.getElementById("buttonp3");

function isVowel(c) {
    const vowels = ['a', 'e', 'i','o','u'];
    if (vowels.includes(c)) {
        return true;
    } else {
        return false;
    }
}
function resultP3()
{
    let inputP3 = document.getElementById("p3Input1").value;
    console.log(inputP3);
    let result = isVowel(inputP3);
    console.log(result);
    let out3 = document.getElementById("p3Out");
    out3.innerText = result;


}
buttonP3.addEventListener("click", resultP3)


console.log("expected output of isVowel is true " + myFunctionTest(true, function() {return isVowel('i');}));
console.log("expected output of isVowel is false " + myFunctionTest(true, function() {return isVowel('x');}));

/* 4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example,
    sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24. */

//4.1 sum

// extractArray(str)
function sum(numarray) {
    return numarray.filter(Boolean).reduce((accum, curr) => accum + curr);
}
let button4_1 = document.getElementById("buttonp4_1");


function resultP4_1()
{
    let inputP4_1 = document.getElementById("p4_1Input1").value;
    let array = extractNumArray(inputP4_1);
     console.log(array);
    if(array.length==0)
        return;
    let result = sum(array);
    let out4_1 = document.getElementById("p4_1Out");
    out4_1.innerText = result;
}

button4_1.addEventListener("click", resultP4_1);

console.log("expected output of sum is 10 " + myFunctionTest(10, function() {return sum([1,2,3,4]);}));





//4.2 multiply


function multiply(numarray) {
    return numarray.filter(Boolean).reduce((accum, curr) => accum * curr);
}


let button4_2 = document.getElementById("buttonp4_2");


function resultP4_2()
{
    let inputP4_2 = document.getElementById("p4_2Input1").value;
    let array = extractNumArray(inputP4_2);
    // console.log(array);
    if(array.length==0)
        return;
    let result = multiply(array);
    let out4_2 = document.getElementById("p4_2Out");
    out4_2.innerText = result;
}

button4_2.addEventListener("click", resultP4_2);
console.log("expected output of sum is 24 " + myFunctionTest(24, function() {return multiply([1,2,3,4]);}));






/* 5 Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj". */
function reverse(str) {
    return str.split('').reverse().join('');
}
let button5 = document.getElementById("buttonp5");

function resultP5()
{
    let inputP5 = document.getElementById("p5Input1").value;
    let result = reverse(inputP5);
    let out5 = document.getElementById("p5Out");
    out5.innerText = result;



}
button5.addEventListener("click", resultP5);


console.log("expected output of reverse is gib " + myFunctionTest('gib', function() {return reverse('big');}));

/* 6 Write a function findLongestWord() that takes an array of words and returns the length of the longest one. */77
//extractStringArray(string)
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

let buttonP6 = document.getElementById("buttonp6");
function resultP6()
{
    let inputP6 = document.getElementById("p6Input1").value;
    // console.log(inputP6);
    let arrayString = extractStringArray(inputP6);
    // console.log(arrayString);
    if(arrayString.length > 0)
    {
        let longest = "";
        for(let i = 0; i < arrayString.length; i++ )
        {
            if(arrayString[i].length > longest.length)
            {
                longest = arrayString[i];
            }
        }

        let out6 = document.getElementById("p6Out");
        out6.innerText = longest;
    }


}

buttonP6.addEventListener("click", resultP6);


console.log("expected output of findLongestWord is 6 " + myFunctionTest(6, function() {return findLongestWord(['one','two','three','sixsix']);}));


/* 7 Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i. */
function filterLongWords(wordArray, i) {
    return wordArray.filter(word => word.length > i);
}
buttonp7 = document.getElementById("buttonp7");

function resultP7()
{
    //array
    inputP7_1 = document.getElementById("p7Input1").value;
    // lenght
    inputP7_2 = document.getElementById("p7Input2").value;
    // extractStringArray(string)


    if(validateNumber(inputP7_2))
    {
        let minLenght = inputP7_2;
        console.log(minLenght);
        let strArray =  extractStringArray(inputP7_1);
        console.log(strArray);
        if(strArray.length> 0 )
        {
            //valid array and length

            let filteredArray = filterLongWords(strArray,minLenght);
            result = document.getElementById("p7Out");

            result.innerText = filteredArray;



        }
    }
}

buttonp7.addEventListener("click", resultP7);



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
