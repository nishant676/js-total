/*
console.log(2 > 1); true
console.log(2 >= 1) true
console.log(2 < 1) false
console.log(2 <= 1) false
console.log(2 == 1); false
console.log(2 != 1) true

*/

// here automatically convert string to int for comparision
//console.log("2" > 1) // true
//console.log("02"> 1) // true

/*
-----------null----------------
console.log(null == 0) //false
console.log(null > 0) // false
console.log(null >= 0) // true
console.log(null < 0) // false
console.log(null <= 0) //true
console.log(null != 0) //true
*/

/*
console.log(null >= 0) // true

cause:- equality check == & comparision > ,< , >=,<= work different
       ->Comparison convert null to num , treating it as 0.(null =0)
       -> thats why null >= 0 ---> true
                    null > 0 ---->false
*/

//undefined
console.log(undefined > 0) // false
console.log(undefined < 0) // false
console.log(undefined == 0) //false


// -------- diff bet == and ====  ------


