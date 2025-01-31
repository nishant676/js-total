 /*

=>To add one array into another (merging)
  -> push() --> not merge look like 2 array separate live together.
  -> concat() --> okay but not use widely..
  -> spread() --> mostly used ..:-covert array to every element
 */

  const marvel = ["captain","iron_man","thor","hulk"]
  const dc = ["superman","flash","aquaman"];

  //push():-
  marvel.push(dc);
  //console.log(marvel); 
  //['captain','iron_man','thor','hulk', [ 'superman', 'flash', 'aquaman' ]  ]      
  


  //concat:-
  const heroes = marvel.concat(dc);
  console.log(heroes);
  //[ 'captain','iron_man','thor','hulk',[ 'superman', 'flash', 'aquaman' ],       'superman','flash', 'aquaman']


/*
        spread(...arr1 , ...arr2):-
            => u can take as many array u want
            => ... dots imp before array
            => merge 2 array
            => convert to individual element

*/
const allNewHeroes = [...marvel,...dc];
console.log(allNewHeroes);

// [  'captain','iron_man', 'thor','hulk','superman','flash','aquaman']


/*

flat():-
 => USE WHEN-->if in one array multiple array present 
 => nested array to one array
 => take parameter how many array u want to convert
 => also take "Infinity" --> convert all to one

*/

const oneArr = [1,2,3,[4,5,6,7,[8,9,10]]];
const ansArr = oneArr.flat(1); //[ 1, 2, 3, 4, 5, 6, 7, [ 8, 9, 10 ] ] 
const arrArr = oneArr.flat(Infinity);//[1, 2, 3, 4,  5,  6, 7, 8, 9, 10]
console.log(ansArr);
console.log(arrArr);



/*================================================================================================
       Array.isArray():-
            => return boolean
            => check given arry present or not
*/
console.log(Array.isArray("myArr"));//false

/*========================================================================================================
        Array.from():-
                => convert given thing to array
                => like "sonu" ---> ['s','o','n','u']
                =>(Array.from({name:"nishant"})) ---> []
                |_-> empty cause u did not specify convert "Key" or "Value"
*/

console.log(Array.from("sonu"));//[ 's', 'o', 'n', 'u' ]
console.log(Array.from({name:"nishant"}));// []

/*===================================================================================================
        Array.of():-
                => Here pass variables and it will take that variable value and convert to array 
                
*/

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]