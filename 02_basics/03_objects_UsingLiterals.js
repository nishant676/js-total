/*
    Object can declare via 2 ways
    -> via Literals
    -> via constructors (Singleton)
*/

//-------------(i)Object Literals-------------

/*
    =>In obj u write like key and value pair(k,v) 
    => by default it take ur key as String type
*/
const User ={
    name : "Nishant",
    age : 23,
    location : "hyd",
    isLoggedIn : false,
    email : "ntmishra@gmail.com",
    lastLoginDay :["Monday","Saturday"]
}
console.log(User.location);
console.log(User["location"]);
/*
 To Access this obj value can do 2 ways:- 
    => User.email  or  User[email]---> most preferable

    NOTE:-
     User[email] Why USed Mostly?
       => If u take a string as key like "Name": "sonu" then there i sno way to access the value of that key using simple . dot 
       => so this method is mostly used 
*/

const User1 ={
    name :"libun",
    "email" : "mailcation@123gmail.com"
}
console.log(User1.email);

// ***HOW TO TSKE A SYMBOL AS KEY
const mySym = Symbol("key1");

// if u directly use like in key mySym : "" --> here typeof mySym is --> String
// => but it should be symbol type so use like [mySym]

const User2 = {
    name : "hashmukh",
    [mySym] : "myKey1"
}
console.log(typeof User2[mySym])// symbol

// Change OBJ VALUES
User2.name = "raja";
console.log(User2.name);

// ----> IF YOU WANT TO FREEZ UR OBJ VALUE:- (Object.freez(obj name))
Object.freeze(User2);
User2.name = "kishan"; // NOt changedd
console.log(User2);//{ name: 'raja', [Symbol(key1)]: 'myKey1' }


// HOW TO ADD FUNCTION IN OBJ
User1.greeting = function(){
    console.log("Hiii Bro!!!!!!!")
}
console.log(User1.greeting)//---> [Function (anonymous)]
console.log(User1.greeting()) // --->Hiii Bro!!!!!!!  undefined

User.greeting = function(){
    console.log(`Hey! Buddy ,You are ${this.name}`);
}
//this --> refer to current obj and it is used to refer current obj properties.
console.log(User.greeting()) //--> Hey! Buddy You are Nishant

