//Arrays

//Type-1 to Create Arrays
const myArr = [0,1,2,3];
console.log(myArr);


//Type-2 to Create Arrays
const  myArr2 = new Array(1,2,3,4);
console.log(myArr[2]);


//------------Arry Method------------------------


/*
        1> push():-
            => it will add into the array
*/
myArr.push(6);
myArr.push(8);
console.log(myArr); //[ 0, 1, 2, 3, 6, 8 ]

/*
        2>pop():-
           => remove last value from array
           => Here 8 is removed
*/

myArr.pop();
console.log(myArr); //[ 0, 1, 2, 3, 6 ]

/*
        3>unshift():-
           => In parameter what ever value u provide that add in the begining of array
           => Bad to use
*/

myArr.unshift(7);
console.log(myArr);//[ 7, 0, 1, 2, 3, 6 ]

/*
        4>shift():-
           => remove first element in the array
*/
myArr.shift();
console.log(myArr);//[ 0, 1, 2, 3, 6 ]
myArr.shift();
console.log(myArr);//[ 1, 2, 3, 6 ]

/*
        5>includes():-
           => return boolean
           => used to check element present or not in array
*/
console.log(myArr.includes(4));//false

/*
        6>indexof():-
           => return index no. of the number given
           => not present return -1
*/

console.log(myArr.indexOf(2)); //1
console.log(myArr.indexOf(20)); //-1

/*
        7>.join():-
           => convert array to string
           => 
*/
           const newArr = myArr.join();
           console.log(newArr);// 1,2,3,6
           console.log(typeof newArr);//string

/*
        8>slice():-
           => (1,3) -> Here 1-> inclusive & 3 exclusive
           =>  means , on the index basis index -> 1,2 print
        NOTE:- slice create a new Array
*/

    const myn1 = myArr.slice(1,3);//        0,1,2,3
    console.log("Before Slice ->"+myArr);// 1,2,3,6
    console.log("After slice ->"+myn1);// 2,3


    
/*
        9>splice(strt point , count):-
           => U pass strt point  & a count value to remove/replace/add 
           =>  means, it remove from  strt point value and stop when complete count time removal
        NOTE:- Splice modify the original array
                                     index ->    0,1,2,3
                                                [1,2,3,6]
*/
const myn2 = myArr.splice(1,2);//           
console.log("Before Splice ->"+myArr);// 1    
console.log("After Splice ->"+myn2);// 2,3