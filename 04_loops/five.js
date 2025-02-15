
const newNum =[1,2,3,4,5,6,7,8,9,10]
// Adding 10 to every num
const myNums =newNum.map((no)=> no + 10)
console.log(myNums);//[ 11, 12, 13, 14, 15,16, 17, 18, 19, 20 ]


// chaining

const nums = newNum
            .map( (no)=> no*10)
            .map( (no)=> no+1)
            .filter((no)=> no%2!=0)
console.log(nums);