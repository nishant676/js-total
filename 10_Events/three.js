/*
    setInterval():-
        => work after some time but it work for continoius never stop
        syntax:-
        setInterval(function(){},time)
    => u can pass parameter via setInterval
     syntax:-
        setInterval(function(),time,"parametetr")
*/

setInterval(()=> {
    console.log("rummy")
},1000);

// modify --uper edition:

const variable = function(str)
{
    console.log(str);
}

setInterval(variable,500);

// passing parameter

// const stop = setInterval(variable,1000,"wow");

/*
    ======================
    To stop the setInterval we use 
    --> clearInterval():-
*/

clearInterval(stop);


// -> click Start --> start printing
// -> click stop --> stop printing

// let print = console.log("started");

let intervalId = null;
const printStart = function()
{
    console.log("staring");
}
 document.querySelector('#start').addEventListener('click',function()
{
    if(!intervalId)
    intervalId=setInterval(printStart,1000);
})

 document.querySelector('#stop').addEventListener('click',function()
{
    clearInterval(intervalId);
    intervalId = null;
})