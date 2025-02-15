// ------Learn ForEach Loop----------------

const snacks = ["wada","puliyaruum","dosa","puri"];

// Type:1-----> using function name:-
snacks.forEach(function(tifin)
{console.log(tifin)});// wada puliyaruum dosa puri


// Type:2-----> Using Arrow Function:-
snacks.forEach( (item)=>{
    console.log(item);
})// wada puliyaruum dosa puri

//Type:3-----> Also print index and arr:-
snacks.forEach( (item, index , arr) => {
    console.log(item, index, arr);
}) 
/* o/p:
  wada 0 [ 'wada', 'puliyaruum', 'dosa', 'puri' ]
puliyaruum 1 [ 'wada', 'puliyaruum', 'dosa', 'puri' ]   
dosa 2 [ 'wada', 'puliyaruum', 'dosa', 'puri' ]
puri 3 [ 'wada', 'puliyaruum', 'dosa', 'puri' ]
*/


// -----For array of obj use:-
const mobiles =[
    {
        mobileName :"samsung",
        mobileprice : 12000
    },

    {
        mobileName : "vivo",
        mobilePrice: 4500
    },

    {
        mobileName: "Apple",
        mobilePrice: 65000
    }
]

mobiles.forEach( (cell) => {
    console.log(cell.mobileName);
}) //samsung vivo Apple
