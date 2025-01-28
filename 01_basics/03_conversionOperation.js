let score = "33"
console.log(typeof score)
console.log(typeof(score))

let valueChange = Number(score)
console.log(typeof valueChange)//type change

let kei = "43abc"
console.log(typeof kei)
let values = Number(kei)

console.log("values:"+values)
console.log(typeof values) // NON--> No a number

//Null
let mon = null;
 valueChange = Number(mon)
console.log("mon:"+valueChange)
console.log(typeof valueChange) // object ->1(ans)

//undefined
let pop
 valueChange = Number(pop)
console.log("pop:"+valueChange)
console.log(typeof valueChange) // NAN (ans)

//boolean
let fav = true
valueChange = Number(fav)
console.log("fav:"+valueChange)
console.log(typeof valueChange) //1


/*--------------conversion to number---------
 "45" => 45
  "45abc"=>NAN
   true => 1; fale => 0

*/

