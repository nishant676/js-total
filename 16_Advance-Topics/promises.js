/*
    # Promise:-
        => its a obj represent completion / failure of an asynchrounous operation & its value.
        => by using "new" we can create new promise.
        => inside it take a function with 2 para---> (i) resolve , (ii) reject
        => not necessary to store promise in a variable.
*/

const savePromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`Async is completed..`);
        resolve();
    },1000)
})

savePromise.then(function()
{
    console.log("Promises consumed..")
})
/*
    => in "new promise" we execute a function and whatever it provide we store it in a  variable

   (#) .then:-
            => then is directly connected with "resolve"
            => then is also having a function. it automatically recieved one argument
            => used to "return" the value u get from the promise function.
            =>Can use "then" multiple times for a promise. 
    NOTE:-
        => u can see after run inside then function is not printed but it run okay.
        => cause u didn't connect  resolve and then
        => for connection use "resolve()"--> this method use to esatblish connection.
        --> u can see i also used inside the promise function used resolve method  
*/
//------------------Customize--------------------------

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async2 is completed..")
        resolve();
    },2000)
}).then(function(){
    console.log("Async2 is resolved..")
})

//------Pass data from "promise" to "then" using connection of "resolve" and "then"
// Widely people send Object through parameter.

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function()
    {   
        resolve({userName:"batman",email:"batman@gmail.com"})
    },1000)
})

promiseOne.then(function(user){
    console.log(user);
})

//-----------BOTH RESOLVE AND REJECT USE-----------
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error)
            {
                resolve({UserName:'rocklee',password:'1234'})
            } 
        else{
            reject('ERROR: Something went Wrong')
        }
    },1000)
})

// if i want to print only username rather than printing all obj properties
promiseFour.then((user)=>{
    console.log(user);
    return user.UserName; // it will print all obj prperty ---use chain hell --> again use then
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log(`promise run / rejected`);
})

/*
    Catch():-
          => it will catch if something rejected.
          => in promises inside function if u pass value for both resolve and reject then u must have to use catch.

    finally:-
        => it will execute every time.
        => doesnt matter u r resolve or reject it will work every time
        => to show yes function execute and run .
*/


//====================Using async awaits==============

async function consumePromiseFour(){
       try{
        const response = await promiseFour
        console.log(response);
       }
       catch(error)
       {
        console.log(error)
       }
}

consumePromiseFour();

/*
    asynch , await:-
            => same work as then , catch . 
            => it will wait for sometime if it happen then only move forward otherwise give u error.

*/

//===========Speed compare await & then ==========

async function getData()
{
    try{
        const response = await fetch('https://api.github.com/users/nishant646')

        const data = await response.json()
        console.log(data)
    }
    catch(error)
    {
        console.log(error);
    }
}

//----------------------------------------
fetch('https://api.github.com/users/nishant646')
.then((res)=>{
    return res;
})
.then((data)=>
{
    console.log(data)
}).catch((error)=>
{
    console.log("Erro:"+error);
})