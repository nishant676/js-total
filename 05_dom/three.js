/*
---------------Create New Element--------------
# document.createElement('div');
           => o/p----> <div></div>
    :- inside () what ever tag u give that attribute generate like h1, h2 etc

    const div = document.createElement('div');

    => set class name:-
           ---> div.className  = "main"

     => set id :-
           ---> div.id  = (Math.round(Math.random) * 10 +1)--> generate num
    
    => set Attribute :-
      ---> div. setAttribute("title" , "generate title")

    => set style:-
    ---> div.padding = "10px";
    ---> div.backgroundColor = "green";  
*/

//----------Now u want to add text inside that div------------------

/*
    #document.createTextNode():-

    const addText = document.createTextNode("Nishant")
    
*** For add to ur div ---USE---"[appenChind]"

div.appendChild(addText)------>added

======> but still not display in sccreen=========
    -----> cause it just added in memory 
  ---> to show up append with body

########### just append with body------

document.body.appendChild(div);
            ----> inside parameter write class name
              

*/