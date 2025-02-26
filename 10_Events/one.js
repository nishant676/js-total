/* Approach-1:-
      => when click on owl display msg.

document.getElementById('owl').onclick = function()
{
    alert('owl clicked');
}
    
*/

// Approach-2:- (best)
document.getElementById('owl').addEventListener('click',function(){
    alert("Owl clicked again");
})


document.getElementById('owl').addEventListener('click',function(e){
    console.log(e);
},false)

/*
=> here inside addeventlistner we write "false"/"true"
---> by default it wil false
--> its called "event propagation" 2 types:-
                 -->"event bubbling" --> mostly used(fale)
                 -->"event Capturing"--> rarely used(true)

    event bubbling ---> bottom to top(inside to outside)--> e.stoppropagation
    event capturing --> top to bottom
*/


/* => some events u have to know
=================================================
 ---> type , timestamp , defaultPrevented,
  ---> target , srcElement, currentTarget,
  ---> clientX , clientY , screenX , screenY,
  ---> altkey, ctrlkey , shiftkey, keycode
========================================================*/


document.getElementById('google').addEventListener
('click',function(e)
{
    e.preventDefault(); // prevent from go to website
})

/*
  I want when click img it will dissapear
  => e.target----> where ever u click it will take that value of id or anything
  => e.target.parentNode-->it will select parent id / value
  => e.target.tagName ---> return the tagname like ul ,li
*/
document.querySelector('#images').addEventListener
('click',function(e)
{
    if(e.target.tagName === 'IMG')
    { 
        console.log(e.target.id);
    console.log(e.target.parentNode )
    let removeIt =e.target.parentNode
    removeIt.remove(); // remove() --> used for remove
    }
})