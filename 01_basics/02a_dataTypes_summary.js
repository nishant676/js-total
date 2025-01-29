//DataTypes --> 2types
/*
    1. 7 types
      -> String , Number, Boolean, null, undefined, symbol, BigInt
      - stymbol == to make a value unique

    2. Reference Type(Non- primitive)
      -> Array, Objects , Functions
*/

//--------------------Primitive---------------
let name = "Nishant" //String
const score = 200  //Number
const isLoggedIn = false //boolean
const outSideTemp = null // null
let userEmail;  // undefined

//symbol
const id = Symbol('123')
const anotherID = Symbol('123')
console.log(id === anotherID); //false


const bigNumber = 74521287412145878995n //bigInt

//--------------------Non- Primitive-----------

// i)Arrays->
 const heros = ["captain","spider","Ironman","Thor"]

 // ii)Objects (key , value) pair store
        //-> write within curly braces as in key value pair
 let myObj =
 {
     name : "Nishant",
     age : 45
 }

 // iii)functions
   const myFunction =  function()
   {
    console.log("Hey!!!")
   }

   // ----------------Type of Uses----
    console.log(typeof score) // number
    console.log(typeof outSideTemp) // object
    console.log(typeof myFunction) // function
/*
   Note:- typeof of null ---> result---> object
        - typeof of function ---> result--> function
*/


  