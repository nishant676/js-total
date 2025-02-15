//---------reduce()--------------
/*
    => take 2 parameter --> initail val , current value
    => perform operation
    syntax:-
    num.reduce( function(acc , currval){
    return acc + cuuval} ,0)

==> here acc --> initial value
        curr --> current value
==> and at the last after a comma we enter initial vlaue
    ==> name is fixed keyword for accumulator (acc)
*/


const nums = [1,2,3,4];
//Type:1------------>
const mynums= nums.reduce(function (acc , currval){
    return acc+ currval
},0);
console.log(mynums); //10

//Type:2------------>
const total = nums.reduce( (acc,currval)=> acc+ currval ,0);
console.log(total); //10

const movieDay =[
    {
        name:"tamasha",
        price : 150
    },

    {
        name:"phantom",
        price : 450
    },
    {
        name:"turbo",
        price :650 
    }
]

const newDay = movieDay.reduce( (acc,items)=> acc+items.price,0)
console.log(newDay);//1250