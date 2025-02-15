// Use filter

const num =[1,2,3,4,5,6,7,8,9];

// Type:-1-----------
const result = num.filter( (no)=> no>5)
console.log(result); //[ 6, 7, 8, 9 ]

// Type:-2-----------
const value = num.filter( (numb)=>
{
    return numb>5
})
console.log(value); //[ 6, 7, 8, 9 ]

/*NOTE:-
    In type 1 arrow func we write condition insode () so no need anything..
    But,
    Int type 2 arrow func we write condition inside {}  --> here u should write "return".

    conclusion--->
        => in arrow func ()--> no need for "return"
                       {}--> use "return" 
    => if u  open a scope {} then return is mandatory
*/


// Type:-3-----------
num.filter((no) => no%2==0).forEach( (numb) =>{
    console.log(numb)
})// 2,4,6,8

//// Type:-4-----------

const newArr=[]

num.forEach( (no)=>
{
    if(no%2!=0)
    {
        newArr.push(no) // push ()--> use to add value in arrayes
    }
}
)
console.log(newArr); //[ 1, 3, 5, 7, 9 ]
