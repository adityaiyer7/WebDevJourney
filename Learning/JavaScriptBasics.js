/*Alhough everything in this document is fairly straightforward, I wanted to create
this just as something to document my learning journey as I get familiarized with JS syntax. 
If you're already a proficient programmer, you won't find much value in this. 
*/
//this document contains the following 
/* 
1. Commenting 
2. Data Types
3. Declaring Variables 
4. Indexing Strings
5. String Immutability 
6. Functions 
7. Arrays 
8. Nested Arrays 
9. Array methods
10. Scope of variables
11. If statements 
 

 */

//in line comment 
/*block 
comments (note that comments are exactly like java) */

//declare variables 
/* JS data types:
1. undefined (something that hasn't been defined, for eg a variable that has been created but not set to anything)
2. null (variable created and set to nothing)
3. boolean
4. string 
5. symbol
6. number
7. object 

 */

var myName = "Batman"; //var is short for variable
myName = 8; //variable can take on multiple data types like python, not fixed like java

let ourName = "Avengers";
const pi = 3.14; 

//var, can be used throughout the whole program
//let can be used only in the scope of where we're declaring it 
//const is a variable that can never change, essentially makes a variable immutable 

var a; //declaring
var b = 2; //assigning 

console.log(b); //allows you to see things in the console, expected output in this is 2 

//variables and functions ARE case sensitive 

var sum = 10 + 20 ;
var diff = 45 - 15 ;

var mul = 10 * 10 ;

var div = 66 / 6 ; 

//increment number
sum ++ ;

//decrementing number:
sum -- ;

//decminal numbers (floating points):
var myDecimal = 0.07 ;

//operations work the same as int 
//remainder (modulus) is % 
// +=  or -= works 
// you can concatenate string with the + operator 

var myName = "Adi";
var myStr = "My name is " + myName + ", what is your name?";

var length = myName.length; //gives the length of the string 
var firstletter = myName[0]; //gives me the first letter of the name 

//Strings are immutable, meaning they cannot be altered 
//Which really means that the individual letters cant be changed 

//functions
function wordBlank(myNoun, myAdjective, myVerb, myAdverb) {
    var result = " " ; 
    result += myAdjective + " ";
    result += myNoun + " ";
    result += myVerb + " ";
    result += myAdverb;
    return result ;

}
wordBlank("dog", "big", "runs", "quickly"); //function call 

//Arrays 
var ourArray = ["Adi", 20]; //array can hold mutliple data types (similar to python)

//Nested Arrays
var myArray = [["Adi", 20], ["X", 21]] ; 

/*Arrays and nested arrays are 0 indexed. 
In the case of nested arrays, take myArray for example
If i take myArray[0] will give me the array ["Adi", 20] */

//Unlike strings, array data can be modified 
var oldArr = [45,46,89] ;
oldArr[0] = 34 ; 

//now oldArr should be [34,46,89]

//push function appends data to the end of the array 
myArray = [["x",20],["y", 21]] ;
myArray.push(["z", 22]) ; 
myArray.push (34) ; 

//.pop() removes the last element 
//.shift() removes the first leement 
//.unshift() adds an element to the beggining of an array 

//functions work similarly to java/python and I already have an example up there so I'm not bothering to write another one 

/*Scope: visibility of variables
defined outside of function: global scope (they can be seen everywhere)
if you're defining a variable in a function, using var makes it local, without var makes it global
*/

function g() {
    globalvariable = 5 ; //global since we did not use var 
}

/*Local scope: only visible within the function
declared within the function (using var keyword)
or passed in as a parameter 
 */

//you can have local and global variable with the same name, local takes precedence

//if statements
function checkif(myVar) {
    if(myVar) {
        return true ;
    } else {
        return false; 
    }
}
