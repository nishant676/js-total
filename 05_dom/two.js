/*
    #If u want to know what does this class contail:-
      => Use "documentQueerySelector"---> one class then 
             "documentQueerySelectorAll" --->more than 1 class

             NOTE:- while write cls name use . dot before that

 e.g:-
     const parent = document.querySelector('.parent');
 console.log(parent);
 console.log(parent.children);---> to acccess children sub class
                    => return in HTML collection format
                --> if u want to access that

  --->  console.log(parent.children[1]);---> like array return  1 index children
        => o/p--> <div class="day">WednessDay</div>

        :---IF u use "innerHTML"
  ---> console.log(parent.children[1].innerHTML);
        => o/p--> WednessDay
        
# can use for loop in HTML collection

*/

/*
*** Using query if u r parent want to select first child or last child:-

 =>parent.children[1].style.color = "orange"-----> color change

 =>console.log(parent.firstElementChild) ----> print--> class name--->  <div class="day">Monday</div>
 =>console.log(parent.lastElementChild) ----> print--> class name----> <div class="day">Thursday</div>
*/

/*
*** If u r child and want to know parent
const dayOne = document.querySelector('.day');-----> child clas name given

!!parentElement:-
console.log(dayOne.parentElement);----> o/p---> parentclass name

!!nextElementSibling:-
console.log(dayOne.nextElementSibling);---> o/p---> next child name provide
*/

/*
------------------CHildNODES--------------
console.log("Node:",parent.childNodes);
    => o/p --->Node: NodeList(9) [text, div.day, text, div.day, text, div.day, text, div.day, text]

   --> wonder how 9 list instead of 4 
   ---> it count evry possible thing like

   ---> after declare clas u provide new line ---> count as "text"
   ---->for sub class "day"----> count
   ---> if u use comment also it will count
*/