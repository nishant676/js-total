const score = 900
console.log(score); //900

const balance = new Number(400);
console.log(balance); //[Number: 400]

/*
     i) toFixed(number):-
            -> provide decimal after ur num 
            -> in parameter the num u provide accod it generate zero
*/
console.log(balance.toFixed(2));//400.00
console.log(balance.toFixed(3));//400.000

/*
     ii) toPrecision(number):-
            -> convert precise value (roundof)
            ->priority provide before decimal
*/
const bill = 647.845;
console.log(bill.toPrecision(3));//648
console.log(bill.toPrecision(5));//647.85

/*
     iii) toLocalString():-
            -> provide commas for better reading in nums.
            -> default Us std so provide comma according to thaat
            -> for indian Use :- ('en-IN') pass in parameter 
*/

const salary = 1000000000;
console.log(salary.toLocaleString());//1,000,000,000
console.log(salary.toLocaleString('en-IN'));//1,00,00,00,000




//++++++++++++++++++++++++ MAths +++++++++++++++++++

/*
     i)Math.abs(number):-
          -> convert -ve num to +ve num
*/
console.log(Math.abs(-85)); //85

/*
     ii) Math.round(number):-
        -> precise the value(round of number)
        -> ceil()
               -> take before decimal means increase
        -> floor()
                -> take after decimal mean not change
*/

console.log(Math.round(6.7));//7
console.log(Math.round(4.1));//4


/*
     iii) Math.random:-
            -> generate random num between 0 to 1  like 0.1,0.2
            -> genrate number above 1 then => (math.randon() *10)+1
            -> simple multiply with 10 and then add 1
            -> if you do not want decimal then use math.floor()

*/

console.log(Math.random());//0.021
console.log((Math.random()*10)+1);//5.931
console.log(Math.floor(Math.random()*10)+1);//4

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1 )) + min);//18
