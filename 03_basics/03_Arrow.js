
// this-->
//      => It refer currect context.
const box ={
    color:"red",
    quant : 5,

    welcomeMessage:function(){
        console.log(`${this.color}, welcome here`)
    }

}
box.welcomeMessage() //red, welcome here

box.color="BLUE";
box.welcomeMessage()//BLUE, welcome here
 
/*
    => Here u can see value change from red to blue
    => it happen because we used "this"
*/

console.log(this); //{}--> empty cause nothing is there


// this will work only for obj it will not wrk for function see E.G
function food ()
{
    let spice = "mirchi"
    console.log(this.spice); //undefined
}
food();

//--------------ARROW FUNCTION --------------------
/*
    Syntax:-
        () => {}
    --> u can hold it by a variable

*/
const lunch =  () =>
{
    let spice = "mirchi"
    console.log(this.spice); //undefined
}
lunch();

//e.g:-
const addNum = (num1,num2) =>
{
    return num1 + num2
}

console.log(addNum(2,1)); //3

/* Arrow function used in different way too like
    -----IMPLICITE RETURN------
    => here we do not use {} 
    => one line 
    => if Use {}  ---> return write
       if Use ()  ---> Not req
    e.g:
*/

const mulNum = (num1,num2) =>  (num1 * num2)
console.log(mulNum(2,4)); //8


const newArr = [2,5,67,85,9]
newArr.forEach((ar)=>console.log(ar) );


