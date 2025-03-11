/*
console.log(Math.PI);//3.141592653589793
Math.PI = 8;
console.log(Math.PI);//3.141592653589793---Cannt override
*/
//=================================================

/*
Some obj property we cannot changed like above e.g
=> Obj have some property that doesnot allow them to change/ configure/edit
=> so, we can make that kind of obj means we can config like them
--> we can cahnge obj propert like it can changable or not reinitialize or not 
*/





const descripter = Object.getOwnPropertyDescriptor(Math,'PI')

console.log(descripter);
/* o/p
{
  value: 3.141592653589793,        
  writable: false,
  enumerable: false,
  configurable: false
}
*/
const tea = {
    name :'masal tea',
    price :150,
    isAvailable: true
}
/*
    for every obj u can see the obj descripter/ description 
    => via using "Object.getOenPropertyDescripter(objectname , property name)"
*/

console.log(Object.getOwnPropertyDescriptor(tea,'price'))
/*
{ value: 150, writable: true, enumerable: true, configurable: true }
 */

//-----I'm changing property of the object::--------
Object.defineProperty(tea,'price',{
    writable: false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(tea,'price'))
/*
{ value: 150, writable: false, enumerable: false, configurable: true }
*/


