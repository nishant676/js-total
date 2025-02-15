//---------DOM Concept
/*
    In console u can use ur id name to use certain maethod like

    <h1 id ="title" > Dom Learning Bro Chase</h1>
   
-----> here u want to perform something   via"Id"

=> title.padding = "15px"; ---> padding applied
=> title.style.backgroundColor = "green"----> applied

---> Via id print content ----

=> title.textContent ----->"Dom Learning Bro Chase"
=> title .innerHTML ------>"Dom Learning Bro Chase"
=> title .innerText -------> "Dom Learning Bro Chase"


**********Diff betn innerText & innerContent***********
<h1 id = "title" > DOM LEArn With Nishant <span> test text</span></h1>

if u write :-
=>title .innerText----->"Dom Learning Bro Chase test text "
=> title.textContent---->"Dom Learning Bro Chase test text"

+++++ Both same But , if i add style+++++++

<h1 id = "title" > DOM LEARn With Nishant <span style ="display:none;"> test text</span></h1>

***Now :-
=>title .innerText----->"Dom Learning Bro Chase  "
=> title.textContent---->"Dom Learning Bro Chase test text"

    [In 
        innerText:- show only  that are visible
        textContent:- show hidden things too that is hide cause of anything
        innerHTML :- show value with tags like span , style ]
*/

// #QuerySelectors---------------------->
//  ---> All type of css type thing can write inside like input password , class , id ,img , p:firstchild
/*
(i) document.querySelctor('h1');
          => it provide 1st h1 tag uses in the page

(ii) document.querySelector('#title');--> for id use # symbol
          => provide id details
     document.querySelectoe('.hero');--> for class use . symbol
          => provide class details
    

    ++++++++++++++++++++++++++++++++++++
    <ul>
            <li>hero1</li>
            <li>hero2</li>
            <li>hero3</li>
        </ul>


    const mylist = docuent.querySelector('ul');---> all ul value inside variable
    const turncolor = mylist.document.querySelector('li');----> storing lists inside variable

    turncolor.style.backgroundColor = "red"----> color change
    turncolor.innerText ----> print value
    turncolor.innerText = "hydra" ----> change & print value

    ##################################################

(iii) document.querySelectorAll():-
        => select all the elements
       e.g.:-
            document.querySelectorAll('li');
                --> provide node list
            NOTE:- node list & array both diff 
                => some methods not present in node list like map     
    BUT,

    ****IMP****
    const allval = document.querySelector('li');
    allval.style.color="blue";------> ERROR[cause it cant apply to all lists be specific]

    allval[0].style.color = "blue";    ----> okay

    **If u apply to all then use "ForEach"
    ==>myval.forEach( (l) => {l.style.color="green"})
*/ 

/*
    ***********getElementByClassName():-
        => take class as name
        => return like HTML collection
NOTE:-
    HTML collection && node list && array all 3 are not same 
---> for each method not avail in html collection

==> to use this convert to array

******Array.from()-----> convert to array

    e.g:-
        const myval = document.getElementByclassName("listt");--> store in a cvariable
        // convert to array

        Array.from(myval)---------> converted
        .. then perform operation
        const change = Array.from(myval);
        change.foreach((l)=> l.style.color = "blue");---
*/
