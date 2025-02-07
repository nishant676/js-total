{} //------> is called "SCOPE"

//---> basically if  we declare we get value
let a = 10;
const b = 30;
var c = 50;

console.log(a); //10
console.log(b);//300
console.log(c);//50

//But what if i declare values in a block & try to print

if(true)
{
    let d =10;
    const e =15;
    var f= 20; 
}
//console.log(d); // not defined (correct)
// console.log(e);// not defined (correct)

console.log(f); //20

/*
    NOTE:-
     => Notice "f" is present inside a block but still return its value.
     => reason is "var"
     => global value can use in local block but local block value cant be used outside block
     
     => Another reason why instead of var let is used vastly
*/

let A = 300;

if(true)
{
    let A = 10;
    const B = 20;
    console.log("Inner Scope: "+A); //10
}
console.log(A); //300


//--------NESTED SCOPE----------------------

function one()
{
    const fullName = "Nishant"

    function two()
    {
        const insta = "nt_mishra"
        console.log("Name:"+fullName);
    }
       // console.log(insta);// error------
    two(); //Name : Nishant
}
one();

/* 
        Why Error:-
            => function one is parent & function 2 is child so, parent property can access by child
            => but parent can't access child property
            --> similar func2 use value of func1 but func1 can't use value from func2
*/



//--------------INTERESTING------------

//what if i call a function before it has been declared

console.log(add(2));//3
function add(num)
{
    return num+1;
}
console.log(add(2));//3

// but see here in case of const:
console.log(addTwo(2))// ERROR---------->

const addTwo = function(num)
{
    return num+2;
}
console.log(addTwo(2))//4
