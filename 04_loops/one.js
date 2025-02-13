//---------------loop-------
//*For of loop------------
const  arr =[2,6,9,8,7];
for(const num of arr)
{
    console.log(num);
} // 2,6,9,8,7

/*
 Another form of writing loop
 => Inside for() --> num --> variable
                ---> arr --> which avariable u want to print
*/

const greeting = "Hello World!";
for(const word of greeting)
{
    console.log(`Each char is ${word}`);
}


//---------------MAP------------------
/*
    => Store as key value paor
    => Duplicate not allowed
    => ordered remember
*/
const map = new Map()
map.set('IN',"India");
map.set('USA',"United States")
map.set('Fr',"France");
map.set('USA',"United States")
console.log(map);//Map(3) { 'IN' => 'India', 'USA' => 'United States', 'Fr' => 'France' }


for(const key of map)
{
    console.log(key);//[ 'IN', 'India' ]  [ 'USA', 'United States' ]   [ 'Fr', 'France' ]
}

/*
Here u can see rather than printing only key it prints all key and value 
*/

//if you want to print only key  then:-

for(const [key,value] of map)
{
    console.log(key);//IN  USA    Fr
}


// for of loop not applicable in case of obj
const myObj={
    'tiffin':'dosa',
    'lunch':'biriyani'
}