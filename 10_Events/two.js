/*
    setTimeOut():-
     => means, give me some time after that i work for one time to complete
     => syntax:
         setTimeout(function(){},time in sec like 100,300) 
         setTimeout(() => {},2000)
*/
setTimeout(() => {
    console.log("nishant")
}, 1000);

//#. for more easy way provide this in to a variable to easy use like

const sayName = function()
                {
                    console.log("nishant");
                }

setTimeout(sayName,2000);

// #. Change my h1 tag name within time
const change = document.querySelector('h1').innerHTML="Bindaas";
const changeMe =setTimeout(change,2000);  
//#. To Change the thing with in the time 
//      use:-[clearTimeout()]

clearTimeout(changeMe); 

// TO stop with click we can take help of add listner

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeMe);
    console.log("Hey..stop!");
})