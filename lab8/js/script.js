/* runs test to see if expected argument is === to value returned by function2test argument */
const auxFunctions = (
    function() {
                function myFunctionTest(expected, function2test) {
                             if (expected === function2test()) {
                                  return "TEST SUCCEEDED";
                                                               }
                             else {
                            return "TEST FAILED.  Expected " + expected + " found " + function2test()
                                  }

                };
                //aux function 1 - validate number string
                function validateNumber(num)
                {
                    const regex = RegExp(/[+-]?\d*.?\d+/);
                    return regex.test(num);
                };

                //aux function 2
                function validateCommaSeparateString( numbers)
                {
                    let regex = RegExp(/(\s*[+-]?\d*\.?\d*,?\s*)*\s*[+-]?\d*\.?\d*\s*/g);
                    return regex.test(numbers);

                };
                //aux function 3
                function  validateArrayStrings(strings)
                {
                    let regex1 = RegExp(/\[(\s*[+-]?\.?\d*,?\s*)*\s*[+-]?\d*\.?\d*\s*\]/g);
                };

                //aux function 4
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

                };

            //aux function 5
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
                };

                function validateSpaceSeparateNumsString( numbers)
                {
                    let regex = RegExp(/(\s*[+-]?\d*\.?\d*[\s,]{1}?\s*)*\s*[+-]?\d*\.?\d*/g);
                    return regex.test(numbers);

                };

        //aux function 7
                function extractNumArray(str)
                {
                    if( this.validateSpaceSeparateNumsString(str) == true)
                    {
                        return str.split(" ").map(x=>parseFloat(x));
                    }
                    else if(this.validateArrayStrings(str)==true)
                    {
                        let numsArray = str.substring(str.indexOf("[") +1 , str.indexOf("]"))
                        return numsArray.split(",").map(x=> parseFloat(x));

                    }
                    else if(this.validateCommaSeparateString(str) == true)
                    {

                        return str.split(",").map(x=> parseFloat(x));

                    }

                    return [];
                };







        return{
                    myFunctionTest:myFunctionTest,
                    validateNumber:validateNumber,
                    validateCommaSeparateString:validateCommaSeparateString,
                    validadeArrayStrings: validateArrayStrings,
                    validateStringArray:validateStringArray,
                    extractStringArray: extractStringArray,
                    validateSpaceSeparateNumsString: validateSpaceSeparateNumsString,
                    extractNumArray: extractNumArray,

              }



              }
              )();

/*
1 Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
2 Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
3 Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
4 Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.


 */


/* 1 Exercise 1:
Define a filter function on the String object. The function accepts an array of strings that
specifies a list of banned words. The function returns the string after removing all the
banned words. */
String.prototype.filter = function filterBannedWords(bannedWords)
{
  let listBannedWord = auxFunctions.extractStringArray(bannedWords);
  return this.split(" ")
      .filter(s => !listBannedWord.includes(s))
      .join(" ");

};

let b1 = document.getElementById("b1");

// update output fucntion
function resultP1()
{
    //get inputs and validate
    let input = document.getElementById("p1In1").value;
    let bannedWords = document.getElementById("p1In2").value;

    let result = input.filter(bannedWords);
    let outCell = document.getElementById("p1Out");
    outCell.innerText = result;




}

b1.addEventListener("click", resultP1  );




/* 2
Exercise 2:
Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
that works by repeatedly stepping through the list to be sorted,
Example:[6,4,0, 3,-2,1].bubbleSort();
Output : [-2, 0, 1, 3, 4, 6]
 */
/*  */

// function definition

Array.prototype.bubbleSort = function ()
{
    //O(n2)
    for(let i = 0; i< this.length-1; i++)
    {
        for(let j = 0; j<this.length-i-1;j++ )
        {
                if(this[j] > this[j+1])
                {
                    //swap
                    let temp = this[j];
                    this[j] = this[j+1];
                    this[j+1] = temp;
                }
        }
    }

    return this;


}
let b2 = document.getElementById("b2");
// update output fucntion
function resultP2()
{
    //get inputs and validate
    let p2In = document.getElementById("p2In1").value;
    let array = auxFunctions.extractNumArray(p2In);
    console.log(array);
    let result = array.bubbleSort();
    let outCell = document.getElementById("p2Out");
    outCell.innerText = result;

}

b2.addEventListener("click", resultP2  );

/* 31
Exercise 3:
Create an object called Teacher derived from a Person function constructor, and implement
a method called teach that receives a string called subject, and prints out: [teacher's name]
is now teaching [subject]. Create a Teacher object and call its teach method.
 */
/*  */

// function definition
{
    function Person(name) {
        this.name = name;

    }

    var Teacher = new Person("Luiz");

    Person.prototype.teach = function (subject) {
        return this.name + " is now teaching " + subject;
    }
    console.log(Teacher.teach("Dancing"));
}

/* 32
Also do the same thing using Object.create. When using Object.create you will need a
factory function instead of a function constructor in order to pass parameters such as
‘name’ to be set in the prototype
 */
/*  */
// /Factory/
{
    const Person = {
        name: ""

    };
    const factoryPerson = () => Object.create(Person);

    var Teacher = factoryPerson();
    Teacher.name = "Luiz";

    Teacher.teach = function (subject) {
        return this.name + " is now teaching " + subject;
    }

    console.log(Teacher.teach("Data Science"));

}
/* 4

Exercise 4:
Write code that will create person, student, and professor objects.
• Person objects have
o name and age fields
o a greeting method that prints out: “Greetings, my name is [name] and I am
[age] years old.”
o a salute method that prints out: “Good morning!, and in case I dont see you,
good afternoon, good evening and good night!”•

•
• Create a professor object and a student object. Call both the greeting and salutation
methods on each.
• Do this exercise once using the object prototype approach for inheritance and then
using the function constructor approach.
 */
