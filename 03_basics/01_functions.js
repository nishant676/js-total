
function greet()
{
    console.log("G");
    console.log("o");
    console.log("o");
    console.log("D");
}
greet(); // function reference

// ADD 2 NUMBERS

function sum(number1 , number2)
{
    console.log(number1 + number2);
}
sum(2,3); // executions --> argument should pass if req.

/*
    NOTE:-
        => Here if u store this function value in any variable it results "undefined"
        look..
*/
function minus(number1 , number2)
{
    console.log(number2 - number1);
}
const result= minus(2,3); 
console.log(result); //undefined

/*
    why Happened ?
       => Notice here function is type void it is not return type
       -> if u store func value in variable it should be in return type.

       Solution:- look down
*/

function multiply(num1 , num2)
{
    let result = num1 * num2;
    return result;
    // or simple write only:-  return num1 * num2
}
const value = multiply(2,6);
console.log("Answer is :"+value); //12

/*
    Note:-
     => If a func have parameters and while calling that function u forgot to provide arguments
     => it returns "undefined"
     like:-
*/
function loginUser(uname)
{
    return `${uname} just logged in`
}
console.log(loginUser());//undefined just logged in

// USE IF/ELSE To not get UNDEFINED like:-

function foodname(fname)
{
    if(!fname)
    {
        console.log(`pls enter food name`);
        return;
    }
    return `${fname} is tasty`;
}

console.log(foodname());//pls enter food name
console.log(foodname("burger"));//burger is tasty


/*
    Case-1:-
     Like shopcart u never know how many products user gonna add
     similary for function how to handle if user provide more than one parameter for function.
     like:- 
*/
function calculatePrice(num1)
{
    return num1;
}
console.log(calculatePrice(2,3));// return 1st number only--> 2

/*
    To Handle Use:-(i) Rest operator:-
                        syntax(... variable) --> dots
                        => same like spread operator
                        => it will return in array format.

*/
function calculatePrice1(...num1)
{
    return num1;
}
console.log(calculatePrice1(200,300,400));//[ 200, 300, 400 ]

// another thing----------
function calculatePrice2(val1,val2, ...num1)
{
    return num1;
}
console.log(calculatePrice2(200,300,400,500));//[ 400, 500 ]
// Here val1 took200,val2 took 300


const user = {
    userName :"nishant",
    price : 199
}

function handleObject(anyObject)
{
    console.log(`user name is ${anyObject.userName} and price is :${anyObject.price}`)
}
// to call the function TYPE-1
handleObject(user); //user name is nishant and price is :199       

//to call the function TYPE-2
handleObject({
    userName:"believe",
    price:"strong"
}) //user name is believe and price is :strong  


//--------------- FOR ARRAY-----------------

const myArray =[200,400,600,800]
function returnSecondValue(giveArray)
{
    return giveArray[2];
}
//Type-1
console.log(returnSecondValue(myArray));//600

//Type-2
console.log(returnSecondValue([300,400,500]));//500
