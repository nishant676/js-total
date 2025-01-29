/*
    Memory divided 2 type
     i) Stack (Store primitive) 
     ii)Heap  (store Non-primitive)
*/
//-------Stack---------------
let home = "jeypore"
let place = home
place = "SWITCHZERLAND"
console.log(home)
console.log(place) 
/*
    Here home provide duplicate value to place so , if u change value at place it will no effect at home
*/

//---------Heap------------
let userOne ={
    email: "nt132@gmail.com",
    phno : 3986567897
} 
let userTwo = userOne

userTwo.email="nobita343@gmail.com";
console.log(userOne)

/*
    in heap userOne vlue direct to one refernece where all value store and 
    here userTwo assign userOne so the same reference it assign to userTwo means 
    if u change anything in userTwo it will affect Userone value 
*/