/*  */

// function 4 definition

class Person{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log("Greetings, my name is " +this.name +"and I am "+ this.age + " years old.");
    }
    salute(){
        console.log("Good morning!, and in case I dont see you,\n" +
            "good afternoon, good evening and good night!");
    }
}

//
// Student objects inherit name, age, and salute from person. They also have a field
// ‘major’ and have their own greeting method. Their greeting is “Hey, my name is
//     [name] and I am studying [major]. The greeting should be output to the console.

class Student extends Person{
    constructor(name,age,major) {
        super(name,age);
        this.major = major;
    }
    greeting(){
        console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
    }
    salute(){
        console.log("Good morning!, and in case I dont see you,\n" +
            "good afternoon, good evening and good night!");
    }
}

// Professor objects inherit name, age, and salute from person. They also have a field
// ‘department’ and have their own greeting method. Their salutation is “Good day, my name is [name] and I am in the [department] department.” Output it to the
// console.

class Professor extends Person
{
    constructor(name,age, departament) {
        super(name,age);
        this.departament = departament;
    }
    greeting(){
        console.log("Good day, my name is " + this.name + "and I am in the " + this.department + "department.");
    }
    salute(){
        console.log("Good morning!, and in case I dont see you,\n" +
            "good afternoon, good evening and good night!");
    }

}

//Prototypal Approach
// Person objects have
// o name and age fields
// o a greeting method that prints out: “Greetings, my name is [name] and I am
//     [age] years old.”
// o a salute method that prints out: “Good morning!, and in case I dont see you,
//     good afternoon, good evening and good night!”
//
//
//     • Student objects inherit name, age, and salute from person. They also have a field
// ‘major’ and have their own greeting method. Their greeting is “Hey, my name is
//     [name] and I am studying [major]. The greeting should be output to the console.
// • Professor objects inherit name, age, and salute from person. They also have a field
// ‘department’ and have their own greeting method. Their salutation is “Good day,
//     my name is [name] and I am in the [department] department.” Output it to the
// console.
// • Create a professor object and a student object. Call both the greeting and salutation
// methods on each.
// • Do this exercise once using the object prototype approach for inheritance and then
// using the function constructor approach.

//*************************  FUNCTION APPROACH ***********************************
{
    function Person(name, age) {
        this.name = name
        this.age = age;

    };

    Person.prototype.greeting = function () {
        console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old")
    };
    Person.prototype.salute = function () {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!")
    };

    function Student(name, age, major) {
        Person.call(this, name, age);
        this.major = major;
    }

    Student.prototype = Object.create(Person.prototype);
    Object.defineProperty(Student.prototype, 'constructor', {
        value: Student,
        enumerable: false, // so that it does not appear in 'for in' loop
        writable: true
    });

    Student.prototype.greeting = function () {
        console.log("Hey, my name is " + this.name + " and I am studying " + this.major + ".");
    };

// • Professor objects inherit name, age, and salute from person. They also have a field
// ‘department’ and have their own greeting method. Their salutation is “Good day,
//     my name is [name] and I am in the [department] department.” Output it to the
// console.
// • Create a professor object and a student object. Call both the greeting and salutation
// methods on each.
// • Do this exercise once using the object prototype approach for inheritance and then
// using the function constructor approach.


    function Professor(name, age, department) {
        Person.call(this, name, age);
        this.department = department;
    }

    Professor.prototype = Object.create(Person.prototype);
    Object.defineProperty(Professor.prototype, 'constructor', {
        value: Professor,
        enumerable: false, // so that it does not appear in 'for in' loop
        writable: true
    });

    Professor.prototype.salute = function () {
        console.log("Good day, my name is " + this.name + "and I am in the " + this.department + "department.");
    };

    s = new Student("Luiz", 29, "Computer Science")


}
//     [age] years old.”

//*************************  END FUNCTION APPROACH ***********************************
{
    //  *************** Person ********************
    const Person = {
        name: "Not set",
        age: -1
    };

    Person.greeting = function () {
        console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old")
    };
    Person.salute = function () {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!")
    };
    Person.constructor = function(name,age)
    {this.name = name;
    this.age = age;}

    Person.setName = function (name){
        this.name = name;
    };
    p = Object.create(Person);
    p.name = "Luiz";
    p.age  = 29;
    //***************   Student  **********************

    const Student = Object.create(Person);
    Student.prototype = Person.prototype;
    Student.constructor = function ( name,age,major){
        this.name = name;
        this.age = age;
        this.major = major;
    }
    Student.greeting = function () {
        console.log("Hey, my name is " + this.name + " and I am studying " + this.major + ".");
    };

    s = Object.create(Student);
    s.constructor("Luiz",29,"Computer Science");
    s.greeting();
    s.salute();

    // *************** Professor *******************88
    const Professor = Object.create(Person);
    Professor.constructor = function (name,age,department){
    this.name = name;
    this.age = age;
    this.department = department;
    }

    Professor.salute = function () {
        console.log("Good day, my name is " + this.name + "and I am in the " + this.department + "department.");
    };

    p = Object.create(Professor);
    p.constructor("Luiz",29,"CS Dept");
    s.greeting();
    s.salute();
    p.greeting();
    p.salute();








}

// ******************* OBJECT PROTOTYPE APPROACH ***********************
// ****************  END OBJECT PROTOTYPE APPROACH ***********************




