// IIFE = Immediately Invoked Function Expression
/*      =>In global scope we getpollution some time
          to remove the polution from that variable we use iife

          => named iife and unnamed iife
*/ 
function dosa()
{
    console.log(`connect`);
}
dosa();//connect

// same function if i write using iife
(function panner()
{
    console.log(`forget`);
})(); //forget

/*
     Above u can see without calling a function name the function excecuted.
     => 2nd () ---> use for call the func immediatly
     => But only u write () after func not work...
     => We know () --> what ever u write inside it create scope inside
     Here i write func inside ().
*/


// using arrow iife
( () =>
{
    console.log(`hii`)
})(); // hii

// if u are using variable
((mister) =>{
    console.log(`Good Moring ${mister}`);
})('rakhit') //Good Moring rakhit 