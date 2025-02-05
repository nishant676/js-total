//---------(2).Via Constructor/ singleton-----
/*
Type:1-------
const bumble = new Object()    //----> singleton obj
Type-2-----
const bumble1 = {}  //---> {} ----> Not singleton obj
console.log(bumble)  //{}
console.log(bumble1)  //{}

*/

const tinderUser= {}
     tinderUser.id = "123abv"
     tinderUser.name = "alok" 
     tinderUser.isLoggedIN = false;

     console.log(tinderUser); //{ id: '123abv', name: 'alok', isLoggedIN: false }

const regularUser ={
    email :"mvp23@gmail.com",
    fullName:{
        userFullName :{
            firstName :"Nishant",
            lastName :"Mishra"
        }
    }
}
console.log(regularUser.fullName)
console.log(regularUser.fullName.userFullName.firstName);

/*---------(a) How to ADD 2 OBJ inTO ONE--------
 Object.assign(target,source):-
            => it is return type , means store it
            => good to provide in target place give "{}" 
            => and in source place provide obj name u want to combine
*/

const obj1 = {10:"a", 20:"12"};
const obj2 = {30:"b", 40:"10"};
const obj3 = {50:"c", 60:"22"};

const obj4 = Object.assign({},obj1,obj2,obj3);
console.log(obj4)

// (b) Another way
//  :-SpreadOperator(...source , ...source2)
//              => ... 3 dot necessary then write source name
//                => Spread operator help to merge
//                 => To Use write inside {} braces

    const obj5 = {...obj1 , ...obj2};
    console.log(obj5);  //{ '10': 'a', '20': '12', '30': 'b', '40': '10' }

    /*
        (c) In OBj how to print/ take only keys or values
        => store in an array format
        => to use :- Object.keys/values(obj Name)
    */

   //-----> for all keys:-----
   console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIN' ]

   //-----> for all values:------
   console.log(Object.values(tinderUser));//    [ '123abv', 'alok', false ]



   //--->(D) Check property present or Not in obj 
   console.log(tinderUser.hasOwnProperty('isLogged'))


/*
    IMP:- How TO Collect Value from obj
         => When Use:- in obj if need to call a value is more then use
         => previously get value from obj like : objname.propery --> to get value
         => But now u want maximum tym use then its like messy to write so use like:-
         SYNTAX:- 
             const {property u require} = property containing object 
             => or const {prpertyname : u want tocall by name} = property containing obj name
             => from now on if u need the propert value
              -> then just write "console.log(propert name)"
*/

   const course = {
    coursename :"javascript",
    price : "999",
    courseteacher : "mark"
   }
//Type-1 to write
   const {courseteacher} = course;
   console.log(courseteacher); //mark

//Type-2 to write
   const{coursename: name} =course;
   console.log(name);//javascript